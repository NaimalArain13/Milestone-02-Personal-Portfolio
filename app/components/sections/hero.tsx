"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin, FiDownload } from "react-icons/fi";
import { RESUME_URL } from "@/lib/data/site";

const SOCIALS = [
  { href: "mailto:naimalarain13@gmail.com", label: "Email", Icon: FiMail },
  { href: "https://github.com/NaimalArain13", label: "GitHub", Icon: FiGithub },
  { href: "https://www.linkedin.com/in/naimal-arain-/", label: "LinkedIn", Icon: FiLinkedin },
];

const nameReveal = {
  hidden: { y: "105%" },
  show: (i: number) => ({
    y: 0,
    transition: { duration: 0.8, delay: 0.15 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden px-[8.5vw] pt-24 pb-16"
    >
      <div className="grid grid-cols-1 md:grid-cols-2  items-center relative z-10">
        {/* Left — text */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-7 h-px bg-cream" />
            <span className="eyebrow !text-primary/55">
              Agents that act, interfaces that hold — from idea to production.
            </span>
          </motion.div>

          <div className="overflow-hidden -mb-[0.05em]">
            <motion.h1
              custom={0}
              variants={nameReveal}
              initial="hidden"
              animate="show"
              className="font-display font-bold text-primary m-0 leading-[0.9]"
              style={{ fontSize: "clamp(2.0rem, 9vw, 7.5rem)" }}
            >
              Naimal
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-10">
            <motion.h1
              custom={1}
              variants={nameReveal}
              initial="hidden"
              animate="show"
              className="font-display font-medium text-primary m-0 leading-[1.1] whitespace-nowrap"
              style={{ fontSize: "clamp(1.6rem, 7.4vw, 6.25rem)" }}
            >
              Salahuddin
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap gap-10 mb-8"
          >
            <div>
              <p className="eyebrow mb-1.5">Role</p>
              <p className="text-sm text-primary/70 font-medium">
                Full-Stack Developer
                <br />
                Agentic AI Engineer
              </p>
            </div>
            <div>
              <p className="eyebrow mb-1.5">Currently</p>
              <p className="text-sm text-primary/70 font-medium">
                Scope Inspect App
                <br />
                May 2025 – Present
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-wrap items-center gap-3 mb-8"
          >
            {SOCIALS.map(({ href, label, Icon }) => (
              <Link
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                aria-label={label}
                className="w-[38px] h-[38px] rounded-full border border-primary/15 flex items-center justify-center text-primary/65 hover:text-accent hover:border-accent/50 transition-colors duration-200"
              >
                <Icon size={15} />
              </Link>
            ))}
            <Link
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-primary/20 text-primary/80 px-5 py-2 rounded-full text-sm font-medium hover:border-accent/60 hover:text-accent transition-colors duration-200"
            >
              <FiDownload size={14} /> Download Resume
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="inline-flex items-center gap-2.5 px-4 py-2.5 border border-primary/10 rounded"
          >
            <span className="w-[7px] h-[7px] rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse-dot flex-shrink-0" />
            <span className="eyebrow !text-primary/55">Available for work · Agentic AI & Full-Stack</span>
          </motion.div>
        </div>

        {/* Right — portrait */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block relative w-3/4 mx-auto lg:mr-[2vw] lg:ml-auto"
        >
          <div className="relative rounded overflow-hidden" style={{ aspectRatio: "3/4" }}>
            <Image
              src="/Profile.jpeg"
              alt="Naimal Salahuddin"
              fill
              priority
              sizes="(min-width: 768px) 35vw, 0px"
              className="object-cover"
              style={{ objectPosition: "50% 20%", filter: "grayscale(15%) contrast(1.05)" }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to top, rgb(var(--color-bg) / 0.85) 0%, rgb(var(--color-bg) / 0.2) 40%, transparent 70%)",
              }}
            />
          </div>
          <div className="flex justify-between gap-2 mt-4 pb-2 border-b border-primary/5">
            <span className="eyebrow !tracking-[0.12em]">Agentic AI & Full-Stack — GIAIC</span>
            <span className="eyebrow !tracking-[0.12em]">Next.js • OpenAI SDK • MCP</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5"
      >
        <span className="eyebrow !tracking-[0.25em] !text-primary/50">Scroll</span>
        <span className="w-px h-6 bg-primary/25" />
      </motion.div>
    </section>
  );
}
