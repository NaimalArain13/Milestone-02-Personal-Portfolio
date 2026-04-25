"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

export default function VantaDots() {
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
    import("vanta/dist/vanta.dots.min.js").then((VANTA) => {
      if (!vantaRef.current) return;
      vantaEffect.current = VANTA.default({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        color: isDark ? 0x00d4ff : 0x00aae3,
        color2: isDark ? 0x0099cc : 0x007aa3,
        backgroundColor: isDark ? 0x0a0f1e : 0xffffff,
        size: 3,
        spacing: 35,
        showLines: true,
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
