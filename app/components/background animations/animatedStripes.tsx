"use client";
import { useRef, useEffect } from "react";

export default function AnimatedStripes({ children }: { children?: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf: number;
    let offset = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e: MouseEvent) => {
      mouse.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const angle = Math.PI / 4 + (mouse.current.x - 0.5) * 0.4;
      const stripeW = 36;
      const stripeGap = 36;
      const totalW = stripeW + stripeGap;
      const diagonal = Math.sqrt(w * w + h * h);

      ctx.save();
      ctx.translate(w / 2, h / 2);
      ctx.rotate(angle);

      const count = Math.ceil(diagonal / totalW) + 2;
      const start = -count * totalW + (offset % totalW);

      const isDark = document.documentElement.classList.contains("dark");
      for (let i = 0; i < count * 2; i++) {
        const x = start + i * totalW;
        // Base: accent color (#00d4ff dark / #00aae3 light)
        // Alternate: one tone darker of the same accent
        ctx.fillStyle = i % 2 === 0
          ? (isDark ? "rgba(0,212,255,0.15)" : "rgba(0,170,227,0.20)")
          : (isDark ? "rgba(0,153,204,0.12)" : "rgba(0,122,163,0.15)");
        ctx.fillRect(x, -diagonal, stripeW, diagonal * 2);
      }
      ctx.restore();

      offset += 0.6;
      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <div className="relative w-full overflow-hidden bg-surface py-24">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-60" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
