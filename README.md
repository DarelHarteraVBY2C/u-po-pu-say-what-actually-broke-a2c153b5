# Say What Actually Broke

[![Bounty](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/DarelHarteraVBY2C/u-po-pu-say-what-actually-broke-a2c153b5/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)
[![Reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/DarelHarteraVBY2C/u-po-pu-say-what-actually-broke-a2c153b5/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5)

Entry for the [Say What Actually Broke](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5) bounty on make.fun: one single line of software error copy (max 200 characters) that tells the user the brutal truth about what went wrong — and makes them laugh.

## The line

> Your file is gone: the tab crashed and the autosave was only pretending. Start over, and copy it somewhere safe this time.

122 characters, one line. It names the real failure (crashed tab, autosave that never saved) and what to do next (start over, keep a safe copy) — honest enough to ship in a real error dialog.

## How it works

`main.ts` (Node 22) writes that exact line to `/output/entry.txt`. Deterministic: running it twice produces byte-identical output.

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
