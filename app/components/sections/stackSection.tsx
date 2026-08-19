"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "./sectionHeader";
import { stackCategories } from "@/lib/data/stack";

export default function StackSection() {
  return (
    <section id="stack" className="px-[6vw] pt-16 pb-28 scroll-mt-20">
      <SectionHeader eyebrow="Stack" headline="What I build with." />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-[8vw] items-start mt-6">
        <div className="lg:sticky lg:top-24">
          <p className="text-sm leading-[1.7] text-primary/50 max-w-[260px]">
            Used in shipped projects and production work — not just imported once.
          </p>
        </div>

        <div>
          {stackCategories.map((cat, ci) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col sm:flex-row gap-4 sm:gap-6 sm:items-center py-6 ${
                ci === 0 ? "" : "border-t border-primary/10"
              }`}
            >
              <div
                className="font-mono text-[0.62rem] uppercase w-[118px] flex-shrink-0 leading-normal"
                style={{ letterSpacing: "0.15em", color: cat.color }}
              >
                {cat.category}
              </div>
              <div className="flex flex-wrap gap-x-6 gap-y-5">
                {cat.items.map(({ name, note, Icon, iconSrc }) => (
                  <div key={name} className="flex flex-col items-center gap-2 w-[94px]">
                    <div className="flex items-center justify-center h-10">
                      {iconSrc ? (
                        name === "Vercel" ? (
                          <span className="flex items-center justify-center w-8 h-8 rounded-full bg-black">
                            <Image src={iconSrc} alt="" width={16} height={16} />
                          </span>
                        ) : (
                          <Image src={iconSrc} alt="" width={32} height={32} />
                        )
                      ) : Icon ? (
                        <Icon size={32} className="text-primary/70" />
                      ) : null}
                    </div>
                    <div className="text-[0.72rem] text-primary/55 text-center leading-tight">
                      {name}
                      {note && (
                        <span className="block text-primary/30 text-[0.62rem] mt-0.5">({note})</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
