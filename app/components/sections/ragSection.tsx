"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import SectionHeader from "./sectionHeader";
import { getProjectsByCategory } from "@/lib/data/projects";

export default function RagSection() {
  const ragProjects = getProjectsByCategory("rag");
  if (ragProjects.length === 0) return null;

  return (
    <section id="rag" className="px-[6vw] py-16 scroll-mt-20">
      <SectionHeader eyebrow="RAG & Applied AI" headline="Grounded answers, not guesses." />
      <div className="flex flex-col gap-5 mt-6">
        {ragProjects.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="border border-primary/15 rounded-lg p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div>
                <Link href={`/projects/${project.slug}`} className="group">
                  <h3 className="font-display font-bold text-primary text-2xl md:text-[1.75rem] leading-tight m-0 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                </Link>
                <p className="text-sm text-primary/50 mt-2 max-w-2xl">{project.description}</p>
              </div>
              <div className="flex items-center gap-4 flex-shrink-0">
                {project.liveUrl && (
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary/65 hover:text-accent transition-colors"
                  >
                    Live <FaArrowUpRightFromSquare size={10} />
                  </Link>
                )}
                {project.githubUrl && (
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-primary/65 hover:text-accent transition-colors"
                  >
                    <FaGithub size={12} /> Source
                  </Link>
                )}
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mb-5">
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

            <div className="hairline mb-5" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <p className="eyebrow mb-2">Problem</p>
                <p className="text-sm text-primary/60 leading-relaxed">{project.caseStudy.problem}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Retrieval Pipeline</p>
                <p className="text-sm text-primary/60 leading-relaxed">{project.caseStudy.architecture[2] ?? project.caseStudy.architecture[0]}</p>
              </div>
              <div>
                <p className="eyebrow mb-2">Outcome</p>
                <p className="text-sm text-primary/60 leading-relaxed">
                  <strong className="text-cream font-semibold">{project.caseStudy.outcomes[0]}</strong>
                </p>
              </div>
            </div>

            <Link href={`/projects/${project.slug}`} className="eyebrow !text-accent inline-block mt-6 hover:underline">
              Read full case study →
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
