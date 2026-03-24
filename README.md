# CSS Play

An interactive, game-based learning platform where users practice CSS by solving visual challenges. Each challenge presents a target layout and an in-browser code editor — the goal is to write the correct CSS properties to match the target.

## What is this?

CSS Play is structured as a series of levels and sublevels, each focused on a specific CSS property or concept. For every sublevel, users get:

- **Theory** — a concise explanation of the property and its syntax.
- **Challenge** — a visual target layout to replicate.
- **Editor** — a live code editor where they write CSS and see results in real time.
- **Playground** — a sandbox to experiment freely.
- **Solution** — a hint they can reveal if they get stuck.

### Current levels

| Level | Name | Properties covered |
|-------|------|--------------------|
| 1 | Styling Essentials | `color`, `background-color`, `font-family`, `font-size`, `font-weight`, `line-height`, `text-align` |
| 2 | Dimensions and Spacing | `width`, `height`, `padding`, `margin`, `box-sizing` |

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

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Other scripts

```bash
npm run build   # Production build
npm run start   # Start the production server
npm run lint    # Run ESLint
```

## Project status — Early Development

This project is actively being built. A significant portion of the planned features is still missing or incomplete:

- [ ] **Home page** — the level selection screen is functional but not fully designed.
- [ ] **In-level navigation** — moving between sublevels within a level needs to be wired up properly.
- [ ] **Progress persistence** — saving user progress via `localStorage` is not yet implemented.
- [ ] **User accounts** — registration and login are planned but not started.
- [ ] **Visual polish** — the overall UI still needs refinement; the logo is a placeholder.
- [ ] **More levels** — only levels 1 and 2 are content-complete. Additional levels covering layout, positioning, flexbox, grid, and more are planned.
- [ ] **Mobile support** — the app is desktop-only for now; a mobile alert is shown on small screens.

Contributions, feedback, and ideas are welcome.
