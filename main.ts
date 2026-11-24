// Say What Actually Broke — one line of honest error copy.
// The program writes exactly one single-line error message to
// /output/entry.txt. The line names the real failure (a crashed tab
// plus an autosave that never saved), tells the user what to do next
// (start over, and keep a safe copy), and stays shippable in a real
// product dialog: no profanity, no shock value, just the brutal truth.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Your file is gone: the tab crashed and the autosave was only pretending. Start over, and copy it somewhere safe this time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
