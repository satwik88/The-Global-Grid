# The Global Grid

**The Daily Paper for the Modern World**

A premium international digital newspaper combining the elegance of traditional print journalism with modern web technology.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Tech Stack

- **Next.js 16** (App Router)
- **React 19** + TypeScript
- **Tailwind CSS 4**
- **Framer Motion**
- **Google Fonts** — Playfair Display, Cormorant Garamond, Source Serif 4, Inter

## Pages

| Route | Description |
|-------|-------------|
| `/` | Front Page — masthead, featured story, three-column grid |
| `/section/[slug]` | Section pages (World, Business, Technology, AI, etc.) |
| `/article/[slug]` | Article reading page with newspaper spread layout |
| `/games` | Sudoku, crosswords, riddles, brain teasers |
| `/search` | Newspaper-style search |
| `/archive` | Historical editions |
| `/bookmarks` | Saved articles |

## Design System

| Token | Value | Usage |
|-------|-------|-------|
| Paper | `#F5F1E8` | Background |
| Ink | `#1B1B1B` | Primary text |
| Border | `#2A2A2A` | Dividers, rules |
| Accent | `#7A1F1F` | Pull quotes, highlights |
| Secondary | `#6B6B6B` | Captions, metadata |

**Typography:** Playfair Display (headlines) · Cormorant Garamond (features) · Source Serif 4 (body) · Inter (navigation/UI)

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/
│   ├── newspaper/          # Masthead, ArticleCard, PageTurn, etc.
│   └── games/              # Sudoku, Riddles, Crossword
├── lib/
│   ├── content/            # CMS-ready article data
│   ├── context/            # Bookmarks, edition state
│   ├── games/              # Sudoku generator
│   ├── sections.ts         # Navigation sections
│   └── types.ts            # Article, Author, Edition types
```

## Premium Features

- Daily & Weekend editions
- Interactive Sudoku (difficulty, pencil mode, keyboard)
- AI News Summary cards
- Global Market Tracker
- World Clock panel
- Historical Archive
- Article bookmarking (localStorage)
- Reading progress indicator
- Editor's Picks
- Print mode (`Ctrl+P` or footer link)
- Mobile page-turn animation (swipe to flip)

## Deployment

Deploy to [Vercel](https://vercel.com):

```bash
npm run build
```

Set no environment variables required for the base experience. Connect a PostgreSQL database and CMS when ready to replace the static content layer in `src/lib/content/articles.ts`.

## License

Private — All rights reserved.
