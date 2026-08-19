"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "./sectionHeader";
import { impactClusters } from "@/lib/data/impact";

function Star({
  value,
  description,
  href,
  size,
  x,
  y,
  color,
  delay,
}: {
  value: string;
  description: string;
  href?: string;
  size: number;
  x: number;
  y: number;
  color: string;
  delay: number;
}) {
  const content = (
    <>
      <span
        className="block rounded-full transition-transform"
        style={{ width: size, height: size, background: color, boxShadow: `0 0 ${size + 4}px ${color}` }}
      />
      <span
        aria-hidden="true"
        className="absolute top-full left-1/2 -translate-x-1/2 font-mono text-[0.6rem] text-primary/80 whitespace-nowrap pointer-events-none -mt-0.5"
      >
        {value}
      </span>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 z-10 mb-3 w-max max-w-[190px] scale-95 rounded-lg border px-3 py-2 text-center font-mono text-[0.62rem] leading-snug opacity-0 transition-[opacity,transform] duration-100 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100"
        style={{
          background: "rgb(var(--color-bg) / 0.97)",
          borderColor: `${color}55`,
          color: "rgb(var(--color-primary) / 0.9)",
          boxShadow: `0 8px 24px -6px ${color}55`,
        }}
      >
        <span className="mb-0.5 block font-semibold" style={{ color }}>
          {value}
        </span>
        {description}
        <span
          aria-hidden="true"
          className="absolute left-1/2 top-full -mt-[5px] h-2.5 w-2.5 -translate-x-1/2 rotate-45 border-b border-r"
          style={{ background: "rgb(var(--color-bg) / 0.97)", borderColor: `${color}55` }}
        />
      </span>
    </>
  );
  const style: React.CSSProperties = {
    position: "absolute",
    left: `${x}%`,
    top: `${y}%`,
    transform: "translate(-50%, -50%)",
    padding: 10,
    animationDelay: `${delay}s`,
    zIndex: 3,
  };
  const label = `${value} — ${description}`;

  return href ? (
    <Link href={href} aria-label={label} className="impact-star group relative flex items-center justify-center" style={style}>
      {content}
    </Link>
  ) : (
    <div
      aria-label={label}
      tabIndex={0}
      className="impact-star group relative flex items-center justify-center outline-none"
      style={style}
    >
      {content}
    </div>
  );
}

export default function Impact() {
  return (
    <section id="impact" className="px-[6vw] py-16 scroll-mt-20">
      <SectionHeader eyebrow="Impact" headline="Proof, not promises." />

      {/* Desktop constellation */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9 }}
        className="hidden md:block relative w-full mt-6"
        style={{ aspectRatio: "1300 / 640" }}
      >
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 w-full h-full pointer-events-none"
          aria-hidden="true"
        >
          {/* spine between hubs */}
          {impactClusters.map((c, i) => {
            const next = impactClusters[(i + 1) % impactClusters.length];
            return (
              <line
                key={`spine-${c.cluster}`}
                x1={c.hubX}
                y1={c.hubY}
                x2={next.hubX}
                y2={next.hubY}
                stroke="rgb(var(--color-primary))"
                strokeOpacity="0.07"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            );
          })}
          {/* hub → star connectors */}
          {impactClusters.flatMap((c) =>
            c.metrics.map((m) => (
              <line
                key={`${c.cluster}-${m.value}`}
                x1={c.hubX}
                y1={c.hubY}
                x2={m.x}
                y2={m.y}
                stroke={c.color}
                strokeOpacity="0.2"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
            ))
          )}
        </svg>

        {impactClusters.map((c) => (
          <span
            key={`hub-${c.cluster}`}
            aria-hidden="true"
            className="absolute rounded-full z-[2]"
            style={{
              left: `${c.hubX}%`,
              top: `${c.hubY}%`,
              transform: "translate(-50%, -50%)",
              width: 8,
              height: 8,
              background: c.color,
              boxShadow: `0 0 7px ${c.color}`,
            }}
          />
        ))}

        {impactClusters.map((c) => (
          <span
            key={`label-${c.cluster}`}
            className="absolute font-mono text-[0.6rem] font-semibold uppercase whitespace-nowrap px-2 py-[3px] rounded-md border border-primary/10 z-[4]"
            style={{
              left: `${c.hubX}%`,
              top: `${c.hubY + 6}%`,
              transform: "translate(-50%, -50%)",
              letterSpacing: "0.1em",
              color: c.color,
              background: "rgb(var(--color-bg) / 0.85)",
            }}
          >
            {c.cluster}
          </span>
        ))}

        {impactClusters.flatMap((c, ci) =>
          c.metrics.map((m, mi) => (
            <Star key={`${c.cluster}-${m.value}`} {...m} color={c.color} delay={(ci * 3 + mi) * 0.4} />
          ))
        )}

        <div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none z-[5]"
          style={{ width: "min(28%, 360px)" }}
        >
          <span className="eyebrow !text-primary/30 !tracking-[0.14em] leading-relaxed">
            Every number is measured, not projected.
          </span>
        </div>
      </motion.div>

      {/* Mobile: stacked cluster lists */}
      <div className="md:hidden flex flex-col gap-8 mt-4">
        {impactClusters.map((c) => (
          <div key={c.cluster}>
            <div className="flex items-center gap-2.5 mb-3">
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ background: c.color, boxShadow: `0 0 6px ${c.color}` }}
              />
              <span
                className="font-mono text-[0.62rem] font-semibold uppercase"
                style={{ letterSpacing: "0.12em", color: c.color }}
              >
                {c.cluster}
              </span>
            </div>
            <div className="flex flex-col">
              {c.metrics.map((m) => {
                const row = (
                  <div className="flex items-baseline gap-4 py-2.5 border-b border-primary/5">
                    <span className="font-mono text-sm text-primary w-20 flex-shrink-0">{m.value}</span>
                    <span className="text-sm text-primary/55">{m.description}</span>
                  </div>
                );
                return m.href ? (
                  <Link key={m.value} href={m.href}>
                    {row}
                  </Link>
                ) : (
                  <div key={m.value}>{row}</div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
