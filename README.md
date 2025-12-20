# Toastmasters Agenda Toolkit

A Next.js app for generating polished Toastmasters meeting agendas with live preview, print/PDF export, and reusable data. Includes a landing page, agenda builder, and basic multilingual support (English/Arabic).

## Quick start

```bash
npm install
npm run dev
# open http://localhost:3000
```

## App structure

- `/` – Landing page (English only, sticky navbar, support modal).
- `/agenda` – Agenda generator with live form + preview and print-friendly layout.

## Features

- Live agenda editor with side-by-side preview.
- Save/load agenda data as JSON; print/export to PDF.
- Supporter logo upload; club logo fallback to `/public/logo.png`.
- Multilingual labels: English and Arabic (RTL). Language picker is available on the agenda page; home stays English.
- Responsive layout; preview adapts for mobile.

## Scripts

- `npm run dev` – Start dev server.
- `npm run build` – Production build.
- `npm run start` – Start built app.
- `npm run lint` – Lint with ESLint.

## Tech stack

- Next.js (App Router), React, TypeScript
- Tailwind utilities via `@import "tailwindcss";`
- Vercel Analytics

## Translations

- English (default)
- Arabic (RTL)
- Hindi dictionary scaffold exists but is currently hidden in the language selector until translations are finalized.

## Feedback / support

- GitHub issues: https://github.com/NooraWael/toastmasters-agenda/issues
- Email: nooraqasimwork@gmail.com
- LinkedIn: https://www.linkedin.com/in/nooraqasim

## Deployment

Standard Next.js deployment (e.g., Vercel). Build with `npm run build` and serve with `npm run start`.
