"use client";

import { useEffect, useRef } from "react";

const CODE_TOKENS = [
  "const [talent, setTalent] = useState()",
  "async / await",
  "git push origin main",
  "===",
  "!==",
  "&&",
  "||",
  "=>",
  "{ ...props }",
  "<TechToJob />",
  "return next()",
  "npm run dev",
  "Promise.all([fetch1, fetch2])",
  "try { ... } catch (err)",
  "interface Developer { id: string }",
  "import { useState, useEffect }",
  "status: 200 OK",
  "docker compose up -d",
  "res.json({ ok: true, matched: true })",
  "[ ...skills, 'TypeScript' ]",
  "type Role = 'Frontend' | 'Backend'",
  "git checkout -b feature/no-ats",
  "export default function App()",
  "console.log('Match found')",
  "!== null",
  "talent.filter((dev) => dev.ready)",
  "SELECT * FROM verified_talent",
  "npm i @techtojob/core",
  "git commit -m 'feat: verified portfolio'",
  "z.object({ stack: z.string() })",
  "curl -X POST https://api.techtojob",
  "yarn build && yarn start",
  "process.env.NEXT_PUBLIC_API",
  "export const metadata = { ... }",
  "git merge origin/main",
  "pnpm dlx prisma migrate",
  "const [loading, setLoading] = useState(false)",
  "test('renders without ats filter')",
  "class Portfolio extends Component",
  "req.headers.authorization",
  "supabase.from('jobs').select('*')",
  "0b101010",
  "def test_candidate_solution():",
];

interface Particle {
  text: string;
  x: number;
  y: number;
  vx: number;
  vy: number;
  baseAlpha: number;
  alpha: number;
  size: number;
  isTeal: boolean;
}

interface CodeParticlesBackgroundProps {
  className?: string;
}

export default function CodeParticlesBackground({
  className = "",
}: CodeParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const parent = canvas.parentElement || canvas;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000, active: false };

    const handleResize = () => {
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      if (width === 0 || height === 0) return;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // Determine particle count based on container width & height for rich density
      const area = width * height;
      const count = Math.max(
        14,
        Math.min(Math.floor(area / 18000), width < 640 ? 24 : width < 1024 ? 38 : 52)
      );

      particles = [];
      for (let i = 0; i < count; i++) {
        const text = CODE_TOKENS[i % CODE_TOKENS.length];
        const isTeal = Math.random() > 0.4; // ~60% brand teal, ~40% muted light gray
        const baseAlpha = isTeal
          ? 0.20 + Math.random() * 0.16 // 0.20 - 0.36
          : 0.16 + Math.random() * 0.14; // 0.16 - 0.30
        const size = width < 640 ? 11 + Math.random() * 3 : 13 + Math.random() * 3.5;

        particles.push({
          text,
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: -0.18 - Math.random() * 0.28, // Gentle upward float
          baseAlpha,
          alpha: baseAlpha,
          size,
          isTeal,
        });
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = parent.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    parent.addEventListener("mousemove", handleMouseMove);
    parent.addEventListener("mouseleave", handleMouseLeave);

    handleResize();
    window.addEventListener("resize", handleResize);

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.textBaseline = "middle";

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particle gently
        p.x += p.vx;
        p.y += p.vy;

        // Wrap around boundaries
        if (p.y < -20) {
          p.y = height + 10;
          p.x = Math.random() * width;
        }
        if (p.x < -40) p.x = width + 30;
        if (p.x > width + 40) p.x = -30;

        // Interactive highlight near cursor: brightens up to 0.65
        let targetAlpha = p.baseAlpha;
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const boost = (1 - dist / 140) * 0.28;
            targetAlpha = Math.min(p.baseAlpha + boost, 0.65);
            // Slight organic deflection
            p.x += (dx / dist) * 0.4;
            p.y += (dy / dist) * 0.4;
          }
        }

        p.alpha += (targetAlpha - p.alpha) * 0.1;

        // Draw code token in crisp monospace with medium weight
        ctx.font = `500 ${Math.round(p.size)}px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace`;
        if (p.isTeal) {
          ctx.fillStyle = `rgba(132, 192, 191, ${p.alpha.toFixed(3)})`;
        } else {
          ctx.fillStyle = `rgba(229, 231, 235, ${p.alpha.toFixed(3)})`;
        }
        ctx.fillText(p.text, p.x, p.y);
      }

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      parent.removeEventListener("mousemove", handleMouseMove);
      parent.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  );
}
