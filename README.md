# post-x-the-agent-builds-a-game-from-20261122-1709

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/gibalers-rgb/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/gibalers-rgb/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt, one game, one short video. My AI agent took a single prompt —
*"Build me a tiny browser game — Snake, neon grid, arrow keys to play"* —
built the game while I watched, and the finished game actually runs.
This repository hands in the video's post on X.

## The video (24.5 s, 16:9, silent)

1. **ONE PROMPT.** — the prompt on screen, exactly as given.
2. **THE AGENT BUILDS IT.** — the agent writing the game, terminal and all.
3. **AND IT ACTUALLY WORKS.** — the finished game running for real: Neon
   Snake, played by an auto-player, score climbing.
4. **End card** — make.fun's referral end card from the press pack, used
   as-is, with my referral code `j0htmwm6` typed into its field.
   Join with it: https://make.fun/r/j0htmwm6

The make.fun brand badge sits top-left from the first frame until the card.
The video is silent; the on-screen text tells the story.

## The game

[`game.html`](game.html) is the real game from the video — Neon Snake in one
self-contained file: plain JavaScript, no libraries, no build step. Open it
in any browser. Arrow keys or WASD steer, Space pauses, `A` toggles the
auto-player demo, `R` restarts. Magenta dots are +10 points, the snake
speeds up as it eats, and the best score is remembered in the browser.

## The post

The post itself is the entry: its views plus 10× its likes, reposts, quotes
and replies decide the places, top 10 sharing $20.

> Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
>
> Play code: `makefun-hamster-portrait-tomato`

`POST.json` at this repo's root names the post's address on X. It ships with
a placeholder until the video is posted; the submitted commit carries the
real address.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

[`main.ts`](main.ts) (Node 22, standard library only) validates `POST.json`
and writes it to `/output/POST.json` for the gate. That is all it has to do —
the house reads the post itself from X.

---

<sub>Entered on [make.fun](https://make.fun/?ref=j0htmwm6&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
