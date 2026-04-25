"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

export default function VantaWaves() {
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
    import("vanta/dist/vanta.waves.min.js").then((VANTA) => {
      if (!vantaRef.current) return;
      vantaEffect.current = VANTA.default({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        color: isDark ? 0x00aae3 : 0x00aae3,
        shininess: 40,
        waveHeight: 20,
        waveSpeed: 0.75,
        zoom: 0.85,
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
