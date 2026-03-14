/**
 * gen-openings.mjs
 * Reads openings-source.mjs (SAN + commentary only) and uses chess.js
 * to compute FEN for every position, then writes src/data/openings.js.
 *
 * Usage: node scripts/gen-openings.mjs
 */

import { Chess } from '../node_modules/chess.js/dist/esm/chess.js';
import { writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { openings as source } from './openings-source.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../src/data/openings.js');

let errors = 0;

const compiled = source.map((opening) => {
  const chess = new Chess();
  const moves = opening.moves.map((m, i) => {
    const result = chess.move(m.san);
    if (!result) {
      console.error(`  [ERROR] ${opening.id} move ${i + 1}: illegal move "${m.san}"`);
      errors++;
      return { san: m.san, fen: 'INVALID', commentary: m.commentary };
    }
    return { san: m.san, fen: chess.fen(), commentary: m.commentary };
  });
  console.log(`  [OK] ${opening.id} (${moves.length} moves)`);
  return { id: opening.id, group: opening.group, name: opening.name, description: opening.description, moves };
});

if (errors > 0) {
  console.error(`\n${errors} error(s) found — fix illegal moves before continuing.`);
  process.exit(1);
}

const js = `export const openings = ${JSON.stringify(compiled, null, 2)}\n`;
writeFileSync(OUT, js, 'utf8');
console.log(`\nWrote ${compiled.length} openings to src/data/openings.js`);
