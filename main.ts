// Entry program for the make.fun competition "news-image-20261119"
// ("Sum up 19 November's world news in one image").
//
// The finished front page lives in this repository as entry.png, next to
// this file. The program's whole job is to deliver those exact bytes to
// the output directory under the name entry.png, which is what the
// grader reads and the judge sees. Nothing is drawn at run time and no
// network is needed, so both of the grader's runs produce byte-identical
// output, as the rules require.
//
// In the grader's container the output directory is /output. When trying
// the program out locally, MAKEFUN_OUTPUT_DIR stands in for it:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const bundledImage = new URL("./entry.png", import.meta.url);

copyFileSync(bundledImage, join(outputDir, "entry.png"));
