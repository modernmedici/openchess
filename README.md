# OpenChess — 3D Chess Opening Tutor

An interactive 3D chess opening tutor with neural voice commentary, cinematic camera moves, and step-by-step explanations of classic openings.

## Features

- **3D board** — rotatable/zoomable camera with OrbitControls; drag to rotate, scroll to zoom
- **6 classic openings** — Ruy Lopez, Italian Game, Sicilian Defense, Queen's Gambit, King's Indian Defense, London System
- **Neural voice commentary** — every move is narrated using [Kokoro TTS](https://huggingface.co/onnx-community/Kokoro-82M-v1.0) (af_heart voice, 82M parameter model), pre-baked as WAV files for instant playback with no model download or loading time
- **Move sounds** — synthesized wood-on-board tick via Web Audio API on every move
- **Mute toggle** — silence commentary at any time; cancels mid-sentence playback
- **Tutorial controls** — Next / Back / Auto-play; auto-play chains off audio `onended` so commentary always plays in full
- **Move panel** — shows move notation, written commentary, progress bar, and full move list

## Tech Stack

- React 19 + Vite 8
- Tailwind CSS v4 (config-less)
- @react-three/fiber + @react-three/drei (Three.js)
- chess.js (FEN parsing, board state)
- Pre-baked WAV files generated with [kokoro-onnx](https://github.com/thewh1teagle/kokoro-onnx)
- Web Audio API (synthesized move sounds)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Adding a New Opening

1. Add the opening to `src/data/openings.js` with `id`, `name`, `description`, and `moves[]` (each move needs `san`, `fen`, `commentary`).
2. Regenerate audio (skips files that already exist):

```bash
pip3 install kokoro-onnx soundfile
python3 generate_audio.py
```

> The script expects `kokoro-v1.0.onnx` and `voices-v1.0.bin` in `/tmp/`. Download them from the [kokoro-onnx releases page](https://github.com/thewh1teagle/kokoro-onnx/releases/tag/model-files-v1.0).

## Project Structure

```
src/
├── components/
│   ├── ChessBoard3D.jsx   — Canvas, board geometry, cinematic camera animator
│   ├── ChessPiece.jsx     — 3D piece meshes (distinct geometry per type)
│   ├── MovePanel.jsx      — commentary, navigation controls, move list
│   ├── OpeningSelector.jsx
│   └── VoiceToggle.jsx
├── data/
│   └── openings.js        — 6 openings × 8 moves with FEN + commentary
├── hooks/
│   ├── useChessGame.js    — FEN → piece positions
│   ├── useOpening.js      — step navigation, auto-play chaining
│   └── useVoice.js        — WAV playback + Web Audio tick
├── App.jsx
└── main.jsx
public/
└── audio/                 — 48 pre-baked WAV files (one per move)
generate_audio.py          — Regenerate audio with kokoro-onnx
```
