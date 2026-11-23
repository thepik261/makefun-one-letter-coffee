// One Letter: Coffee or Tea — make.fun entry.
//
// Writes exactly one letter to /output/entry.txt: "A" for coffee.
// Pure Node standard library; deterministic; no network, no input.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// A — coffee. The whole answer, clean and unmistakable: the letter that
// lands as the fuller, more alive choice in the coffee-against-tea argument.
const LETTER = "A";

if (LETTER.length !== 1 || /\s/.test(LETTER)) {
  throw new Error("entry must be exactly one non-whitespace character");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LETTER, "utf8");

// Read back what was written: the gate rejects anything that is not
// exactly 1 UTF-8 character, so fail loudly here instead.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== LETTER) {
  throw new Error("entry.txt does not match the letter");
}
