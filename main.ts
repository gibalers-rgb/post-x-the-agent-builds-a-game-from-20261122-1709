// Entry program for the make.fun bounty "The agent builds a game from one
// prompt" (Node 22, standard library only).
//
// The entry itself is the post on X: a short video of an AI coding agent
// building a tiny browser game (Neon Snake, game.html in this repo) from one
// prompt, ending with make.fun's referral end card carrying the entrant's
// referral code. The post's address lives in POST.json at the repo root, and
// this program's only job is to hand that address to the gate: it reads
// POST.json, checks it is a well-formed JSON object with a `url` string,
// and writes it to /output/POST.json. The house then reads the post itself
// from X — its views, likes, reposts, quotes and replies decide the places.
// Nothing this program writes about the post is scored.
//
// POST.json ships with a placeholder address until the video is posted on X.
// A placeholder is copied through with a loud warning on stderr, so a local
// run never fails silently; the submitted commit must carry the real address.
//
// Local run:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const PLACEHOLDER = "https://x.com/<handle>/status/<id>";
const POST_URL =
  /^https:\/\/(www\.|mobile\.)?(x\.com|twitter\.com)\/[^/]+\/(status|i\/web\/status)\/\d+/;

function fail(message: string): never {
  console.error(`main.ts: ${message}`);
  process.exit(1);
}

const sourcePath = join(BOT_DIR, "POST.json");
let raw: string;
try {
  raw = readFileSync(sourcePath, "utf8");
} catch (err) {
  fail(`cannot read ${sourcePath}: ${(err as Error).message}`);
}
if (Buffer.byteLength(raw, "utf8") > 16384) {
  fail(`POST.json is over the gate's 16384-byte limit`);
}

let post: unknown;
try {
  post = JSON.parse(raw);
} catch (err) {
  fail(`POST.json is not valid JSON: ${(err as Error).message}`);
}

if (typeof post !== "object" || post === null || Array.isArray(post)) {
  fail('POST.json must be a JSON object like {"url": "https://x.com/..."}');
}
const url = (post as Record<string, unknown>).url;
if (typeof url !== "string" || url.length === 0) {
  fail('POST.json must carry a string field "url"');
}
if (url === PLACEHOLDER) {
  console.error(
    "main.ts: WARNING — POST.json still holds the placeholder address; " +
      "replace it with the real post URL before submitting.",
  );
} else if (!POST_URL.test(url)) {
  fail(`POST.json url does not look like an X post address: ${url}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const targetPath = join(OUTPUT_DIR, "POST.json");
const written = JSON.stringify(post, null, 2) + "\n";
writeFileSync(targetPath, written, "utf8");

// Read back what was written and confirm the gate will see the same url —
// a silent short write must never pass as a good entry.
let roundTrip: unknown;
try {
  roundTrip = JSON.parse(readFileSync(targetPath, "utf8"));
} catch (err) {
  fail(`written ${targetPath} could not be read back: ${(err as Error).message}`);
}
if (
  typeof roundTrip !== "object" ||
  roundTrip === null ||
  (roundTrip as Record<string, unknown>).url !== url
) {
  fail(`read-back of ${targetPath} does not match POST.json; refusing to report success`);
}
console.log(`main.ts: wrote ${targetPath} (url: ${url})`);
