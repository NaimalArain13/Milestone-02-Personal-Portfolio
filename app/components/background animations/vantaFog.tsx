"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

export default function VantaFog() {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<{ destroy: () => void } | null>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const isDark = resolvedTheme === "dark";

    if (vantaEffect.current) {
      vantaEffect.current.destroy();
      vantaEffect.current = null;
    }

    // @ts-ignore — vanta has no TypeScript definitions
    import("vanta/dist/vanta.birds.min.js").then((VANTA) => {
      if (!vantaRef.current) return;
      vantaEffect.current = VANTA.default({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        color1: isDark ? 0x00d4ff : 0x00aae3,
        color2: isDark ? 0x0066ff : 0x0099cc,
        backgroundColor: isDark ? 0x0a0f1e : 0xffffff,
        birdSize: 1.2,
        wingSpan: 25,
        speedLimit: 4,
        separation: 60,
        alignment: 40,
        cohesion: 30,
        quantity: 5,
      });
    });

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [resolvedTheme]);

  return <div ref={vantaRef} className="absolute inset-0 w-full h-full" />;
}
