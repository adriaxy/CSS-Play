# CSS Play

An interactive, game-based learning platform where users practice CSS by solving visual challenges. Each challenge presents a target layout and an in-browser code editor — the goal is to write the correct CSS properties to match the target.

## What is this?

CSS Play is structured as a series of levels and sublevels, each focused on a specific CSS property or concept. For every sublevel, users get:

- **Theory** — a concise explanation of the property, its syntax, and usage examples.
- **Challenge** — a visual target layout to replicate.
- **Editor** — a live code editor where they write CSS and see results in real time.
- **Playground** — a sandbox to experiment freely.
- **Solution** — a hint they can reveal if they get stuck.

### Current levels

| Level | Name | Properties covered |
|-------|------|--------------------|
| 1 | Styling Essentials | `color`, `background-color`, `font-family`, `font-size`, `font-weight`, `line-height`, `text-align` |
| 2 | Dimensions and Spacing | `width`, `height`, `padding`, `margin`, `box-sizing` |
| 3 | Borders & Decoration | `border`, `border-radius`, `outline`, `box-shadow` |
| 6 | Positioning & Display | `display`, `position`, `top/right/bottom/left`, `z-index`, `float`, `clear`, `overflow` |

## Tech stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [React 19](https://react.dev/)
- [css-tree](https://github.com/csstree/csstree) — for parsing and validating user-written CSS

## Getting started

**Requirements:** Node.js 18+

```bash
# 1. Clone the repository
git clone <repo-url>
cd css-play

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser — this loads the landing page.

To go directly to the app, navigate to [http://localhost:3000/play](http://localhost:3000/play).

### Other scripts

```bash
npm run build   # Production build
npm run start   # Start the production server
npm run lint    # Run ESLint
```

## Routes

| Path | Description |
|------|-------------|
| `/` | Landing page — project presentation with an interactive CSS demo |
| `/play` | App home — level selection and progress overview |
| `/play/[level]/[sublevel]` | Individual sublevel with editor, theory, and playground |

## Project status — Early Development

This project is actively being built. Some features are still missing or incomplete:

- [x] **Progress persistence** — sublevel completion and theme preference are saved in `localStorage`.
- [x] **Home page** — level selection with search, per-level progress indicators, and an overall progress bar.
- [x] **Overall progress bar** — shown both on the home page and at the bottom of every level.
- [ ] **Missing levels** — levels 4 and 5 are not yet content-complete. Additional levels covering flexbox, grid, animations, and more are planned.
- [ ] **Visual polish** — the overall UI still needs refinement.
- [ ] **Mobile support** — the app is desktop-only; a mobile alert is shown on small screens.

Contributions, feedback, and ideas are welcome.
