"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "./sectionHeader";
import { getProjectsByCategory, type Project } from "@/lib/data/projects";

function LabelledRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 items-start">
      <span
        className="font-mono text-[0.58rem] uppercase text-primary/40 w-[76px] flex-shrink-0 pt-[3px]"
        style={{ letterSpacing: "0.12em" }}
      >
        {label}
      </span>
      <span className="text-[0.85rem] leading-[1.65] text-primary/60 text-justify flex-1 min-w-0">
        {children}
      </span>
    </div>
  );
}

function FeaturedCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex-1 min-w-0"
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group relative block border border-primary/15 rounded-lg p-6 h-full overflow-hidden transition-colors duration-300 hover:border-accent/40"
      >
        <div className="flex items-start justify-between gap-3 mb-1">
          <h3 className="font-display font-bold text-primary text-[1.6rem] leading-tight m-0">
            {project.title}
          </h3>
          <span className="text-primary/35 text-sm mt-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
            ↗
          </span>
        </div>
        <p className="text-sm text-primary/50 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono text-[0.56rem] uppercase px-2 py-0.5 rounded border border-primary/10 text-primary/45"
              style={{ letterSpacing: "0.08em" }}
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="hairline mb-4" />
        <div className="flex flex-col gap-3">
          <LabelledRow label="Context">{project.caseStudy.problem}</LabelledRow>
          <LabelledRow label="Approach">{project.caseStudy.approach[0]}</LabelledRow>
          <LabelledRow label="System">{project.caseStudy.architecture[0]}</LabelledRow>
          <LabelledRow label="Outcome">
            <strong className="text-cream font-semibold">{project.caseStudy.outcomes[0]}</strong>
          </LabelledRow>
        </div>
        <span
          className="eyebrow !text-accent block mt-5 group-hover:underline"
        >
          Read full case study →
        </span>
      </Link>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  const featured = getProjectsByCategory("ai-agent");

  return (
    <section id="featured" className="px-[6vw] py-16 scroll-mt-20">
      <SectionHeader eyebrow="Featured — AI Agent Orchestration" headline="What the agents do." />
      <div className="flex flex-col gap-5 mt-6">
        {[0, 2].map((start) => (
          <div key={start} className="flex flex-col lg:flex-row gap-5">
            {featured.slice(start, start + 2).map((p, i) => (
              <FeaturedCard key={p.slug} project={p} index={start + i} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
