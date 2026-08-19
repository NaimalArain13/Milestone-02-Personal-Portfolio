export interface ExperienceEntry {
  type: "work" | "education";
  role: string;
  company: string;
  period: string;
  location: string;
  color: string;
  description: string[];
  techStack: string[];
}

/** Newest first. */
export const experience: ExperienceEntry[] = [
  {
    type: "work",
    role: "Full-Stack Developer",
    company: "Scope Inspect App",
    period: "May 2025 — Present",
    location: "Full-Time · Remote (Florida, US)",
    color: "#22d3ee",
    description: [
      "End-to-end feature development across frontend and backend for an AI-powered inspection platform.",
      "Built and maintained third-party integrations.",
      "Production environment maintenance and bug resolution.",
      "Cross-functional collaboration on AI integration.",
    ],
    techStack: ["React", "Redux", "MUI", "Tailwind CSS", "FastAPI", "OpenAI Agent SDK"],
  },
  {
    type: "work",
    role: "Junior Full-Stack Developer",
    company: "TelGates Inc.",
    period: "Oct 2024 — May 2025",
    location: "Remote (Islamabad)",
    color: "#4dd98a",
    description: [
      "Led team development across frontend and backend.",
      "Built blockchain features and ran smart contract testing.",
      "Integrated Web3 product functionality end to end.",
    ],
    techStack: ["React", "Next.js", "TypeScript", "TonConnect", "Smart Contracts"],
  },
  {
    type: "education",
    role: "Diploma — Agentic AI & Full-Stack Development",
    company: "GIAIC",
    period: "2023 — Present",
    location: "Karachi, Pakistan",
    color: "#c87eff",
    description: [
      "Agentic AI specialisation: OpenAI Agents SDK, multi-agent pipelines, MCP.",
      "Full-stack track: Next.js, TypeScript, Python, cloud deployment.",
    ],
    techStack: ["Next.js", "Python", "OpenAI Agents SDK", "MCP"],
  },
  {
    type: "education",
    role: "Associate Degree — Science",
    company: "Govt. Nazareth Girls College",
    period: "2021 — 2023",
    location: "Pakistan",
    color: "#ffaa2e",
    description: [
      "Pre-Medical group with a focus on Zoology, Botany, and Chemistry.",
      "Built a foundation in scientific reasoning and analytical problem-solving.",
    ],
    techStack: [],
  },
];
