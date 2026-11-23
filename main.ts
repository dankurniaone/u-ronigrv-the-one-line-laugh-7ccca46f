// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// One funny line, a single sentence of at most 200 characters.
// Writes it to /output/entry.txt (falls back to ./output/ when /output
// is not writable) and verifies the gate before writing: UTF-8 text,
// 1 to 200 characters, not only white space.

import { mkdirSync, writeFileSync, readFileSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const LINE =
  "My password manager asked me to prove I'm human, which is rich coming from the thing that remembers every password I've ever had.";

function main(): number {
  const chars = [...LINE].length;
  if (chars < 1 || chars > 200) {
    console.error(`gate failed: line is ${chars} characters, must be 1-200`);
    return 1;
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    console.error("gate failed: line must be a single line, no newlines");
    return 1;
  }
  if (LINE.trim().length === 0) {
    console.error("gate failed: line is only white space");
    return 1;
  }
  if (!LINE.trimEnd().endsWith(".")) {
    console.error("gate failed: line must be a single sentence");
    return 1;
  }

  const here = dirname(fileURLToPath(import.meta.url));
  let outDir = "/output";
  try {
    mkdirSync(outDir, { recursive: true });
  } catch {
    outDir = join(here, "output");
    mkdirSync(outDir, { recursive: true });
  }
  const path = join(outDir, "entry.txt");
  writeFileSync(path, LINE + "\n", "utf8");

  // Verify the round trip: read it back and check the gate again.
  const back = readFileSync(path, "utf8");
  const backChars = [...back.trimEnd()].length;
  if (back.trimEnd() !== LINE || backChars < 1 || backChars > 200) {
    console.error("verification failed: written file does not match the line");
    return 1;
  }
  console.log(`wrote ${path}: ${backChars} characters, gate OK`);
  return 0;
}

process.exit(main());
