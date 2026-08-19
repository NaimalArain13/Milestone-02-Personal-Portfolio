"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import SectionHeader from "./sectionHeader";
import { getProjectsByCategory } from "@/lib/data/projects";

export default function MoreProjects() {
  const builds = getProjectsByCategory("full-stack");

  return (
    <section id="projects" className="px-[6vw] py-16 scroll-mt-20">
      <SectionHeader eyebrow="Full-Stack Builds" headline="Shipped and live." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
        {builds.map((project, i) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="border border-primary/15 rounded-lg p-6 flex flex-col"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <Link href={`/projects/${project.slug}`} className="group">
                <h3 className="font-display font-bold text-primary text-xl leading-tight m-0 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
              </Link>
            </div>
            <p className="text-sm text-primary/50 leading-relaxed flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-1.5 mt-4 mb-4">
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
            <div className="flex items-center gap-5 pt-3 border-t border-primary/5">
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
              <Link
                href={`/projects/${project.slug}`}
                className="ml-auto text-xs font-semibold text-accent hover:underline"
              >
                Case study →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
