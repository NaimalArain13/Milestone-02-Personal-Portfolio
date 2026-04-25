# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (localhost:3000)
npm run build    # Production build
npm run lint     # ESLint via next lint
```

No test suite is configured.

## Environment

`AGENT_BASEURL` must be set in `.env` — it points to the backend that powers the `Chat` component (default: `http://127.0.0.1:8000`). The chat widget POSTs to `${AGENT_BASEURL}/chat` with `{ session_id, message }` and expects `{ reply }` back.

## Architecture

Single-page portfolio built with **Next.js 14 App Router**, **Tailwind CSS**, and **TypeScript**.

The root page (`app/page.tsx`) renders all sections inline — `HeroSection`, `Project`, `About`, `TechStack`, `Contact` — using anchor IDs (`#project`, `#about`, `#contact`) for in-page navigation. The `About`, `Project`, and `Contact` routes also exist as standalone pages (linked from the footer), but their components are shared with the root page.

**Layout** (`app/layout.tsx`) wraps everything in `<Navbar>` and `<Footer>`.

**Component overview:**
- `heroSection.tsx` — static server component; uses `Home.module.css` for the typewriter animation
- `projectCard.tsx` — client component; initialises AOS scroll animation on mount; accepts `{ title, description, img, route }` props
- `autoSroll.tsx` — tech stack icon marquee; animation defined in `globals.css` as `.animate-auto-scroll`
- `chat.tsx` — client component; floating chatbot widget fixed to bottom-right; calls the external `AGENT_BASEURL` backend
- `navbar.tsx` / `footer.tsx` — standard nav/footer; mobile hamburger in navbar

**Styling conventions:**
- Custom Tailwind colors in `tailwind.config.ts`: `bg` (#020617), `text` (#172554), `text2` (#eef2ff), `button1`/`button2` for gradients
- `cn()` utility in `lib/utils.ts` combines `clsx` + `tailwind-merge` for conditional class merging
- AOS (`aos` package) is initialised inside `useEffect` in each client component that uses it — don't move it to a shared provider without verifying AOS supports multiple inits

**Static assets** (`public/`) hold all project screenshot images referenced by name in `app/project/page.tsx`. Add new images there when adding project cards.
