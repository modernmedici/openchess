# OpenChess — 3D Chess Opening Tutor

An interactive 3D chess opening tutor with voice commentary, cinematic camera moves, and step-by-step explanations of classic openings.

## Features

- **3D board** — rotatable/zoomable camera with OrbitControls; drag to rotate, scroll to zoom
- **6 classic openings** — Ruy Lopez, Italian Game, Sicilian Defense, Queen's Gambit, King's Indian Defense, London System
- **Cinematic flyover** — on each move the camera arcs over the board and zooms in on the destination square, then glides back to overview
- **Voice commentary** — Web Speech API narrates the strategic rationale for each move; toggle mute in the header
- **Move sounds** — synthesized wood-on-board tick via Web Audio API on every move
- **Tutorial controls** — Next / Back / Auto-play; auto-play chains off speech `onend` so commentary always plays in full
- **Move panel** — shows move notation, written commentary, progress bar, and full move list

## Tech Stack

- React 19 + Vite 8
- Tailwind CSS v4 (config-less)
- @react-three/fiber + @react-three/drei (Three.js)
- chess.js (FEN parsing, board state)
- Web Speech API (TTS, zero cost)
- Web Audio API (synthesized move sounds)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

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
│   └── useVoice.js        — speechSynthesis wrapper + Web Audio tick
├── App.jsx
└── main.jsx
```
