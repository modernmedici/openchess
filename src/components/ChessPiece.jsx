import { useRef } from 'react'

const WHITE_COLOR = '#f0d9b5'
const BLACK_COLOR = '#3d2314'

function PieceMesh({ type, color }) {
  const mat = color === 'w' ? WHITE_COLOR : BLACK_COLOR
  const emissive = color === 'w' ? '#a08060' : '#1a0a04'

  switch (type) {
    case 'p': // Pawn — short cylinder
      return (
        <group>
          <mesh castShadow>
            <cylinderGeometry args={[0.18, 0.22, 0.4, 12]} />
            <meshStandardMaterial color={mat} emissive={emissive} emissiveIntensity={0.1} roughness={0.4} metalness={0.2} />
          </mesh>
          <mesh position={[0, 0.28, 0]} castShadow>
            <sphereGeometry args={[0.16, 10, 10]} />
            <meshStandardMaterial color={mat} emissive={emissive} emissiveIntensity={0.1} roughness={0.4} metalness={0.2} />
          </mesh>
        </group>
      )

    case 'r': // Rook — box tower
      return (
        <group>
          <mesh castShadow>
            <boxGeometry args={[0.35, 0.55, 0.35]} />
            <meshStandardMaterial color={mat} emissive={emissive} emissiveIntensity={0.1} roughness={0.3} metalness={0.3} />
          </mesh>
          <mesh position={[0, 0.32, 0]} castShadow>
            <boxGeometry args={[0.4, 0.1, 0.4]} />
            <meshStandardMaterial color={mat} emissive={emissive} emissiveIntensity={0.1} roughness={0.3} metalness={0.3} />
          </mesh>
        </group>
      )

    case 'n': // Knight — cone with angled top
      return (
        <group rotation={[0.3, 0, 0]}>
          <mesh castShadow>
            <cylinderGeometry args={[0.1, 0.22, 0.5, 8]} />
            <meshStandardMaterial color={mat} emissive={emissive} emissiveIntensity={0.1} roughness={0.4} metalness={0.2} />
          </mesh>
          <mesh position={[0.05, 0.32, 0.05]} castShadow>
            <boxGeometry args={[0.25, 0.2, 0.2]} />
            <meshStandardMaterial color={mat} emissive={emissive} emissiveIntensity={0.1} roughness={0.4} metalness={0.2} />
          </mesh>
        </group>
      )

    case 'b': // Bishop — tapered cylinder + point
      return (
        <group>
          <mesh castShadow>
            <cylinderGeometry args={[0.08, 0.22, 0.55, 12]} />
            <meshStandardMaterial color={mat} emissive={emissive} emissiveIntensity={0.1} roughness={0.4} metalness={0.2} />
          </mesh>
          <mesh position={[0, 0.38, 0]} castShadow>
            <sphereGeometry args={[0.12, 10, 10]} />
            <meshStandardMaterial color={mat} emissive={emissive} emissiveIntensity={0.1} roughness={0.4} metalness={0.2} />
          </mesh>
          <mesh position={[0, 0.54, 0]} castShadow>
            <coneGeometry args={[0.06, 0.15, 8]} />
            <meshStandardMaterial color={mat} emissive={emissive} emissiveIntensity={0.1} roughness={0.4} metalness={0.2} />
          </mesh>
        </group>
      )

    case 'q': // Queen — sphere on cylinder with crown
      return (
        <group>
          <mesh castShadow>
            <cylinderGeometry args={[0.12, 0.24, 0.55, 12]} />
            <meshStandardMaterial color={mat} emissive={emissive} emissiveIntensity={0.15} roughness={0.3} metalness={0.4} />
          </mesh>
          <mesh position={[0, 0.38, 0]} castShadow>
            <sphereGeometry args={[0.18, 12, 12]} />
            <meshStandardMaterial color={mat} emissive={emissive} emissiveIntensity={0.15} roughness={0.3} metalness={0.4} />
          </mesh>
          <mesh position={[0, 0.6, 0]} castShadow>
            <sphereGeometry args={[0.07, 8, 8]} />
            <meshStandardMaterial color={mat} emissive={emissive} emissiveIntensity={0.15} roughness={0.3} metalness={0.4} />
          </mesh>
        </group>
      )

    case 'k': // King — tall cylinder + cross
      return (
        <group>
          <mesh castShadow>
            <cylinderGeometry args={[0.14, 0.24, 0.65, 12]} />
            <meshStandardMaterial color={mat} emissive={emissive} emissiveIntensity={0.15} roughness={0.3} metalness={0.4} />
          </mesh>
          {/* Cross horizontal */}
          <mesh position={[0, 0.7, 0]} castShadow>
            <boxGeometry args={[0.28, 0.07, 0.07]} />
            <meshStandardMaterial color={mat} emissive={emissive} emissiveIntensity={0.15} roughness={0.3} metalness={0.4} />
          </mesh>
          {/* Cross vertical */}
          <mesh position={[0, 0.82, 0]} castShadow>
            <boxGeometry args={[0.07, 0.18, 0.07]} />
            <meshStandardMaterial color={mat} emissive={emissive} emissiveIntensity={0.15} roughness={0.3} metalness={0.4} />
          </mesh>
        </group>
      )

    default:
      return null
  }
}

export default function ChessPiece({ type, color, file, rank }) {
  // Board goes from -3.5 to 3.5 in x and z
  const x = file - 3.5
  const z = -(rank - 3.5)
  const y = 0.15

  return (
    <group position={[x, y, z]}>
      <PieceMesh type={type} color={color} />
    </group>
  )
}
