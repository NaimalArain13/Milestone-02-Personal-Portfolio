"use client";
import { motion } from "framer-motion";
import SectionHeader from "./sectionHeader";

const PRINCIPLES = [
  {
    title: "Agents with a human in the loop",
    body: "Autonomous doesn't mean unsupervised. The agent systems I build route sensitive actions — emails, posts, payments — through explicit approval workflows before anything executes.",
  },
  {
    title: "Full-stack, Figma to deploy",
    body: "I take products from a design file or a rough brief to a live deployment: componentised Next.js frontends, typed APIs, CMS-backed content, and production hosting on Vercel.",
  },
  {
    title: "Local-first automation",
    body: "Watchers, orchestrators, and MCP servers that run on real machines against real inboxes — built to survive restarts, retry on failure, and log everything they do.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function About() {
  return (
    <section id="about" className="px-[6vw] py-16 scroll-mt-20">
      <SectionHeader eyebrow="About" headline="Prompts are easy. Systems around them aren't." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[6vw] items-start mt-4">
        {/* Left — narrative */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
        >
          <blockquote className="border-l-2 border-cream/30 pl-5 mb-8">
            <p className="text-lg text-cream/90 font-medium leading-relaxed m-0">
              A model call is one line of code. Making it perceive, decide, act, and stop when it
              should — that&apos;s the engineering.
            </p>
          </blockquote>
          <div className="space-y-5 text-[0.95rem] leading-[1.75] text-primary/60 text-justify">
            <p>
              I&apos;m Naimal Salahuddin — a full-stack developer and Agentic AI engineer with 2+ years
              of hands-on experience building web applications and intelligent systems. By day I
              build features for an AI-powered inspection platform at{" "}
              <strong className="text-cream font-semibold">Scope Inspect App</strong>; the rest of the
              time I build agents that watch inboxes, draft actions, and wait for a human to say go.
            </p>
            <p>
              My stack centres on <strong className="text-cream font-semibold">Next.js, TypeScript,
              and Python</strong>, with the{" "}
              <strong className="text-cream font-semibold">OpenAI Agents SDK, Claude Code, and MCP</strong>{" "}
              on the agent side. I&apos;ve shipped multi-agent pipelines, a Silver-Tier autonomous
              &quot;AI employee&quot;, and a string of production web builds — and I&apos;m currently
              going deeper into retrieval-augmented generation.
            </p>
          </div>
        </motion.div>

        {/* Right — principle cards */}
        <div className="flex flex-col gap-4">
          {PRINCIPLES.map((p, i) => (
            <motion.div
              key={p.title}
              custom={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="border border-primary/15 rounded-lg p-6"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="w-[5px] h-[5px] rounded-full bg-cream flex-shrink-0" />
                <h3 className="font-display font-bold text-primary text-lg m-0">{p.title}</h3>
              </div>
              <p className="text-sm leading-[1.7] text-primary/55 m-0 text-justify">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
