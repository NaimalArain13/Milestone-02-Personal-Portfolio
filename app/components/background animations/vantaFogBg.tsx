"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "next-themes";

export default function VantaFogBg() {
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
    import("vanta/dist/vanta.fog.min.js").then((VANTA) => {
      if (!vantaRef.current) return;
      vantaEffect.current = VANTA.default({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        highlightColor: isDark ? 0x00d4ff : 0xd0f0ff,
        midtoneColor:   isDark ? 0x062040 : 0xe8f7fd,
        lowlightColor:  isDark ? 0x0a0f1e : 0xffffff,
        baseColor:      isDark ? 0x0a0f1e : 0xffffff,
        blurFactor: 0.6,
        speed: 1.5,
        zoom: 0.8,
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
