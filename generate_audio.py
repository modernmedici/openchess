"""
Pre-generate all chess commentary WAV files using Kokoro ONNX.
Reads openings from src/data/openings.js automatically.
Run from the openchess project root:  python3 generate_audio.py
Output: public/audio/{opening-id}-{index}.wav
"""
import json
import os
import re
import soundfile as sf
from kokoro_onnx import Kokoro

AUDIO_DIR = os.path.join(os.path.dirname(__file__), "public", "audio")
os.makedirs(AUDIO_DIR, exist_ok=True)

DATA_FILE = os.path.join(os.path.dirname(__file__), "src", "data", "openings.js")


def load_openings():
    with open(DATA_FILE, "r") as f:
        content = f.read()
    # Strip the JS export wrapper to get raw JSON
    content = re.sub(r"^export const openings\s*=\s*", "", content.strip())
    content = content.rstrip("\n;")
    data = json.loads(content)
    return [
        {"id": o["id"], "moves": [m["commentary"] for m in o["moves"]]}
        for o in data
    ]


def main():
    openings = load_openings()
    print(f"Loaded {len(openings)} openings from src/data/openings.js\n")

    print("Loading Kokoro model...")
    kokoro = Kokoro("/tmp/kokoro-v1.0.onnx", "/tmp/voices-v1.0.bin")
    print("Model loaded.\n")

    total = sum(len(o["moves"]) for o in openings)
    done = 0

    for opening in openings:
        oid = opening["id"]
        for i, commentary in enumerate(opening["moves"]):
            out_path = os.path.join(AUDIO_DIR, f"{oid}-{i}.wav")
            if os.path.exists(out_path):
                print(f"  skip  {oid}-{i}.wav (already exists)")
                done += 1
                continue
            print(f"  [{done+1}/{total}] generating {oid}-{i}.wav ...")
            samples, sample_rate = kokoro.create(
                commentary, voice="af_heart", speed=1.0, lang="en-us"
            )
            sf.write(out_path, samples, sample_rate)
            done += 1

    print(f"\nDone! {done} files written to public/audio/")


if __name__ == "__main__":
    main()
