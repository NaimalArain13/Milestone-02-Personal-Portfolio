"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function GlobalBackground() {
  const blob1Ref = useRef<HTMLDivElement>(null);
  const blob2Ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const x1 = gsap.quickTo(blob1Ref.current, "x", { duration: 1.8, ease: "power2" });
    const y1 = gsap.quickTo(blob1Ref.current, "y", { duration: 1.8, ease: "power2" });
    const x2 = gsap.quickTo(blob2Ref.current, "x", { duration: 2.4, ease: "power2" });
    const y2 = gsap.quickTo(blob2Ref.current, "y", { duration: 2.4, ease: "power2" });

    const onMove = (e: MouseEvent) => {
      x1(e.clientX - 300);
      y1(e.clientY - 300);
      x2(e.clientX - 400);
      y2(e.clientY - 400);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  });

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Cyan blob */}
      <div
        ref={blob1Ref}
        className="absolute w-[600px] h-[600px] rounded-full animate-breathe"
        style={{
          background: "radial-gradient(circle, rgba(0,170,227,0.10) 0%, transparent 70%)",
          filter: "blur(60px)",
          top: 0,
          left: 0,
        }}
      />
      {/* Light blob */}
      <div
        ref={blob2Ref}
        className="absolute w-[800px] h-[800px] rounded-full animate-breathe-slow"
        style={{
          background: "radial-gradient(circle, rgba(245,245,245,0.6) 0%, transparent 70%)",
          filter: "blur(80px)",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
