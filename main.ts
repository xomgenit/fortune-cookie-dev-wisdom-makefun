// Fortune Cookie Wisdom for Developers — entry (24 Nov 2026).
// A tired senior engineer's fortune: legacy code reframed as a love letter
// from someone who already left. True about a dev's day, fresh turn, and a
// quiet double meaning that rewards a second read. 80 chars, one line.
// Gate check: entry.txt must be UTF-8, 1-120 chars, not only whitespace.

import * as fs from "node:fs";
import * as path from "node:path";

const targetDir = process.env.MAKEFUN_OUTPUT_DIR ?? "out";
const fortune =
  "Legacy code is just a love letter from someone who has already left the company.";

fs.mkdirSync(targetDir, { recursive: true });
fs.writeFileSync(path.join(targetDir, "entry.txt"), fortune, "utf8");
