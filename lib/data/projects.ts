export type ProjectCategory = "full-stack" | "ai-agent";

export interface ProjectCaseStudy {
  problem: string;
  approach: string[];
  architecture: string[];
  outcomes: string[];
  note?: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  category: ProjectCategory;
  image?: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudy: ProjectCaseStudy;
}

export const projectCategories: { id: ProjectCategory; label: string }[] = [
  { id: "ai-agent", label: "AI Agent Orchestration" },
  { id: "full-stack", label: "Full-Stack Builds" },
];

export const projects: Project[] = [
  // ---------- AI Agent Orchestration ----------
  {
    slug: "room-matcher-ai",
    title: "Room Matcher AI",
    description: "AI-powered multi-agent system that matches roommates and generates personalised compatibility advice through an inspectable, multi-step agent pipeline.",
    category: "ai-agent",
    image: "/room-matcher.png",
    techStack: ["Next.js", "TypeScript", "OpenAI", "Firebase"],
    liveUrl: "https://room-matcher-ai-rosy.vercel.app/",
    githubUrl: "https://github.com/NaimalArain13/room-matcher-agent",
    caseStudy: {
      problem:
        "Judging roommate compatibility by hand is subjective and slow, and a single opaque AI answer doesn't give users a reason to trust the match or act on it.",
      approach: [
        "Split the matching flow into a multi-step agent pipeline instead of one monolithic LLM call, so each stage produces an inspectable, separately reviewable output.",
        "Added a dedicated 'wingman advice' step that turns the raw compatibility match into practical, personalised guidance on living with that specific match.",
        "Built a stepper UI that surfaces the pipeline's progress live, so the user sees how the AI got to its answer, not just the final result.",
      ],
      architecture: [
        "Next.js 14 + TypeScript frontend deployed on Vercel.",
        "run_pipeline.ts orchestrates the multi-agent pipeline end to end.",
        "getWingmanAdivce.ts is a dedicated pipeline stage that calls the LLM for tailored compatibility advice, kept separate from the matching stage.",
        "agent-stepper.tsx renders each pipeline step's progress and output in the UI as it completes.",
        "Firebase handles persistence for match data.",
      ],
      outcomes: [
        "Deployed and publicly usable — no local setup required to try it.",
        "Breaking the pipeline into inspectable steps (rather than one black-box call) makes the agent's reasoning visible and easier to debug and trust.",
      ],
    },
  },
  {
    slug: "mittipay",
    title: "MittiPay",
    description: "AI-assisted financial dashboard with voice-based expense logging plus dedicated market, weather, and prediction advisory reports.",
    category: "ai-agent",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn UI", "Voice Input"],
    liveUrl: "https://ai-powered-financial-mittipay-app.vercel.app",
    githubUrl: "https://github.com/NaimalArain13/AI-Powered-Financial-App",
    caseStudy: {
      problem:
        "Personal and small-business finance tracking is usually manual, tedious to log, and disconnected from the external context (market conditions, weather-driven risk) that actually affects financial decisions.",
      approach: [
        "Built a dashboard that combines fast, low-friction expense capture (manual entry and voice recording) with AI-generated advisory reports, rather than treating bookkeeping and advice as separate tools.",
        "Split advisory content into three focused report types — Market, Weather, and Prediction — instead of one generic 'AI insights' feed, so each is independently generated, downloadable, and easy to reason about.",
      ],
      architecture: [
        "Next.js 14 App Router frontend with route groups for auth, the marketing/landing page, and the authenticated dashboard.",
        "A voice-recorder component and use-recorder hook capture spoken expenses for hands-free logging.",
        "MarketReportForm, WeatherReportForm, and PredictionReportForm each drive a dedicated report-generation flow, backed by download helpers per report type.",
        "advisory-helpers.ts centralises the advisory logic; the frontend talks to an external API backend via a typed api.ts client and endpoint config, keeping report generation off the client.",
      ],
      outcomes: [
        "Deployed live on Vercel.",
        "Voice-based entry removes the main friction point in manual expense logging.",
        "Advisory reports are decoupled per domain (market / weather / prediction), which keeps each one simple to extend without touching the others.",
      ],
    },
  },
  {
    slug: "meeting-assistant",
    title: "Meeting Assistant",
    description: "A Claude Agent Skill that pulls meeting transcripts from Fathom, extracts structured action items, and delivers formatted summaries to Discord — no public server required.",
    category: "ai-agent",
    techStack: ["Claude Agent Skills", "OpenClaw", "Discord API", "Fathom REST API", "Node.js"],
    githubUrl: "https://github.com/NaimalArain13/meeting-assistant",
    caseStudy: {
      problem:
        "Meeting notes and action items get lost after the call ends — someone has to re-watch the recording or re-read the transcript to figure out who owes what.",
      approach: [
        "Milestone 1: connected a Discord bot to an agent gateway (OpenClaw) as the delivery channel, using an outbound-only WebSocket connection so no public IP, port forwarding, or tunnel is needed to demo from a laptop.",
        "Milestone 2: built a pipeline that polls Fathom's REST API for new transcripts, runs them through a custom Claude Agent Skill that extracts structured action items, and posts formatted summaries to Discord.",
        "Deliberately chose polling over webhooks for transcript retrieval, trading a small amount of latency for zero exposed infrastructure.",
      ],
      architecture: [
        "Secrets (Discord bot token, Fathom API key) are stored in a systemd-service-scoped .env, not shell exports — the gateway runs as a background service with no interactive shell, so a plain `export` disappears on restart.",
        "Deduplication uses a timestamp watermark plus a recording-ID set: timestamps alone collide, and IDs alone can't bound the polling query window.",
        "The skill's logic lives in SKILL.md plus reference/ and scripts/ folders, loaded into the agent's context only on demand (progressive disclosure) — with ~50 other skills installed, always-on loading would exhaust the context budget before any real work started.",
        "Evaluated Fathom's official remote MCP server (OAuth-based) and deliberately rejected it: an OAuth token expiring mid-week would silently break an unattended cron job, and the polling script itself runs as a headless command with no agent turn — so MCP tools aren't even in scope for it. Used a plain REST call with a static API key instead.",
      ],
      outcomes: [
        "Fathom → extraction → Discord delivery path verified working end to end.",
        "Extraction logic validated against a scripted test meeting covering direct name mentions, first-person commitments, keyword-only mentions, and deliberate non-action-item chatter — to confirm the skill doesn't over-extract false positives, not just that it finds real action items.",
        "Scheduling automation (cron) was scoped as a deferred follow-up milestone rather than rushed in.",
      ],
      note: "Internal tool — no public live demo; architecture and setup are fully documented in the repo.",
    },
  },
  {
    slug: "personal-ai-employee",
    title: "Personal AI Employee",
    description: "A Silver-Tier 'Digital FTE': Claude Code + Obsidian + three concurrent watchers that turn inbound email, WhatsApp, and file drops into a human-approved action pipeline.",
    category: "ai-agent",
    techStack: ["Claude Code", "Python", "Obsidian", "MCP", "Gmail API", "Playwright"],
    githubUrl: "https://github.com/NaimalArain13/Hackathon-0_Personal-AI-Employee-project",
    caseStudy: {
      problem:
        "Turn Claude Code into an autonomous 'employee' that perceives events across channels (email, WhatsApp, filesystem), reasons about what to do next, and acts — without blindly auto-executing sensitive actions like sending an email or posting to LinkedIn.",
      approach: [
        "Implemented the full Bronze tier plus the Silver tier scope of the hackathon spec: three concurrent Watcher services (Gmail, WhatsApp, filesystem), an Obsidian vault as Claude Code's working memory, and a human-in-the-loop approval workflow for anything sensitive.",
        "Built two custom MCP servers (Email, Browser/LinkedIn) so Claude only gets to act — send an email, publish a post — once a human has approved the pending action file.",
      ],
      architecture: [
        "A shared BaseWatcher abstract class underlies GmailWatcher (OAuth2 + Gmail API), WhatsAppWatcher (Playwright automation), and a filesystem watcher — all writing structured action files into /Needs_Action.",
        "An orchestrator coordinates the watchers and monitors the /Pending_Approval folder; a sensitive-content detector decides what requires human sign-off before the Email MCP server or Browser MCP server (LinkedIn posting, with anti-detection handling) is allowed to execute.",
        "Approval requests expire automatically after 24 hours if left unactioned; network calls use exponential backoff (1s → 16s) on failure.",
      ],
      outcomes: [
        "Gmail monitoring surfaces new mail as action files within 2 minutes of arrival.",
        "The Email MCP server sends 95%+ of approved emails within 30 seconds.",
        "LinkedIn posting held 99% reliability across testing.",
        "Two or more watchers run concurrently without interfering with each other.",
        "~90% of sensitive actions were correctly routed through human approval rather than auto-executed.",
        "System held stable, uninterrupted operation for 24+ hours.",
      ],
      note: "Local-first by design, per the project's own security model — no public live demo. Full acceptance-test documentation lives in the repo.",
    },
  },

  {
    slug: "physical-ai-humanoid-robotics",
    title: "Physical AI & Humanoid Robotics Textbook",
    description: "Interactive Docusaurus textbook for robotics education, paired with a RAG-powered chatbot that answers student questions with citations back to the actual textbook sections.",
    category: "ai-agent",
    techStack: ["Docusaurus", "React", "TypeScript", "FastAPI", "Qdrant", "Gemini 1.5 Flash", "OpenAI Agents SDK"],
    liveUrl: "https://naimalarain13.github.io/physical-ai-and-humaniod-robotics/",
    githubUrl: "https://github.com/NaimalArain13/physical-ai-and-humaniod-robotics",
    caseStudy: {
      problem:
        "Robotics education content is usually static and offline — students working through dense technical material like ROS 2 architecture and Gazebo simulation have no way to get instant, source-grounded help without hunting through pages of docs or paying for tutoring.",
      approach: [
        "Built a Docusaurus-based interactive textbook paired with a floating RAG chatbot, so students get contextual help without leaving the page they're reading.",
        "Grounded every chatbot answer in the textbook's own content rather than open-ended LLM generation, with source citations back to the relevant section.",
        "Kept the entire stack on free-tier services — embeddings, vector store, LLM, and hosting — so the project could ship as a complete, zero-cost hackathon deliverable.",
      ],
      architecture: [
        "Docusaurus + React + TypeScript frontend with a floating chat widget, bilingual (English/Urdu) content, and dark-mode support.",
        "FastAPI + Pydantic backend on Python 3.11+ exposes the chat API.",
        "Textbook content is embedded with FastEmbed (BAAI/bge-small-en-v1.5) and stored in Qdrant Cloud as the retrieval vector store.",
        "Gemini 1.5 Flash, orchestrated via the OpenAI Agents SDK, generates answers from retrieved chunks; responses stream to the client over Server-Sent Events with conversation context preserved across turns.",
      ],
      outcomes: [
        "Phase 1 shipped with three fully-written lessons covering embodied intelligence, ROS 2 architecture, and Gazebo simulation.",
        "Chatbot answers are grounded with source attribution back to textbook sections rather than free-form generation.",
        "Entire system runs at zero hosting cost end to end, on free-tier services only.",
      ],
      note: "Built for a hackathon; Chapters 4–6 are scoped as a post-hackathon follow-up.",
    },
  },

  // ---------- Full-Stack Builds ----------
  {
    slug: "cassia-seed",
    title: "Cassia Seed Pvt. Ltd",
    description: "Corporate site for a hybrid vegetable seed supplier — F1 hybrid seed catalogue, farmer support content, and nationwide-supply messaging for the Pakistani market.",
    category: "full-stack",
    image: "/cassia-seed.PNG",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://cassiaseed.com/en",
    githubUrl: "https://github.com/NaimalArain13/Cassia-Seed-Pvt.-Ltd",
    caseStudy: {
      problem: "A hybrid-seed business needed a professional, fast-loading web presence to showcase its product catalogue and farmer-support services to a nationwide audience.",
      approach: [
        "Built a marketing site structured around the company's actual product lines and support offerings, deployed to the client's Hostinger-purchased domain for production use.",
      ],
      architecture: ["Next.js App Router, TypeScript, Tailwind CSS, deployed on Hostinger behind the client's own purchased domain."],
      outcomes: ["Live in production on the client's own domain (cassiaseed.com), hosted on Hostinger."],
    },
  },
  {
    slug: "impactomoney",
    title: "ImpactoMoney",
    description: "A decentralised funding platform built to support Palestinian relief efforts.",
    category: "full-stack",
    image: "/impactoM.PNG",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://impacto-money.vercel.app/",
    githubUrl: "https://github.com/NaimalArain13/Decentralized-Fund-Raising",
    caseStudy: {
      problem: "Provide a transparent, accessible platform for directing decentralised funding toward Palestinian relief efforts.",
      approach: ["Built and shipped a full campaign/funding UI end to end and deployed it publicly."],
      architecture: ["Next.js, TypeScript, Tailwind CSS, deployed on Vercel."],
      outcomes: ["Live and publicly accessible."],
    },
  },
  {
    slug: "snx-by-nash",
    title: "SnX by Nash",
    description: "E-commerce marketplace built for a hackathon — product catalogue, cart, and checkout flow.",
    category: "full-stack",
    image: "/snx.PNG",
    techStack: ["Next.js", "Sanity", "Tailwind CSS", "Shadcn UI"],
    liveUrl: "https://naimal-marketplace-hackathon03-q2-finale.vercel.app/",
    githubUrl: "https://github.com/NaimalArain13/Marketplace-Hackathon03-Q2-finale",
    caseStudy: {
      problem: "Hackathon brief: build a working e-commerce marketplace — catalogue, cart, and checkout — within a fixed timeframe.",
      approach: ["Used Sanity as a headless CMS for product content so the catalogue could be managed without redeploying the frontend."],
      architecture: ["Next.js, Sanity CMS, Tailwind CSS, Shadcn UI components, deployed on Vercel."],
      outcomes: ["Shipped a complete, deployed marketplace within the hackathon timeframe."],
    },
  },
  {
    slug: "exclusive",
    title: "Exclusive",
    description: "Full e-commerce website built for a UI/UX hackathon, from Figma design to deployed product.",
    category: "full-stack",
    image: "/exclusive.PNG",
    techStack: ["Next.js", "Tailwind CSS", "Figma-to-code"],
    liveUrl: "https://naimal-ui-ux-hackathon-preps-full-e-commerce-website.vercel.app/",
    githubUrl: "https://github.com/NaimalArain13/UI-UX-Hackathon-Preps-Full-e-Commerce-website-",
    caseStudy: {
      problem: "UI/UX hackathon brief: take a full e-commerce design and implement it pixel-accurately as a working site.",
      approach: ["Translated the design file into a responsive, componentised Next.js build."],
      architecture: ["Next.js, Tailwind CSS, deployed on Vercel."],
      outcomes: ["Deployed, fully responsive implementation of the source design."],
    },
  },
  {
    slug: "bandage",
    title: "Bandage",
    description: "UI/UX hackathon project — e-commerce storefront built with Next.js, Tailwind, and Shadcn.",
    category: "full-stack",
    image: "/bandage.PNG",
    techStack: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    liveUrl: "https://naimal-ui-ux-hackathon-q2.vercel.app/",
    githubUrl: "https://github.com/NaimalArain13/UI-UX-Hackathon-Q2",
    caseStudy: {
      problem: "UI/UX hackathon brief: implement a storefront design as a working, responsive site.",
      approach: ["Built the storefront using Shadcn UI components on top of Tailwind for consistent styling."],
      architecture: ["Next.js, Tailwind CSS, Shadcn UI, deployed on Vercel."],
      outcomes: ["Deployed, fully responsive implementation of the source design."],
    },
  },
  {
    slug: "dynamic-blog-platform",
    title: "Dynamic Blog Platform",
    description: "Responsive blog platform for writing and publishing articles, backed by Sanity CMS.",
    category: "full-stack",
    image: "/blog.png",
    techStack: ["Next.js", "Sanity", "Tailwind CSS"],
    liveUrl: "https://blog-platform-by-na.vercel.app/",
    githubUrl: "https://github.com/NaimalArain13/Blog-Platform",
    caseStudy: {
      problem: "Build a blogging platform where content can be authored and published without redeploying the frontend.",
      approach: ["Used Sanity as the content backend so articles are authored and published independently of the Next.js frontend."],
      architecture: ["Next.js, Sanity CMS, Tailwind CSS, deployed on Vercel."],
      outcomes: ["Live, publicly readable blog platform."],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
  return projects.filter((p) => p.category === category);
}
