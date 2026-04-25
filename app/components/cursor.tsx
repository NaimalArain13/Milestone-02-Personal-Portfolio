"use client";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

// Ring is 34px, dot is 5px — half-sizes used to center on mouse
const RING_HALF = 17;
const DOT_HALF = 2.5;

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    // Position both off-screen until first mousemove
    gsap.set([ring, dot], { x: -100, y: -100 });

    const xRing = gsap.quickTo(ring, "x", { duration: 0.5, ease: "power3" });
    const yRing = gsap.quickTo(ring, "y", { duration: 0.5, ease: "power3" });
    const xDot  = gsap.quickTo(dot,  "x", { duration: 0.08 });
    const yDot  = gsap.quickTo(dot,  "y", { duration: 0.08 });

    const onMove = (e: MouseEvent) => {
      xRing(e.clientX - RING_HALF);
      yRing(e.clientY - RING_HALF);
      xDot(e.clientX - DOT_HALF);
      yDot(e.clientY - DOT_HALF);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest(".project-card")) {
        gsap.to(ring, { scale: 2.5, duration: 0.3, ease: "power2.out" });
      } else if (t.closest("a, button")) {
        gsap.to(ring, { scale: 1.8, duration: 0.3, ease: "power2.out" });
      }
    };

    const onOut = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      if (t.closest(".project-card") || t.closest("a, button")) {
        gsap.to(ring, { scale: 1, duration: 0.3, ease: "power2.out" });
      }
    };

    const onDown  = () => gsap.to(ring, { scale: 0.8, duration: 0.1 });
    const onUp    = () => gsap.to(ring, { scale: 1,   duration: 0.15 });

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseover",  onOver);
    document.addEventListener("mouseout",   onOut);
    document.addEventListener("mousedown",  onDown);
    document.addEventListener("mouseup",    onUp);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover",  onOver);
      document.removeEventListener("mouseout",   onOut);
      document.removeEventListener("mousedown",  onDown);
      document.removeEventListener("mouseup",    onUp);
    };
  });

  return (
    <>
      <div ref={ringRef} className="cursor-ring" />
      <div ref={dotRef}  className="cursor-dot"  />
    </>
  );
}
