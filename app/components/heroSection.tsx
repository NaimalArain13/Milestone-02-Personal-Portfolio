"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import VantaFog from "./background animations/vantaFogBg";

gsap.registerPlugin(useGSAP);

const WORDS = ["Websites", "AI Agents", "Experiences", "Products"];

export default function HeroSection() {
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [current, setCurrent] = useState(0);

  useGSAP(() => {
    const total = WORDS.length;
    let idx = 0;

    // Set initial state: first word visible, rest hidden below
    wordRefs.current.forEach((el, i) => {
      if (!el) return;
      gsap.set(el, { y: i === 0 ? 0 : 60, opacity: i === 0 ? 1 : 0 });
    });

    const cycle = () => {
      const current = wordRefs.current[idx];
      const next = wordRefs.current[(idx + 1) % total];
      if (!current || !next) return;

      const tl = gsap.timeline({
        onComplete: () => {
          idx = (idx + 1) % total;
          setCurrent(idx);
          setTimeout(cycle, 2000);
        },
      });

      // Outgoing word: slide up + fade out
      tl.to(current, { y: -60, opacity: 0, duration: 0.5, ease: "power2.in" });
      // Reset next word below
      tl.set(next, { y: 60, opacity: 0 });
      // Incoming word: slide up into place + fade in
      tl.to(next, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" });
    };

    const timer = setTimeout(cycle, 2000);
    return () => clearTimeout(timer);
  });

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-[clamp(20px,6vw,110px)] pt-24 pb-16 overflow-hidden">
      {/* Vanta fog — sits behind all content, navbar (z-50) stays on top */}
      {/* <VantaFog /> */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">

        {/* Left — text */}
        <div className="flex-1 min-w-0">
          <span className="inline-flex items-center gap-2 bg-surface rounded-full px-4 py-1.5 text-sm text-muted mb-8">
            <span className="w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
            Available for work
          </span>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-primary leading-tight">
            Building{" "}
            {/* Text-rotate wrapper — matches infosion.de span.text--rotate pattern */}
            <span className="relative inline-block overflow-hidden align-top">
              {/* Spacer: invisible, holds width of longest word */}
              <span className="invisible whitespace-nowrap">Experiences</span>
              {/* Actual rotating words, absolutely positioned */}
              {WORDS.map((word, i) => (
                <span
                  key={word}
                  ref={(el) => { wordRefs.current[i] = el; }}
                  className="absolute left-0 top-0 whitespace-nowrap text-accent"
                  style={{ willChange: "transform, opacity", opacity: 0 }}
                >
                  {word}
                </span>
              ))}
            </span>
            <br />
            that matter.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-muted max-w-lg leading-relaxed">
            Full-Stack Developer &amp; AI Engineer crafting modern web apps and intelligent systems — from idea to deployment.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/projects"
              className="inline-block bg-primary text-bg px-8 py-3.5 font-semibold hover:bg-accent transition-colors duration-300 rounded-md"
            >
              View Projects
            </Link>
            <Link
              href="/contact"
              className="inline-block border-2 border-primary text-primary px-8 py-3.5 font-semibold hover:bg-primary hover:text-bg transition-all duration-300 rounded-md"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Right — profile image */}
        <div className="flex-shrink-0 hidden md:block">
          <div className="relative w-72 h-80 lg:w-80 lg:h-96 bg-surface rounded-3xl overflow-hidden">
            <Image
              src="/dp.jpg"
              alt="Naimal Salahuddin"
              fill
              className="object-cover object-top"
            />
            {/* Subtle overlay label */}
            <div className="absolute bottom-4 left-4 right-4 bg-bg/90 backdrop-blur-sm rounded-xl px-4 py-3">
              <p className="text-sm font-semibold text-primary">Naimal Salahuddin</p>
              <p className="text-xs text-muted">Full-Stack Dev &amp; AI Engineer</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
