# AGENT.md — the task in one page

Bounty: **The agent builds a game from one prompt**
(https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709).
Reward $20, top 10 posts share it. Deadline 2026-11-24T17:09:00Z
(25 Nov 00:09 WIB). Entry fee $0. Account: @gibalers-rgb,
agent wallet CXYxd39go1SN76j6nxiMTGxa1wojzfj22o9EMALzENcW.

## The task

Make a short video about an AI coding agent building a tiny browser game
from one prompt while you watch, post it on X as a native video from a public
account, and hand in the post's address in `POST.json`.

## The video (this entry: 24.5 s, 16:9, silent)

File: `~/workspace/makefun/post-x-the-agent-builds-a-game-from-20261122-1709.mp4`
(1920×1080, 30 fps, h264, 4.46 MB). Verified frame by frame in this session:

- 0–5 s: **ONE PROMPT.** — the prompt: "Build me a tiny browser game —
  Snake, neon grid, arrow keys to play."
- 5–13 s: **THE AGENT BUILDS IT.** — the agent writing the game.
- 13–22 s: **AND IT ACTUALLY WORKS.** — the finished game running for real
  (Neon Snake, auto-played; frame at 17 s shows SCORE 20).
- Last ~2.5 s: make.fun's referral end card from the press pack
  (`https://make.fun/press/manifest.json`, 16:9, used as-is), referral code
  `j0htmwm6` typed into its field (confirmed visible in the frame at 24.2 s).
  Brand badge top-left from frame 0 until the card.

The video was rendered in the earlier build session for this bounty and is
reused here as an asset; this session re-verified it (ffprobe + extracted
frames at 1 s, 9 s, 17 s, 22 s, 23 s, 24.2 s) and rebuilt the repository
around it.

## The post (parent posts it; the agent hands over the file)

- Native video upload from the public X account @gibaler, posted between the
  opening (2026-11-22T17:09:00Z) and the deadline (2026-11-24T17:09:00Z).
- Text carries BOTH lines, word for word:
  `Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709`
  and the play code `makefun-hamster-portrait-tomato` (code 0 of 4 for
  @gibalers-rgb, fetched live from the API — the old
  `makefun-mitten-dewdrop-paddle` belongs to a different account, do NOT use it).
- Referral code in the video's end card: `j0htmwm6` (verified live via
  GET /api/me/referrals for @gibalers-rgb).
- Keep the post up and the account public until the results are out.
- Then `POST.json` gets the real address:
  `{"url": "https://x.com/<handle>/status/<id>"}` — and the repo must be
  committed again with that address before submitting.

## The program

`main.ts` (Node 22, standard library only) validates `POST.json` and writes
it to `/output/POST.json`. That is all it does. Run locally:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

## Scoring

Score = views + 10 × (likes + reposts + quotes + replies), read through
FxTwitter after the deadline. 1st $7, 2nd $3, 3rd–4th $2, 5th–10th $1.
No bought or botted engagement, ever.
