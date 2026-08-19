export interface Service {
  slug: string;
  title: string;
  description: string;
  techStack: string[];
  details: {
    overview: string;
    whatsIncluded: string[];
  };
}

export const services: Service[] = [
  {
    slug: "full-stack-web-development",
    title: "Full-Stack Web Development",
    description:
      "Next.js, React, TypeScript, Tailwind CSS — responsive, production-ready web apps from design to deployment.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    details: {
      overview:
        "End-to-end web app builds: component architecture, responsive layouts, state management, and deployment — taking a project from a design file or brief to a live, production site.",
      whatsIncluded: [
        "App Router-based Next.js builds with TypeScript",
        "Responsive, accessible UI implementation from Figma or a written brief",
        "API integration and data-fetching patterns",
        "Deployment and environment setup on Vercel",
      ],
    },
  },
  {
    slug: "ai-agent-development",
    title: "AI Agent Development",
    description:
      "Custom AI agents using the OpenAI Agents SDK, multi-agent pipelines, tool-use, and conversational systems.",
    techStack: ["OpenAI Agents SDK", "Claude Code", "MCP", "Python"],
    details: {
      overview:
        "Building agents that reason across multiple steps and call real tools — not single-prompt chatbots. This spans multi-agent pipelines, tool/function-calling integrations, and human-in-the-loop approval flows for anything sensitive.",
      whatsIncluded: [
        "Multi-step agent pipelines with inspectable intermediate outputs",
        "Tool-use / function-calling integrations against real APIs",
        "MCP server integration for external actions (email, browser automation, etc.)",
        "Human-in-the-loop approval workflows for sensitive or irreversible actions",
      ],
    },
  },
  {
    slug: "ui-ux-design-development",
    title: "UI/UX Design & Development",
    description:
      "Pixel-perfect interfaces with Shadcn, Figma-to-code workflows, accessible and fully responsive design systems.",
    techStack: ["Figma", "Shadcn UI", "Tailwind CSS"],
    details: {
      overview:
        "Turning a design file or a rough idea into a polished, accessible interface — componentised so it stays consistent as the product grows.",
      whatsIncluded: [
        "Figma-to-code implementation",
        "Reusable component libraries built on Shadcn UI",
        "Responsive layouts across breakpoints",
        "Accessibility basics: semantic markup, keyboard navigation, contrast",
      ],
    },
  },
  {
    slug: "ecommerce-solutions",
    title: "E-commerce Solutions",
    description:
      "Marketplace builds with Sanity CMS, cart systems, product management, and payment integration.",
    techStack: ["Sanity CMS", "Next.js", "Tailwind CSS"],
    details: {
      overview:
        "Marketplace and storefront builds where product content is managed independently of the frontend, with working cart and checkout flows.",
      whatsIncluded: [
        "Sanity-backed product catalogues, editable without redeploying",
        "Cart and checkout flow implementation",
        "Product management workflows for non-technical content updates",
      ],
    },
  },
  {
    slug: "python-automation",
    title: "Python & Automation",
    description:
      "Streamlit web apps, scripting, automation pipelines, data visualisation, and workflow tools.",
    techStack: ["Python", "Streamlit", "FastAPI"],
    details: {
      overview:
        "Scripts and small apps that remove manual, repetitive work — from data pipelines to lightweight internal tools.",
      whatsIncluded: [
        "Streamlit apps for quick internal tools and dashboards",
        "Background automation scripts (watchers, schedulers, retry logic)",
        "FastAPI backends for automation pipelines",
      ],
    },
  },
  {
    slug: "chatbot-conversational-ai",
    title: "Chatbot & Conversational AI",
    description:
      "Chainlit-based chatbots, RAG systems, memory-enabled assistants, and context-aware conversational interfaces.",
    techStack: ["Chainlit", "RAG", "OpenAI"],
    details: {
      overview:
        "Conversational assistants that keep context across a session and, where useful, ground their answers in a specific knowledge base rather than relying purely on the model's training data.",
      whatsIncluded: [
        "Chainlit-based conversational UIs",
        "Session-aware, memory-enabled assistant flows",
        "Retrieval-augmented generation for grounding answers in real documents",
      ],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
