# Naimal Salahuddin — Personal Portfolio

A modern, animated personal portfolio built with Next.js 14 App Router, TypeScript, and Tailwind CSS.

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS (CSS variable–based theming) |
| Animations | GSAP, Vanta.js, Three.js |
| Theme | next-themes (dark / light) |
| Icons | react-icons |
| Font | DM Sans (Google Fonts) |

## Pages

- `/` — Hero, About, Services preview, Featured Projects, Tech Stack, Contact CTA
- `/projects` — Full project grid (11 projects)
- `/services` — Animated stripes section + 6 service cards
- `/contact` — Vanta net animation + contact form + social links

## Animations

- **GSAP custom cursor** — ring + dot, `mix-blend-mode: difference`, scales on hover/click
- **GSAP text rotate** — cycling words in the hero heading ("Websites", "AI Agents", "Experiences", "Products")
- **Global background blobs** — mouse-following radial gradients via `gsap.quickTo`
- **Vanta.js effects** — Birds, Fog, Waves, Dots, Net (Three.js powered), swappable per section
- **Animated canvas stripes** — diagonal two-tone cyan stripes, mouse-reactive tilt

## Theme

Dual theme via CSS variables — switching the `dark` class on `<html>`:

| Token | Light | Dark |
|---|---|---|
| Background | `#ffffff` | `#0a0f1e` |
| Surface | `#f5f5f5` | `#111827` |
| Primary | `#000000` | `#e2e8f0` |
| Accent | `#00aae3` | `#00d4ff` |
| Muted | `#bbbbbb` | `#64748b` |

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
