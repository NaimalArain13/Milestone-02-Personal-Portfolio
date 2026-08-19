"use client";
import { motion } from "framer-motion";
import SectionHeader from "./sectionHeader";
import { experience } from "@/lib/data/experience";

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="px-[6vw] py-16 scroll-mt-20">
      <SectionHeader eyebrow="Experience & Education" headline="The trajectory." />

      <div className="relative max-w-3xl mt-8">
        {/* spine */}
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-primary/15" aria-hidden="true" />

        <div className="flex flex-col gap-10">
          {experience.map((entry, i) => (
            <motion.div
              key={`${entry.company}-${entry.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="relative pl-10"
            >
              {/* node dot */}
              <span
                aria-hidden="true"
                className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2"
                style={{ borderColor: entry.color, background: "rgb(var(--color-bg))", boxShadow: `0 0 8px ${entry.color}55` }}
              />

              <div
                className="rounded-[3px] overflow-hidden"
                style={{
                  borderLeft: `2px solid ${entry.color}`,
                  border: `1px solid ${entry.color}28`,
                  borderLeftWidth: 2,
                  borderLeftColor: entry.color,
                  background: `linear-gradient(180deg, ${entry.color}0e 0%, ${entry.color}05 100%)`,
                }}
              >
                <div className="px-4 pt-3.5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-0.5">
                    <span className="font-semibold text-primary text-[0.95rem] leading-tight">
                      {entry.role}
                    </span>
                    <span className="font-mono text-[0.6rem] text-primary/40 whitespace-nowrap" style={{ letterSpacing: "0.06em" }}>
                      {entry.period}
                    </span>
                  </div>
                  <span className="font-mono text-[0.65rem] block" style={{ color: `${entry.color}bb`, letterSpacing: "0.04em" }}>
                    {entry.company} · {entry.location}
                  </span>
                  {(entry.description.length > 0 || entry.techStack.length > 0) && (
                    <div className="h-px mt-2.5 mb-3" style={{ background: `${entry.color}20` }} />
                  )}
                </div>

                {entry.description.length > 0 && (
                  <div className="px-4 pb-3 flex flex-col gap-1.5">
                    {entry.description.map((line, j) => (
                      <div key={j} className="flex gap-2 items-start">
                        <span className="text-[0.5rem] mt-[0.4rem] flex-shrink-0 opacity-70" style={{ color: entry.color }}>
                          ▪
                        </span>
                        <span className="text-[0.85rem] leading-normal text-primary/60">{line}</span>
                      </div>
                    ))}
                  </div>
                )}

                {entry.techStack.length > 0 && (
                  <div className="px-4 pb-4 flex flex-wrap gap-1.5">
                    {entry.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[0.58rem] uppercase px-2 py-0.5 rounded border border-primary/10 text-primary/45"
                        style={{ letterSpacing: "0.08em" }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
