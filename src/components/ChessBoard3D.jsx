import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Chess } from 'chess.js'
import * as THREE from 'three'
import ChessPiece from './ChessPiece'
import { useChessGame } from '../hooks/useChessGame'

const LIGHT_SQUARE = '#f0d9b5'
const DARK_SQUARE  = '#b58863'
const HIGHLIGHT_FROM = '#f6f669'
const HIGHLIGHT_TO   = '#baca2b'

const DEFAULT_CAM = new THREE.Vector3(0, 8, 8)
const DEFAULT_LOOK = new THREE.Vector3(0, 0, 0)

// smooth-step easing
function ease(t) { return t * t * (3 - 2 * t) }

// quadratic bezier P0→P1→P2 at t
function qBez(p0, p1, p2, t, out) {
  const s = 1 - t
  out.set(
    s * s * p0.x + 2 * s * t * p1.x + t * t * p2.x,
    s * s * p0.y + 2 * s * t * p1.y + t * t * p2.y,
    s * s * p0.z + 2 * s * t * p1.z + t * t * p2.z,
  )
}

// ── Camera flyover animator ─────────────────────────────────────────────────
function CameraAnimator({ toSquare, moveKey, controlsRef }) {
  const { camera } = useThree()

  const phase   = useRef('idle') // idle | in | hold | out
  const elapsed = useRef(0)

  const startPos  = useRef(new THREE.Vector3())
  const midPos    = useRef(new THREE.Vector3())
  const zoomPos   = useRef(new THREE.Vector3())
  const zoomLook  = useRef(new THREE.Vector3())
  const tmp       = useRef(new THREE.Vector3())
  const lookTmp   = useRef(new THREE.Vector3())

  useEffect(() => {
    if (!toSquare || moveKey < 0) return

    const file = toSquare.charCodeAt(0) - 97   // a=0…h=7
    const rank = parseInt(toSquare[1]) - 1      // 1=0…8=7
    const sx = file - 3.5
    const sz = -(rank - 3.5)

    // Zoom destination: above & slightly in front of the target square,
    // always angled from the white side so we see the piece face-on.
    const fwd = sz >= 0 ? 1 : -1
    const zoom = new THREE.Vector3(
      sx * 0.35,
      3.8,
      sz * 0.35 + fwd * 3.2,
    )

    // Bezier arc midpoint — rise high between current pos and zoom
    const mid = new THREE.Vector3(
      (camera.position.x + zoom.x) / 2,
      Math.max(camera.position.y, zoom.y) + 4,
      (camera.position.z + zoom.z) / 2,
    )

    startPos.current.copy(camera.position)
    midPos.current.copy(mid)
    zoomPos.current.copy(zoom)
    zoomLook.current.set(sx, 0.3, sz)

    elapsed.current = 0
    phase.current   = 'in'
    if (controlsRef.current) controlsRef.current.enabled = false
  }, [moveKey]) // eslint-disable-line react-hooks/exhaustive-deps

  useFrame((_, delta) => {
    const p = phase.current
    if (p === 'idle') return
    elapsed.current += delta

    if (p === 'in') {
      const dur = 1.1
      const t   = Math.min(elapsed.current / dur, 1)
      const et  = ease(t)
      qBez(startPos.current, midPos.current, zoomPos.current, et, tmp.current)
      camera.position.copy(tmp.current)
      lookTmp.current.lerpVectors(DEFAULT_LOOK, zoomLook.current, et)
      camera.lookAt(lookTmp.current)
      if (t >= 1) { phase.current = 'hold'; elapsed.current = 0 }

    } else if (p === 'hold') {
      camera.lookAt(zoomLook.current)
      if (elapsed.current > 0.55) { phase.current = 'out'; elapsed.current = 0 }

    } else if (p === 'out') {
      const dur = 1.5
      const t   = Math.min(elapsed.current / dur, 1)
      const et  = ease(t)
      camera.position.lerpVectors(zoomPos.current, DEFAULT_CAM, et)
      lookTmp.current.lerpVectors(zoomLook.current, DEFAULT_LOOK, et)
      camera.lookAt(lookTmp.current)
      if (t >= 1) {
        phase.current = 'idle'
        if (controlsRef.current) {
          controlsRef.current.enabled = true
          controlsRef.current.target.copy(DEFAULT_LOOK)
          controlsRef.current.update()
        }
      }
    }
  })

  return null
}

// ── Board squares ───────────────────────────────────────────────────────────
function Board({ highlightSquares }) {
  const squares = []
  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
      const isLight = (rank + file) % 2 === 0
      const x = file - 3.5
      const z = -(rank - 3.5)
      const sq = String.fromCharCode(97 + file) + (rank + 1)
      const isFrom = highlightSquares?.from === sq
      const isTo   = highlightSquares?.to   === sq
      const color  = isFrom ? HIGHLIGHT_FROM
                   : isTo   ? HIGHLIGHT_TO
                   : isLight ? LIGHT_SQUARE : DARK_SQUARE
      squares.push(
        <mesh key={sq} position={[x, 0, z]} receiveShadow>
          <boxGeometry args={[1, 0.12, 1]} />
          <meshStandardMaterial color={color} roughness={0.8} metalness={0.1} />
        </mesh>
      )
    }
  }
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

// ── FEN diff → last move squares ────────────────────────────────────────────
function getLastMoveSquares(fen, prevFen) {
  if (!prevFen || prevFen === fen) return null
  try {
    const prevBoard = new Chess(prevFen).board()
    const curBoard  = new Chess(fen).board()
    let from = null, to = null
    for (let r = 0; r < 8; r++) {
      for (let f = 0; f < 8; f++) {
        const p = prevBoard[r][f], c = curBoard[r][f]
        if (p && !c)                       from = String.fromCharCode(97 + f) + (8 - r)
        if (!p && c)                       to   = String.fromCharCode(97 + f) + (8 - r)
        if (p && c && p.color !== c.color) to   = String.fromCharCode(97 + f) + (8 - r)
      }
    }
    return from && to ? { from, to } : null
  } catch { return null }
}

// ── Main export ─────────────────────────────────────────────────────────────
export default function ChessBoard3D({ fen, prevFen, moveKey }) {
  const { pieces } = useChessGame(fen)
  const highlight   = getLastMoveSquares(fen, prevFen)
  const controlsRef = useRef()

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

      <CameraAnimator
        toSquare={highlight?.to}
        moveKey={moveKey}
        controlsRef={controlsRef}
      />

      <OrbitControls
        ref={controlsRef}
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
