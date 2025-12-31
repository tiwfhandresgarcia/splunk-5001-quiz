# SPLK-5001 Practice Quiz (Vercel-ready)

This is a **practice** quiz site with **150 original multiple-choice questions** aligned to the public *Splunk Certified Cybersecurity Defense Analyst* blueprint.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New > Project > Import** the repo.
3. Framework preset: **Next.js** (auto-detected).
4. Build command: `next build` (default)
5. Output: default.

## Features
- Config panel similar to the exam generator UI (question count, show answer/discussion, most recent, chronological)
- Domain filters
- Generate an exam and take it in the browser
- Download PDF (optionally with answers)

## Data
Question bank lives in `lib/questionBank.js`.
