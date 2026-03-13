# Social Arcade

A social shopping experience where your aesthetic taste shapes what you discover, and your friends shapes it with you. Inspired by the nostalgia of going to the mall with your friends.

## What it does

- **Taste profiling** — swipe through aesthetic cards or upload inspiration images to build your visual identity, mapped as a constellation
- **AI analysis** — Gemini 1.5 Flash extracts your aesthetic tags, dominant color palette, and crew type from uploaded images
- **Social shopping** — browse products alongside simulated crew members, see compatibility scores, and shop together in a live session
- **3D Showroom** — walk through a full boutique store rendered in Three.js based on your taste graph
- **Fitting Room** — try clothing on a procedural mannequin with adjustable body measurements; select sizes S/M/L to preview fit

## Tech stack

| Layer | Technology |
|-------|-----------|
| UI | React 18 + Vite 6 |
| Styling | Tailwind CSS v4 + inline styles |
| Routing | React Router v6 |
| 3D | Three.js r183 |
| AI | Google Gemini 1.5 Flash |
| Products | Etsy Open API v3 + Unsplash API |

## Getting started

```bash
npm install
npm run dev
```

Create a `.env` file at the project root:

```
VITE_GEMINI_API_KEY=your_key_here
VITE_ETSY_API_KEY=your_key_here
```

- Gemini key: [aistudio.google.com](https://aistudio.google.com)
- Etsy key: [etsy.com/developers](https://www.etsy.com/developers/register)

