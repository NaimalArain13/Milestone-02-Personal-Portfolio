"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FiDownload,
  FiMail,
  FiGithub,
  FiLinkedin,
  FiFacebook,
  FiMapPin,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import SectionHeader from "./sectionHeader";
import { RESUME_URL } from "@/lib/data/site";

interface ContactRow {
  label: string;
  value: string;
  href: string;
  Icon: IconType;
  external?: boolean;
}

const ROWS: ContactRow[] = [
  { label: "Resume", value: "View / download resume", href: RESUME_URL, Icon: FiDownload, external: true },
  { label: "Email", value: "naimalarain13@gmail.com", href: "mailto:naimalarain13@gmail.com", Icon: FiMail },
  { label: "GitHub", value: "Naimal Salahuddin", href: "https://github.com/NaimalArain13", Icon: FiGithub, external: true },
  { label: "LinkedIn", value: "Naimal Arain", href: "https://www.linkedin.com/in/naimal-arain-/", Icon: FiLinkedin, external: true },
  { label: "Facebook", value: "Naimal Salahuddin", href: "https://www.facebook.com/profile.php?id=100081783813071", Icon: FiFacebook, external: true },
  { label: "Location", value: "Karachi, Pakistan", href: "https://maps.google.com/?q=Karachi,Pakistan", Icon: FiMapPin, external: true },
];

export default function ContactSection() {
  return (
    <section id="contact" className="px-[6vw] pt-16 pb-10 scroll-mt-20">
      <SectionHeader eyebrow="Contact" headline="Let's build something." />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[8vw] items-start mt-6">
        {/* Left — availability + note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-2.5 border border-primary/10 rounded mb-8">
            <span className="w-[7px] h-[7px] rounded-full bg-green-400 shadow-[0_0_8px_#4ade80] animate-pulse-dot flex-shrink-0" />
            <span className="eyebrow !text-primary/55">Available for work · Agentic AI & Full-Stack</span>
          </div>
          <p className="text-[0.95rem] leading-[1.75] text-primary/55 max-w-md text-justify">
            Have a project in mind — an agent system, a full-stack build, or something in between?
            I typically respond within 24 hours. For urgent inquiries, email or LinkedIn is the
            fastest route.
          </p>
        </motion.div>

        {/* Right — link rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col"
        >
          {ROWS.map(({ label, value, href, Icon, external }) => (
            <Link
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className="group flex items-center gap-4 py-4 border-b border-primary/5 transition-colors"
            >
              <span className="text-primary/40 w-4 group-hover:text-accent transition-colors">
                <Icon size={14} />
              </span>
              <span className="flex-1">
                <span className="eyebrow !text-primary/40 block mb-0.5" style={{ fontSize: "0.58rem" }}>
                  {label}
                </span>
                <span className="text-sm text-primary/50 group-hover:text-primary/80 transition-colors">
                  {value}
                </span>
              </span>
              <span className="text-primary/35 text-xs group-hover:text-accent transition-colors">↗</span>
            </Link>
          ))}
        </motion.div>
      </div>

      {/* Credit line (site footer) */}
      <div className="text-center mt-24 pt-8 border-t border-primary/5">
        <span className="eyebrow !tracking-[0.12em] !text-primary/45">
          © {new Date().getFullYear()} Naimal Salahuddin • ⚡ Engineered with Claude Code • 🚀 Deployed on Vercel
        </span>
      </div>
    </section>
  );
}
