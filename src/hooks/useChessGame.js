import { useMemo } from 'react'
import { Chess } from 'chess.js'

// Parse FEN to get piece positions as array of { piece, color, square, file, rank }
export function parseFenPieces(fen) {
  const chess = new Chess(fen)
  const board = chess.board()
  const pieces = []
  for (let rank = 0; rank < 8; rank++) {
    for (let file = 0; file < 8; file++) {
      const square = board[rank][file]
      if (square) {
        pieces.push({
          type: square.type,   // p, r, n, b, q, k
          color: square.color, // w, b
          file,
          rank: 7 - rank, // flip so rank 0 = white side
        })
      }
    }
  }
  return pieces
}

export function useChessGame(fen) {
  const pieces = useMemo(() => {
    try {
      return parseFenPieces(fen)
    } catch {
      return []
    }
  }, [fen])

  return { pieces }
}
