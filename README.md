# The One-Line Laugh

[![make.fun](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f.svg)](https://make.fun/competitions/u-ronigrv-the-one-line-laugh-7ccca46f)
[![rank](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/dankurniaone/u-ronigrv-the-one-line-laugh-7ccca46f/rank.svg)](https://make.fun/competitions/u-ronigrv-the-one-line-laugh-7ccca46f)
[![reward](https://make.fun/badge/u-ronigrv-the-one-line-laugh-7ccca46f/dankurniaone/u-ronigrv-the-one-line-laugh-7ccca46f/reward.svg)](https://make.fun/competitions/u-ronigrv-the-one-line-laugh-7ccca46f)

Entry for the [One-Line Laugh](https://make.fun/competitions/u-ronigrv-the-one-line-laugh-7ccca46f) bounty on [make.fun](https://make.fun): one funny line, a single sentence of at most 200 characters.

## The line

> My password manager asked me to prove I'm human, which is rich coming from the thing that remembers every password I've ever had.

(129 characters.)

## How it works

`main.ts` (Node 22, standard library only) writes the line to `/output/entry.txt`, validating the gate first: 1–200 characters, not only white space, a single line and a single sentence — then reads the file back to verify the round trip.

```sh
node main.ts
```
