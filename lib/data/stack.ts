import type { IconType } from "react-icons";
import { TbTopologyStar3, TbSearch } from "react-icons/tb";
import {
  SiOpenai,
  SiSanity,
  SiStreamlit,
  SiTon,
  SiWeb3Dotjs,
  SiZod,
  SiGithub,
  SiFigma,
} from "react-icons/si";

export interface StackItem {
  name: string;
  note?: string;
  /** Rendered via react-icons when set. */
  Icon?: IconType;
  /** Rendered as an <img> from /public when set — takes precedence over Icon. */
  iconSrc?: string;
}

export interface StackCategory {
  category: string;
  color: string;
  items: StackItem[];
}

export const stackCategories: StackCategory[] = [
  {
    category: "Languages",
    color: "#a78bfa",
    items: [
      { name: "TypeScript", iconSrc: "/logos/typescript.svg" },
      { name: "JavaScript", iconSrc: "/logos/js.jpg" },
      { name: "Python", note: "AI, backend & RAG", iconSrc: "/logos/python.svg" },
      { name: "Solidity", note: "blockchain", iconSrc: "/logos/solidity.png" },
    ],
  },
  {
    category: "Frontend",
    color: "#22d3ee",
    items: [
      { name: "React", note: "hooks, Context", iconSrc: "/logos/react.png" },
      { name: "Next.js", note: "App Router", iconSrc: "/logos/nextjs.png" },
      { name: "Tailwind CSS", iconSrc: "/logos/tailwind.png" },
      { name: "Shadcn UI", iconSrc: "/logos/shadcn.png" },
      { name: "Redux", iconSrc: "/logos/redux.png" },
      { name: "MUI", iconSrc: "/logos/mui.png" },
    ],
  },
  {
    category: "AI & Agents",
    color: "#10b981",
    items: [
      { name: "OpenAI Agents SDK", note: "multi-agent, tool-use", Icon: SiOpenai },
      { name: "Claude Code", note: "skills, hooks", iconSrc: "/logos/claudecode.png" },
      { name: "MCP", note: "custom servers", iconSrc: "/logos/mcp.svg" },
      { name: "RAG", note: "retrieval pipelines", Icon: TbSearch },
      { name: "Multi-agent pipelines", Icon: TbTopologyStar3 },
      { name: "Chainlit", note: "chat UIs", iconSrc: "/logos/chainlit.png" },
      { name: "Streamlit", Icon: SiStreamlit },
      { name: "OpenClaw", note: "agent gateway", iconSrc: "/logos/openclaw.svg" },
      { name: "ClawHub", iconSrc: "/logos/clawhub.png" },
    ],
  },
  {
    category: "Backend & Data",
    color: "#2dd4bf",
    items: [
      { name: "FastAPI", iconSrc: "/logos/fastapi.svg" },
      { name: "Sanity CMS", Icon: SiSanity },
      { name: "MongoDB", iconSrc: "/logos/mongodb.svg" },
      { name: "PostgreSQL", iconSrc: "/logos/postgresql.svg" },
      { name: "Zod", note: "validation", Icon: SiZod },
    ],
  },
  {
    category: "Blockchain",
    color: "#60a5fa",
    items: [
      { name: "TON", note: "TonConnect", Icon: SiTon },
      { name: "Web3", note: "smart contracts", Icon: SiWeb3Dotjs },
    ],
  },
  {
    category: "Tools & Deploy",
    color: "#f5ca40",
    items: [
      { name: "Vercel", iconSrc: "/logos/vercel.svg" },
      { name: "GitHub", note: "CI, gh CLI", Icon: SiGithub },
      { name: "Figma", note: "design-to-code", Icon: SiFigma },
    ],
  },
];
