"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMenu, FiX, FiSun, FiMoon, FiDownload } from "react-icons/fi";
import { RESUME_URL } from "@/lib/data/site";

const NAV_LINKS = [
  { label: "About", href: "/#about" },
  { label: "Experience", href: "/#experience" },
  { label: "Impact", href: "/#impact" },
  { label: "Work", href: "/#featured" },
  { label: "Stack", href: "/#stack" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-[5vw] py-4 flex items-center justify-between border-b ${
        scrolled ? "bg-bg/90 backdrop-blur-sm border-primary/10" : "bg-transparent border-transparent"
      }`}
    >
      <Link href="/">
        <span className="font-display font-bold text-primary text-lg tracking-wide">
          Naimal Salahuddin
        </span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-7">
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="font-mono text-[0.65rem] uppercase text-primary/40 hover:text-primary transition-colors duration-200 py-2"
            style={{ letterSpacing: "0.13em" }}
          >
            {label}
          </Link>
        ))}

        <Link
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-[0.65rem] uppercase border border-primary/20 text-primary/70 px-3.5 py-1.5 rounded-full hover:border-accent/60 hover:text-accent transition-colors duration-200"
          style={{ letterSpacing: "0.13em" }}
        >
          <FiDownload size={12} /> Resume
        </Link>

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="text-primary/60 hover:text-accent transition-colors duration-200"
          >
            {theme === "dark" ? <FiSun size={17} /> : <FiMoon size={17} />}
          </button>
        )}
      </nav>

      {/* Mobile right side */}
      <div className="md:hidden flex items-center gap-4">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="text-primary/60 hover:text-accent transition-colors duration-200"
          >
            {theme === "dark" ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        )}
        <button
          className="text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-bg border-t border-primary/10 shadow-sm flex flex-col items-center py-6 gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-[0.7rem] uppercase text-primary/60 hover:text-primary transition-colors"
              style={{ letterSpacing: "0.13em" }}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
          <Link
            href={RESUME_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-mono text-[0.7rem] uppercase border border-primary/20 text-primary/70 px-4 py-1.5 rounded-full"
            style={{ letterSpacing: "0.13em" }}
            onClick={() => setIsOpen(false)}
          >
            <FiDownload size={13} /> Resume
          </Link>
        </nav>
      )}
    </header>
  );
}
