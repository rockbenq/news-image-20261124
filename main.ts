// A working news-image-20261124 entry (Node 22, standard library only).
//
// The entry is the image beside this file: entry.png, a newspaper front
// page summing up the world's news of Tuesday 24 November 2026. The
// program copies it to /output/entry.png, byte for byte, so the judge
// sees exactly the image in this repository.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./entry.png', import.meta.url), join(outDir, 'entry.png'));
