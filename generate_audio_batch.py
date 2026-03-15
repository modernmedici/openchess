"""
Batch audio generator — processes a slice of openings that are missing audio.
Usage: python3 generate_audio_batch.py <start> <end>
  start: first opening index (0-based, inclusive)
  end:   last opening index (exclusive)
Only generates files that don't already exist.
"""
import json
import os
import re
import sys
import soundfile as sf
from kokoro_onnx import Kokoro

AUDIO_DIR = os.path.join(os.path.dirname(__file__), "public", "audio")
os.makedirs(AUDIO_DIR, exist_ok=True)
DATA_FILE = os.path.join(os.path.dirname(__file__), "src", "data", "openings.js")


def load_openings():
    with open(DATA_FILE, "r") as f:
        content = f.read()
    content = re.sub(r"^export const openings\s*=\s*", "", content.strip())
    content = content.rstrip("\n;")
    data = json.loads(content)
    return [
        {"id": o["id"], "moves": [m["commentary"] for m in o["moves"]]}
        for o in data
    ]


def main():
    start = int(sys.argv[1]) if len(sys.argv) > 1 else 0
    end   = int(sys.argv[2]) if len(sys.argv) > 2 else None

    all_openings = load_openings()
    # Only process those missing audio
    missing = [o for o in all_openings
               if not os.path.exists(os.path.join(AUDIO_DIR, f"{o['id']}-0.wav"))]

    batch = missing[start:end]
    if not batch:
        print("Nothing to generate in this range.")
        return

    print(f"Batch: openings {start}–{end if end else len(missing)-1} "
          f"({len(batch)} openings, {len(batch)*8} files)")
    print("Loading Kokoro model...")
    kokoro = Kokoro("/tmp/kokoro-v1.0.onnx", "/tmp/voices-v1.0.bin")
    print("Model loaded.\n")

    total = len(batch) * 8
    done = 0
    for opening in batch:
        oid = opening["id"]
        for i, commentary in enumerate(opening["moves"]):
            out_path = os.path.join(AUDIO_DIR, f"{oid}-{i}.wav")
            if os.path.exists(out_path):
                done += 1
                continue
            print(f"  [{done+1}/{total}] {oid}-{i}.wav ...")
            samples, sample_rate = kokoro.create(
                commentary, voice="af_heart", speed=1.0, lang="en-us"
            )
            sf.write(out_path, samples, sample_rate)
            done += 1

    print(f"\nDone! {done} files written to public/audio/")


if __name__ == "__main__":
    main()
