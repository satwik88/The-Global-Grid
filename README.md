<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=140&section=header"/>

<div align="center">

# 🗞 The Global Grid

### *The Daily Paper for the Modern World*

[![Live Demo](https://img.shields.io/badge/Live%20Demo-the--global--grid.vercel.app-1B1B1B?style=for-the-badge&logo=vercel&logoColor=white)](https://the-global-grid.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-EF0097?style=for-the-badge&logo=framer&logoColor=white)](https://www.framer.com/motion)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed-Vercel-000?style=for-the-badge&logo=vercel)](https://vercel.com)

<br/>

> A premium international digital newspaper that marries the elegance of traditional print journalism with cutting-edge modern web technology — serving world-class editorial design in your browser.

<br/>

</div>

---

## ✦ Overview

**The Global Grid** is a fully responsive, newspaper-style web application built with **Next.js 16 App Router** and **React 19**. It recreates the visual language of prestige print publications — classic serif typography, ink-on-paper colour tokens, structured column grids — while delivering interactive digital features: AI-curated summaries, live market data, world clocks, interactive games, and more.

Whether you're a reader looking for a refined news experience or a developer studying editorial UI patterns, The Global Grid sets a high bar for what a modern news platform can look like.

---

## 🖥️ Live Preview

**→ [the-global-grid.vercel.app](https://the-global-grid.vercel.app)**

---

## ✦ Features

### 📰 Editorial Experience
- **Front Page** — Masthead, hero feature story, and a classic three-column article grid
- **Section Pages** — Dedicated pages for World, Business, Technology, AI, Science, Culture, Travel, and Opinion
- **Article Reader** — Full newspaper spread layout with pull quotes, reading progress indicator, and editor's picks
- **Daily & Weekend Editions** — Distinct editorial flavours for weekday and weekend publishing

### 🤖 Smart Features
- **Grid Intelligence** — AI-powered news summary cards surfacing the most important stories
- **Global Market Tracker** — Live financial market data panel
- **World Clock Panel** — Real-time clocks across major global cities

### 🎮 Games Section
- Interactive **Sudoku** with difficulty levels, pencil mode, and full keyboard support
- **Crosswords**, **Riddles**, and **Brain Teasers**

### 🔖 Reader Tools
- **Article Bookmarking** — Save and revisit articles (localStorage)
- **Historical Archive** — Browse past editions
- **Newspaper-style Search** — Find articles across sections
- **Print Mode** — Clean print layout accessible via `Ctrl+P` or footer link
- **Reading Progress Indicator** — Scroll-aware progress bar on article pages

### 📱 Design & Motion
- **Mobile Page-Turn Animation** — Swipe gesture to flip pages like a real newspaper
- Fully **responsive layout** across mobile, tablet, and desktop
- **Dark mode** compatible colour system

---

## ✦ Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| UI Library | React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animation | Framer Motion 12 |
| Icons | Lucide React |
| Utilities | clsx, tailwind-merge |
| Deployment | Vercel |

### Typography
| Font | Role |
|---|---|
| **Playfair Display** | Headlines & mastheads |
| **Cormorant Garamond** | Feature stories & pull quotes |
| **Source Serif 4** | Body text & articles |
| **Inter** | Navigation & UI elements |

---

## ✦ Design System

The visual language is built on a carefully curated ink-and-paper token set:

| Token | Value | Usage |
|---|---|---|
| `Paper` | `#F5F1E8` | Page background |
| `Ink` | `#1B1B1B` | Primary text |
| `Border` | `#2A2A2A` | Column rules & dividers |
| `Accent` | `#7A1F1F` | Pull quotes, section highlights |
| `Secondary` | `#6B6B6B` | Captions & metadata |

---

## ✦ Project Structure

```
the-global-grid/
├── public/                     # Static assets
└── src/
    ├── app/                    # Next.js App Router pages
    │   ├── page.tsx            # Front page (/)
    │   ├── section/[slug]/     # Section pages
    │   ├── article/[slug]/     # Article reader
    │   ├── games/              # Games hub
    │   ├── search/             # Search page
    │   ├── archive/            # Historical editions
    │   └── bookmarks/          # Saved articles
    ├── components/
    │   ├── newspaper/          # Masthead, ArticleCard, PageTurn, etc.
    │   └── games/              # Sudoku, Riddles, Crossword
    └── lib/
        ├── content/            # CMS-ready article data layer
        ├── context/            # Bookmarks & edition state (React Context)
        ├── games/              # Sudoku puzzle generator
        ├── sections.ts         # Navigation section definitions
        └── types.ts            # Article, Author, Edition TypeScript types
```

---

## ✦ Routes

| Route | Description |
|---|---|
| `/` | Front Page — masthead, featured story, three-column grid |
| `/section/[slug]` | Section pages (World, Business, Technology, AI, etc.) |
| `/article/[slug]` | Article reading page with newspaper spread layout |
| `/games` | Sudoku, crosswords, riddles, brain teasers |
| `/search` | Newspaper-style full-text search |
| `/archive` | Historical editions browser |
| `/bookmarks` | Saved articles |

---

## ✦ Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/satwik88/The-Global-Grid.git
cd The-Global-Grid

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm run start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

No environment variables are required for the base experience. When you're ready to go live with dynamic content, connect a PostgreSQL database and headless CMS by replacing the static data layer in `src/lib/content/articles.ts`.

---

## ✦ Roadmap

- [ ] Headless CMS integration (Sanity / Contentful)
- [ ] PostgreSQL backend for live article storage
- [ ] User authentication & personalized feeds
- [ ] Push notifications for breaking news
- [ ] Newsletter subscription system
- [ ] Comment & discussion threads
- [ ] RSS feed export
- [ ] Dark mode toggle

---

## ✦ Author

**Satwik** — [@satwik88](https://github.com/satwik88)

Portfolio: [satwik23.vercel.app](https://satwik23.vercel.app)

---

## ✦ License

All rights reserved © 2026 Satwik. This project is not open for redistribution or reuse without explicit permission.

---

<div align="center">

*Built with craft. Deployed with purpose.*

**[→ Read Today's Edition](https://the-global-grid.vercel.app)**

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:0f0c29,50:302b63,100:24243e&height=140&section=footer"/>
