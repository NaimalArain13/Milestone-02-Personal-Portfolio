"use client";
import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, headline }: { eyebrow: string; headline: string }) {
  return (
    <div className="pt-3 pb-8">
      <div className="flex items-center gap-4 mb-8">
        <span className="eyebrow">{eyebrow}</span>
        <div className="hairline flex-1" />
      </div>
      <div className="overflow-hidden">
        <motion.h2
          initial={{ y: "100%" }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold text-primary leading-[1.1] m-0"
          style={{ fontSize: "clamp(2.6rem, 4.5vw, 4rem)" }}
        >
          {headline}
        </motion.h2>
      </div>
    </div>
  );
}
