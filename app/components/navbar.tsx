"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-[clamp(20px,6vw,110px)] py-4 flex items-center justify-between ${
        scrolled ? "bg-bg shadow-sm" : "bg-transparent"
      }`}
    >
      <Link href="/">
        <span className="text-2xl font-bold text-primary">NA</span>
      </Link>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-10">
        {[
          { label: "Projects", href: "/projects" },
          { label: "Services", href: "/services" },
          { label: "Contact",  href: "/contact"  },
        ].map(({ label, href }) => (
          <Link
            key={href}
            href={href}
            className="text-lg font-semibold text-primary border-t-4 border-transparent hover:border-accent hover:text-accent transition-all duration-200 pt-2"
          >
            {label}
          </Link>
        ))}

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="text-primary hover:text-accent transition-colors duration-200 pt-2"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        )}
      </nav>

      {/* Mobile right side */}
      <div className="md:hidden flex items-center gap-4">
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            className="text-primary hover:text-accent transition-colors duration-200"
          >
            {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        )}
        <button
          className="text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <nav className="absolute top-full left-0 right-0 bg-bg border-t border-border shadow-sm flex flex-col items-center py-6 gap-6">
          {[
            { label: "Projects", href: "/projects" },
            { label: "Services", href: "/services" },
            { label: "Contact",  href: "/contact"  },
          ].map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-base font-semibold text-primary hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
