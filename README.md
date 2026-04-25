# English 8 — Semester 2 Final Exam Practice

3 interactive multiple-choice exams aligned with the **Tiếng Anh 8 — Global Success** (Kết nối tri thức) textbook, semester 2 (Units 7–12). Each exam has 20 questions for ~25 minutes. All questions and explanations are in English. Instant per-question feedback with explanations.

## Files

```
.
├── index.html      Main page (home, exam, results)
├── styles.css      Warm coral/amber theme
├── app.js          Quiz logic + scoring
├── exams.js        Question bank (3 exams × 20 questions)
└── README.md       This file
```

Plain HTML/CSS/JS — no build step, no dependencies.

## Run locally

Just open `index.html` in any modern browser. If your browser blocks local script loading, run a tiny static server:

```bash
python -m http.server 8080
# or
npx serve .
```

Then open http://localhost:8080.

## Deploy

Drop the four files onto any static host:

| Host | Steps |
|---|---|
| **GitHub Pages** | Create a new repo → upload the 4 files → Settings → Pages → branch `main` → root → Save. URL: `https://<user>.github.io/<repo>/` |
| **Netlify** | netlify.com → "Add new site" → "Deploy manually" → drag the folder. |
| **Vercel** | `vercel deploy` from this folder, or drag-drop in dashboard. |
| **Cloudflare Pages** | New project → upload folder. |

No backend, no database, no API keys.

## Exams

| # | Title | Units | Focus |
|---|---|---|---|
| 1 | Environmental Protection & Shopping | 7–8 | First conditional, gerund vs. to-infinitive, past simple vs. past continuous, quantifiers |
| 2 | Natural Disasters & Communication | 9–10 | Past continuous, past perfect, reported speech (statements / questions / commands) |
| 3 | Science & Technology, Life on Other Planets | 11–12 | Will vs. be going to, compound nouns, present perfect, modal verbs |

Each exam includes **2 phonetics**, **8–10 grammar**, **4–5 vocabulary**, **1 communication**, and **a short reading passage with 3–5 questions** — the same shape as a typical Vietnamese school HK2 final.

## Customise

- **Edit/add questions**: edit `exams.js`. Each question is `{ q, options, correct, explanation }` — `correct` is the 0-based index of the right option.
- **Add a new exam**: copy any block in `exams.js`, give it a new `id`, change the `title`, `topics`, and `questions`.
- **Change theme**: tweak the CSS variables (`--primary`, `--accent`, `--bg`, etc.) at the top of `styles.css`.

## Disclaimer

Practice material only. Not an official school or department exam. Always cross-check with your teacher's reading list.
