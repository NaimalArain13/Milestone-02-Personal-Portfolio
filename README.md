# Naimal Salahuddin — Personal Portfolio

A dark-first, single-page portfolio for a Full-Stack Developer & Agentic AI Engineer — built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **framer-motion**.

Live sections: Hero → About → Experience → Impact → Featured (AI Agents) → Full-Stack Builds → Stack → Contact — plus dedicated case-study pages for every project and detail pages for every service.

---

## The Revamp: What Was Planned

The site started as a conventional multi-page portfolio (separate `/projects`, `/services`, `/contact` routes, card grids, a contact form). A portfolio review against an **Agentic AI Engineer** hiring bar surfaced the real gaps:

1. **The AI story was asserted, not demonstrated** — one AI project out of seven, one-line descriptions, no architecture or outcomes anywhere.
2. **No case studies** — nothing showed *how* the agent systems were designed: no problem statements, no approach, no measured results.
3. **No source links, no resume, no experience section** — the basics a recruiter checks first.
4. **The tech-stack marquee contradicted the positioning** — it showed HTML/CSS/JS only, no OpenAI SDK, no MCP, no agent tooling.

The plan, executed in two phases:

### Phase 1 — Content depth
- Categorize projects (**AI Agent Orchestration** / **Full-Stack Builds**) with a real case study per project: **Problem → Approach → Architecture → Outcomes**.
- Write the AI case studies from the actual repos (Room Matcher AI, MittiPay, Meeting Assistant, Personal AI Employee) — verified against their source and documentation, with **only measured numbers** (e.g. the Personal AI Employee's Silver-Tier acceptance tests: 95% of approved emails sent <30s, 24h+ unattended uptime, 3 concurrent watchers, ~90% of sensitive actions routed to human approval).
- Add GitHub source links to every project card, a resume button (navbar / hero / footer), an Experience section from the real work history, and a tech-stack list drawn from the actual GitHub profile.

### Phase 2 — Structural redesign (ashwingupta.dev template)
Using [ashwingupta.dev](https://www.ashwingupta.dev/) as the structural reference, rebuild the site as **one scrolling page with anchor navigation**, keeping detail routes for depth. Design decisions made up front:

| Decision | Choice |
|---|---|
| Testimonials section | Skipped until real ones exist — no placeholders, no fakes |
| Impact metrics | Verified numbers only, each star linking to its source project |
| Page structure | Single scrolling home + `/projects/[slug]` & `/services/[slug]` detail routes; old routes 307-redirect to anchors |
| Visual style | Template's dark-first editorial look; light/dark toggle kept functional |
| Heavy effects | **Rejected** — no custom cursor, no canvas background, no scroll-scrubbed pinning (performance over flourish) |

---

## How It Was Executed

1. **Template analysis** — the reference site's rendered output was inspected to extract its design system: Playfair Display 800 for headlines, DM Mono uppercase micro-labels, DM Sans body; a near-black palette with a warm cream accent and per-category colors; a repeated section grammar (eyebrow label + hairline rule + masked serif headline); and the data shapes behind its Impact constellation, Gantt timeline, and labelled project cards.

2. **Design tokens** — Tailwind + CSS-variable tokens (`bg`, `surface`, `primary`, `accent`, `cream`, `border`) defined dark-first in `app/globals.css`, with a readable light inverse so `next-themes` toggling still works. Fonts loaded via `next/font/google` (`--font-playfair`, `--font-dm-mono`, `--font-dm-sans`).

3. **Data layer** (`lib/data/`) — all content lives in typed data files, so copy edits never touch components:
   - `projects.ts` — 10 projects, each with a full case study (problem / approach / architecture / outcomes)
   - `impact.ts` — 12 verified metrics in 4 clusters, with constellation coordinates
   - `experience.ts` — work + education entries with accent colors
   - `stack.ts` — 6 categorized tech groups with verified `react-icons`
   - `services.ts`, `site.ts` — service detail content and the resume URL

4. **Section components** (`app/components/sections/`) — nine components sharing `sectionHeader.tsx` (eyebrow + hairline + masked headline reveal). Notable adaptations of the template:
   - **Impact** — the constellation star-map rebuilt as static SVG lines + percentage-positioned dots (no canvas); collapses to stacked cluster lists on mobile.
   - **Experience** — the template's 2,740px scroll-scrubbed Gantt simplified to a vertical timeline with colored duration accents.
   - **Featured** — AI projects as `Context / Approach / System / Outcome` labelled-row cards linking into full case studies.
   - Animations are lightweight `framer-motion` `whileInView` reveals honoring `prefers-reduced-motion`.

5. **Routing** — `next.config.mjs` redirects `/projects`, `/experience`, `/contact` to their anchor sections (exact-match, so `/projects/[slug]` still resolves). Detail pages were restyled to the new grammar rather than rebuilt.

6. **Verification** — `next lint` clean; production build generates all 22 static pages (home, 10 project case studies, 6 service pages, services listing); redirects and section anchors verified against the running dev server.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS (CSS-variable tokens, dark-first) |
| Animations | framer-motion (scroll reveals), GSAP (background blobs) |
| Theme | next-themes (dark default, light toggle) |
| Fonts | Playfair Display · DM Sans · DM Mono (next/font) |
| Icons | react-icons |

## Pages

- `/` — single scrolling page: Hero, About, Experience, Impact, Featured AI Projects, Full-Stack Builds, Stack, Contact
- `/projects/[slug]` — full case study per project (Problem → Approach → Architecture → Outcomes, live + source links)
- `/services` + `/services/[slug]` — service catalogue and detail pages
- `/projects`, `/experience`, `/contact` — redirect to their home-page anchors

## Environment

```bash
AGENT_BASEURL=http://127.0.0.1:8000   # Backend for the AI chat widget
```

## Commands

```bash
npm run dev      # Start dev server → localhost:3000
npm run build    # Production build
npm run lint     # ESLint
```
