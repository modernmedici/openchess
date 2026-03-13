// Chess piece geometries — each piece has a distinct silhouette and height:
// Pawn (shortest) → Rook (wide/crenellated) → Knight (angled head) →
// Bishop (tall/thin mitre) → Queen (orb + crown) → King (tallest + cross)

const WHITE_MAT = { color: '#ece8dc', roughness: 0.25, metalness: 0.35 }
const BLACK_MAT = { color: '#2a1a0e', roughness: 0.2,  metalness: 0.5  }

function Mat({ color }) {
  const p = color === 'w' ? WHITE_MAT : BLACK_MAT
  return <meshStandardMaterial color={p.color} roughness={p.roughness} metalness={p.metalness} />
}

// Shared wide base disk that all pieces sit on
function Base({ color, r = 0.28 }) {
  return (
    <mesh position={[0, 0.04, 0]} castShadow>
      <cylinderGeometry args={[r, r * 1.08, 0.08, 20]} />
      <Mat color={color} />
    </mesh>
  )
}

// Thin neck connecting base to head
function Stem({ color, y0, y1, r0 = 0.08, r1 = 0.08 }) {
  const height = y1 - y0
  return (
    <mesh position={[0, y0 + height / 2, 0]} castShadow>
      <cylinderGeometry args={[r1, r0, height, 14]} />
      <Mat color={color} />
    </mesh>
  )
}

// ── PAWN ────────────────────────────────────────────────
// Wide base → narrow stem → ball head  (height ~0.62)
function Pawn({ color }) {
  return (
    <group>
      <Base color={color} r={0.26} />
      {/* body taper */}
      <mesh position={[0, 0.22, 0]} castShadow>
        <cylinderGeometry args={[0.12, 0.2, 0.26, 14]} />
        <Mat color={color} />
      </mesh>
      {/* neck */}
      <mesh position={[0, 0.4, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.12, 0.1, 12]} />
        <Mat color={color} />
      </mesh>
      {/* ball head */}
      <mesh position={[0, 0.55, 0]} castShadow>
        <sphereGeometry args={[0.16, 14, 14]} />
        <Mat color={color} />
      </mesh>
    </group>
  )
}

// ── ROOK ────────────────────────────────────────────────
// Wide base → shaft → wide battlemented top  (height ~0.82)
function Rook({ color }) {
  return (
    <group>
      <Base color={color} r={0.28} />
      {/* shaft */}
      <mesh position={[0, 0.38, 0]} castShadow>
        <cylinderGeometry args={[0.19, 0.22, 0.56, 14]} />
        <Mat color={color} />
      </mesh>
      {/* battlement platform */}
      <mesh position={[0, 0.7, 0]} castShadow>
        <cylinderGeometry args={[0.24, 0.22, 0.08, 14]} />
        <Mat color={color} />
      </mesh>
      {/* four merlons */}
      {[0, Math.PI / 2, Math.PI, (3 * Math.PI) / 2].map((a, i) => (
        <mesh key={i} position={[Math.sin(a) * 0.16, 0.82, Math.cos(a) * 0.16]} castShadow>
          <boxGeometry args={[0.1, 0.14, 0.1]} />
          <Mat color={color} />
        </mesh>
      ))}
    </group>
  )
}

// ── KNIGHT ──────────────────────────────────────────────
// Wide base → shaft → forward-leaning angular horse head  (height ~0.9)
function Knight({ color }) {
  return (
    <group>
      <Base color={color} r={0.26} />
      {/* neck shaft */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <cylinderGeometry args={[0.13, 0.2, 0.38, 12]} />
        <Mat color={color} />
      </mesh>
      {/* head block — angled forward */}
      <mesh position={[0.06, 0.62, 0]} rotation={[0, 0, -0.35]} castShadow>
        <boxGeometry args={[0.22, 0.32, 0.24]} />
        <Mat color={color} />
      </mesh>
      {/* snout */}
      <mesh position={[0.2, 0.52, 0]} castShadow>
        <boxGeometry args={[0.14, 0.14, 0.18]} />
        <Mat color={color} />
      </mesh>
      {/* ear */}
      <mesh position={[-0.04, 0.82, 0]} castShadow>
        <coneGeometry args={[0.05, 0.13, 8]} />
        <Mat color={color} />
      </mesh>
    </group>
  )
}

// ── BISHOP ──────────────────────────────────────────────
// Wide base → tall tapered shaft → ball → mitre spike  (height ~1.05)
function Bishop({ color }) {
  return (
    <group>
      <Base color={color} r={0.26} />
      {/* lower body */}
      <mesh position={[0, 0.28, 0]} castShadow>
        <cylinderGeometry args={[0.13, 0.21, 0.4, 14]} />
        <Mat color={color} />
      </mesh>
      {/* waist ring */}
      <mesh position={[0, 0.5, 0]} castShadow>
        <torusGeometry args={[0.1, 0.03, 8, 20]} />
        <Mat color={color} />
      </mesh>
      {/* upper taper */}
      <mesh position={[0, 0.67, 0]} castShadow>
        <cylinderGeometry args={[0.07, 0.12, 0.3, 12]} />
        <Mat color={color} />
      </mesh>
      {/* orb */}
      <mesh position={[0, 0.87, 0]} castShadow>
        <sphereGeometry args={[0.1, 12, 12]} />
        <Mat color={color} />
      </mesh>
      {/* mitre spike */}
      <mesh position={[0, 1.03, 0]} castShadow>
        <coneGeometry args={[0.04, 0.2, 8]} />
        <Mat color={color} />
      </mesh>
    </group>
  )
}

// ── QUEEN ───────────────────────────────────────────────
// Wide base → tapered shaft → large orb → crown points  (height ~1.15)
function Queen({ color }) {
  const crownPoints = 5
  return (
    <group>
      <Base color={color} r={0.3} />
      {/* lower body */}
      <mesh position={[0, 0.3, 0]} castShadow>
        <cylinderGeometry args={[0.16, 0.24, 0.44, 16]} />
        <Mat color={color} />
      </mesh>
      {/* waist ring */}
      <mesh position={[0, 0.53, 0]} castShadow>
        <torusGeometry args={[0.12, 0.035, 8, 24]} />
        <Mat color={color} />
      </mesh>
      {/* upper shaft */}
      <mesh position={[0, 0.68, 0]} castShadow>
        <cylinderGeometry args={[0.1, 0.15, 0.28, 14]} />
        <Mat color={color} />
      </mesh>
      {/* large orb */}
      <mesh position={[0, 0.92, 0]} castShadow>
        <sphereGeometry args={[0.2, 16, 16]} />
        <Mat color={color} />
      </mesh>
      {/* crown spikes around orb */}
      {Array.from({ length: crownPoints }).map((_, i) => {
        const a = (i / crownPoints) * Math.PI * 2
        return (
          <mesh
            key={i}
            position={[Math.sin(a) * 0.17, 1.02, Math.cos(a) * 0.17]}
            rotation={[Math.cos(a) * 0.5, 0, -Math.sin(a) * 0.5]}
            castShadow
          >
            <sphereGeometry args={[0.05, 8, 8]} />
            <Mat color={color} />
          </mesh>
        )
      })}
    </group>
  )
}

// ── KING ────────────────────────────────────────────────
// Wide base → tall shaft → orb → bold cross  (height ~1.2)
function King({ color }) {
  return (
    <group>
      <Base color={color} r={0.3} />
      {/* lower body */}
      <mesh position={[0, 0.33, 0]} castShadow>
        <cylinderGeometry args={[0.17, 0.25, 0.5, 16]} />
        <Mat color={color} />
      </mesh>
      {/* waist ring */}
      <mesh position={[0, 0.59, 0]} castShadow>
        <torusGeometry args={[0.13, 0.035, 8, 24]} />
        <Mat color={color} />
      </mesh>
      {/* upper shaft */}
      <mesh position={[0, 0.76, 0]} castShadow>
        <cylinderGeometry args={[0.11, 0.16, 0.32, 14]} />
        <Mat color={color} />
      </mesh>
      {/* orb */}
      <mesh position={[0, 0.99, 0]} castShadow>
        <sphereGeometry args={[0.14, 14, 14]} />
        <Mat color={color} />
      </mesh>
      {/* cross — vertical bar */}
      <mesh position={[0, 1.2, 0]} castShadow>
        <boxGeometry args={[0.07, 0.36, 0.07]} />
        <Mat color={color} />
      </mesh>
      {/* cross — horizontal bar */}
      <mesh position={[0, 1.28, 0]} castShadow>
        <boxGeometry args={[0.26, 0.07, 0.07]} />
        <Mat color={color} />
      </mesh>
    </group>
  )
}

// ── Main export ─────────────────────────────────────────
const PIECE_COMPONENTS = { p: Pawn, r: Rook, n: Knight, b: Bishop, q: Queen, k: King }

export default function ChessPiece({ type, color, file, rank }) {
  const x = file - 3.5
  const z = -(rank - 3.5)
  const Piece = PIECE_COMPONENTS[type]
  if (!Piece) return null

  return (
    <group position={[x, 0.06, z]}>
      <Piece color={color} />
    </group>
  )
}
