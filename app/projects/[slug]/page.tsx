import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub, FaArrowUpRightFromSquare, FaRobot } from "react-icons/fa6";
import { projects, getProjectBySlug, projectCategories } from "@/lib/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);
  if (!project) notFound();

  const categoryLabel = projectCategories.find((c) => c.id === project.category)?.label;
  const backHref =
    project.category === "rag" ? "/#rag" : project.category === "full-stack" ? "/#projects" : "/#featured";

  return (
    <main className="bg-bg min-h-screen pt-32 pb-24 px-6 md:px-[clamp(20px,6vw,110px)]">
      <div className="max-w-4xl mx-auto">
        <Link href={backHref} className="text-sm font-semibold text-accent hover:underline">
          ← All Projects
        </Link>

        <p className="mt-6 eyebrow !text-accent">
          {categoryLabel}
        </p>
        <h1 className="mt-2 font-display font-extrabold text-4xl md:text-6xl text-primary">
          {project.title}
        </h1>
        <p className="mt-4 text-lg text-muted max-w-2xl">{project.description}</p>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium text-muted bg-surface px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-4 mt-8">
          {project.liveUrl && (
            <Link
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary text-bg px-6 py-3 font-semibold rounded-md hover:bg-accent transition-colors duration-300"
            >
              View Project <FaArrowUpRightFromSquare size={13} />
            </Link>
          )}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 font-semibold rounded-md hover:bg-primary hover:text-bg transition-all duration-300"
            >
              <FaGithub size={16} /> Source Code
            </Link>
          )}
        </div>

        <div className="relative aspect-[16/9] mt-12 rounded-2xl overflow-hidden bg-surface">
          {project.image ? (
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-surface to-bg">
              <FaRobot size={96} className="text-accent/60" />
            </div>
          )}
        </div>

        <div className="mt-16 space-y-14">
          <section>
            <h2 className="font-display font-bold text-2xl text-primary mb-4">The Problem</h2>
            <p className="text-muted leading-relaxed">{project.caseStudy.problem}</p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-primary mb-4">Approach</h2>
            <ul className="space-y-3">
              {project.caseStudy.approach.map((item, i) => (
                <li key={i} className="text-muted leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-accent">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-primary mb-4">Architecture</h2>
            <ul className="space-y-3">
              {project.caseStudy.architecture.map((item, i) => (
                <li key={i} className="text-muted leading-relaxed pl-5 relative before:content-['—'] before:absolute before:left-0 before:text-accent">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl text-primary mb-4">Outcomes</h2>
            <ul className="space-y-3">
              {project.caseStudy.outcomes.map((item, i) => (
                <li key={i} className="text-muted leading-relaxed pl-5 relative before:content-['✓'] before:absolute before:left-0 before:text-accent before:font-bold">
                  {item}
                </li>
              ))}
            </ul>
            {project.caseStudy.note && (
              <p className="mt-6 text-sm text-muted italic border-l-2 border-border pl-4">
                {project.caseStudy.note}
              </p>
            )}
          </section>
        </div>

        <div className="mt-20 pt-10 border-t border-border text-center">
          <p className="text-muted mb-4">Want to talk about this project or something similar?</p>
          <Link
            href="/#contact"
            className="inline-block bg-primary text-bg px-8 py-3.5 font-semibold hover:bg-accent transition-colors duration-300 rounded-md"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
