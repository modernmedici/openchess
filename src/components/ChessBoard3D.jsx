import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { Chess } from 'chess.js'
import ChessPiece from './ChessPiece'
import { useChessGame } from '../hooks/useChessGame'

const LIGHT_SQUARE = '#f0d9b5'
const DARK_SQUARE = '#b58863'
const HIGHLIGHT_FROM = '#f6f669'
const HIGHLIGHT_TO = '#baca2b'

function Board({ highlightSquares }) {
  const squares = []
  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
      const isLight = (rank + file) % 2 === 0
      const x = file - 3.5
      const z = -(rank - 3.5)

      // Check highlight
      const squareName = String.fromCharCode(97 + file) + (rank + 1)
      const isFrom = highlightSquares?.from === squareName
      const isTo = highlightSquares?.to === squareName
      const color = isFrom ? HIGHLIGHT_FROM : isTo ? HIGHLIGHT_TO : (isLight ? LIGHT_SQUARE : DARK_SQUARE)

      squares.push(
        <mesh key={`${file}-${rank}`} position={[x, 0, z]} receiveShadow>
          <boxGeometry args={[1, 0.12, 1]} />
          <meshStandardMaterial color={color} roughness={0.8} metalness={0.1} />
        </mesh>
      )
    }
  }

  // Board border
  return (
    <>
      <mesh position={[0, -0.05, 0]} receiveShadow>
        <boxGeometry args={[9.2, 0.2, 9.2]} />
        <meshStandardMaterial color="#4a2c0a" roughness={0.9} />
      </mesh>
      {squares}
    </>
  )
}

function getLastMoveSquares(fen, prevFen) {
  if (!prevFen || prevFen === fen) return null
  try {
    const prevChess = new Chess(prevFen)
    const chess = new Chess(fen)
    // find which square has a piece in fen that wasn't in prevFen or changed
    // simpler: just parse from last move if available
    // We'll detect by comparing boards
    const prevBoard = prevChess.board()
    const curBoard = chess.board()
    let from = null, to = null

    for (let r = 0; r < 8; r++) {
      for (let f = 0; f < 8; f++) {
        const p = prevBoard[r][f]
        const c = curBoard[r][f]
        if (p && !c) {
          // piece left this square
          from = String.fromCharCode(97 + f) + (8 - r)
        }
        if (!p && c) {
          // piece arrived here
          to = String.fromCharCode(97 + f) + (8 - r)
        }
        if (p && c && p.color !== c.color) {
          // capture
          to = String.fromCharCode(97 + f) + (8 - r)
        }
      }
    }
    return from && to ? { from, to } : null
  } catch {
    return null
  }
}

export default function ChessBoard3D({ fen, prevFen }) {
  const { pieces } = useChessGame(fen)
  const highlight = getLastMoveSquares(fen, prevFen)

  return (
    <Canvas
      shadows
      camera={{ position: [0, 8, 8], fov: 45 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[6, 12, 6]}
        intensity={1.4}
        castShadow
        shadow-mapSize={[2048, 2048]}
      />
      <directionalLight position={[-4, 6, -6]} intensity={0.5} />
      <pointLight position={[0, 6, 0]} intensity={0.3} color="#fff8e7" />

      <Board highlightSquares={highlight} />

      {pieces.map((p, i) => (
        <ChessPiece
          key={`${p.type}-${p.color}-${p.file}-${p.rank}-${i}`}
          type={p.type}
          color={p.color}
          file={p.file}
          rank={p.rank}
        />
      ))}

      <OrbitControls
        enablePan={false}
        minDistance={5}
        maxDistance={20}
        minPolarAngle={0.2}
        maxPolarAngle={Math.PI / 2.2}
        target={[0, 0, 0]}
      />
    </Canvas>
  )
}
