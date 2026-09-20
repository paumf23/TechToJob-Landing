"use client";

import { useEffect, useRef } from "react";
import { useTranslations } from "next-intl";

interface PersonNode {
  baseX: number;
  baseY: number;
  offsetX: number;
  offsetY: number;
  pushX: number;
  pushY: number;
  phaseX: number;
  phaseY: number;
  speedX: number;
  speedY: number;
  ampX: number;
  ampY: number;
  radius: number;
  theme: "teal" | "dark";
  ringPulse: number;
}

function getNodeCount(width: number): number {
  if (width < 640) {
    // Mobile: 6 to 8 nodes (clean, uncluttered, no overload)
    return Math.min(Math.max(Math.floor(width / 55), 6), 8);
  } else if (width < 1024) {
    // Tablet: 12 to 18 nodes
    return Math.min(Math.max(Math.floor(width / 50), 12), 18);
  } else {
    // Monitor / Desktop: 28 to 36 nodes (rich talent network)
    return Math.min(Math.max(Math.floor(width / 42), 28), 36);
  }
}

function initCanvasNetwork(
  canvas: HTMLCanvasElement,
  container: HTMLElement
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  let animationFrameId: number;

  let width = (canvas.width = container.clientWidth || window.innerWidth);
  let height = (canvas.height = container.clientHeight || 240);

  const mouse = { x: -2000, y: -2000 };

  const handleMouseMove = (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  };

  const handleMouseLeave = () => {
    mouse.x = -2000;
    mouse.y = -2000;
  };

  container.addEventListener("mousemove", handleMouseMove);
  container.addEventListener("mouseleave", handleMouseLeave);

  const createNodes = (w: number, h: number): PersonNode[] => {
    const count = getNodeCount(w);
    const newNodes: PersonNode[] = [];
    const slotWidth = w / count;

    // Distribute nodes evenly from left to right across the full width
    for (let i = 0; i < count; i++) {
      const baseX = slotWidth * (i + 0.5);
      // Organic vertical stagger so they don't look like a straight line
      const verticalLevels = [0.28, 0.72, 0.45, 0.82, 0.35, 0.65];
      const baseY = Math.max(
        35,
        Math.min(h - 35, h * verticalLevels[i % verticalLevels.length] + (Math.random() - 0.5) * 20)
      );

      newNodes.push({
        baseX,
        baseY,
        offsetX: 0,
        offsetY: 0,
        pushX: 0,
        pushY: 0,
        phaseX: Math.random() * Math.PI * 2,
        phaseY: Math.random() * Math.PI * 2,
        speedX: 0.015 + Math.random() * 0.015,
        speedY: 0.012 + Math.random() * 0.015,
        ampX: Math.min(18, slotWidth * 0.28),
        ampY: 18,
        radius: Math.random() * 2 + 13.5, // 13.5px - 15.5px
        theme: i % 3 === 0 ? "dark" : "teal",
        ringPulse: Math.random() * Math.PI * 2,
      });
    }
    return newNodes;
  };

  let nodes = createNodes(width, height);

  const handleResize = () => {
    if (!canvas || !container) return;
    const newWidth = container.clientWidth || window.innerWidth;
    const newHeight = container.clientHeight || 240;
    if (newWidth === width && newHeight === height) return;

    width = canvas.width = newWidth;
    height = canvas.height = newHeight;
    nodes = createNodes(width, height);
  };

  window.addEventListener("resize", handleResize);

  const mouseRadius = 110;

  const render = () => {
    ctx.clearRect(0, 0, width, height);

    // 1. Calculate node positions with smooth floating drift and cursor repulsion
    const positions: { x: number; y: number }[] = [];

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];

      // Harmonic organic floating movement
      node.phaseX += node.speedX;
      node.phaseY += node.speedY;
      node.offsetX = Math.sin(node.phaseX) * node.ampX;
      node.offsetY = Math.cos(node.phaseY) * node.ampY;

      // Current position before cursor repulsion
      const currentX = node.baseX + node.offsetX + node.pushX;
      const currentY = node.baseY + node.offsetY + node.pushY;

      // Cursor push repulsion
      const mdx = currentX - mouse.x;
      const mdy = currentY - mouse.y;
      const mdist = Math.hypot(mdx, mdy);

      if (mdist < mouseRadius && mdist > 0) {
        const force = (mouseRadius - mdist) / mouseRadius;
        const angle = Math.atan2(mdy, mdx);
        node.pushX += Math.cos(angle) * force * 3.5;
        node.pushY += Math.sin(angle) * force * 3.5;
      }

      // Smoothly restore push back to 0 (spring damping)
      node.pushX *= 0.92;
      node.pushY *= 0.92;

      // Keep within canvas bounds
      const posX = Math.max(node.radius + 8, Math.min(width - node.radius - 8, node.baseX + node.offsetX + node.pushX));
      const posY = Math.max(node.radius + 8, Math.min(height - node.radius - 8, node.baseY + node.offsetY + node.pushY));

      positions.push({ x: posX, y: posY });
      node.ringPulse += 0.03;
    }

    // 2. Strict Collision Prevention: Ensure nodes never overlap
    const MIN_SEPARATION = width < 640 ? 52 : 46;
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const dx = positions[j].x - positions[i].x;
        const dy = positions[j].y - positions[i].y;
        const dist = Math.hypot(dx, dy);

        if (dist < MIN_SEPARATION && dist > 0) {
          const overlap = (MIN_SEPARATION - dist) / 2;
          const nx = dx / dist;
          const ny = dy / dist;
          positions[i].x -= nx * overlap;
          positions[i].y -= ny * overlap;
          positions[j].x += nx * overlap;
          positions[j].y += ny * overlap;
        }
      }
    }

    // 3. Connect Nodes: GUARANTEE 100% of nodes are connected in a continuous web
    const edges = new Map<string, { i: number; j: number; dist: number }>();
    const addEdge = (i: number, j: number) => {
      const u = Math.min(i, j);
      const v = Math.max(i, j);
      const key = `${u}_${v}`;
      if (!edges.has(key)) {
        const dist = Math.hypot(positions[u].x - positions[v].x, positions[u].y - positions[v].y);
        edges.set(key, { i: u, j: v, dist });
      }
    };

    // A) Connect along the horizontal chain to guarantee the whole network is ONE continuous connected system
    for (let i = 0; i < positions.length - 1; i++) {
      addEdge(i, i + 1);
    }

    // B) Also connect to neighboring nodes (e.g. i+2, i+3) if within distance to form rich mesh triangles
    const maxMeshDist = width < 640 ? 160 : 150;
    for (let i = 0; i < positions.length; i++) {
      for (let step = 2; step <= 3; step++) {
        const j = i + step;
        if (j < positions.length) {
          const dist = Math.hypot(positions[i].x - positions[j].x, positions[i].y - positions[j].y);
          if (dist < maxMeshDist) {
            addEdge(i, j);
          }
        }
      }
    }

    // 4. Draw Connecting Lines (Clearly visible, crisp, brand teal)
    ctx.lineWidth = width < 640 ? 1.7 : 2.0;
    edges.forEach(({ i, j, dist }) => {
      // Strong, high-visibility opacity (0.42 to 0.85)
      const factor = Math.max(0, 1 - dist / 180);
      const alpha = Math.max(0.42, Math.min(0.85, 0.42 + factor * 0.43));

      ctx.strokeStyle = `rgba(75, 155, 154, ${alpha.toFixed(2)})`;
      ctx.beginPath();
      ctx.moveTo(positions[i].x, positions[i].y);
      ctx.lineTo(positions[j].x, positions[j].y);
      ctx.stroke();
    });

    // 5. Draw Person-Nodes on top of connection lines
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const pos = positions[i];
      const isTeal = node.theme === "teal";
      const primaryColor = isTeal ? "#84c0bf" : "#2f3436";
      const ringColor = isTeal ? "rgba(132, 192, 191, 0.6)" : "rgba(47, 52, 54, 0.5)";

      // Outer concentric ring
      ctx.strokeStyle = ringColor;
      ctx.lineWidth = 1.4;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, node.radius + 4.5, 0, Math.PI * 2);
      ctx.stroke();

      // Node background (solid white circle)
      ctx.fillStyle = "#ffffff";
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, node.radius, 0, Math.PI * 2);
      ctx.fill();

      // Node border
      ctx.strokeStyle = primaryColor;
      ctx.lineWidth = 1.7;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, node.radius, 0, Math.PI * 2);
      ctx.stroke();

      // Person silhouette icon
      const scale = node.radius * 0.52;
      ctx.fillStyle = primaryColor;

      // Head
      ctx.beginPath();
      ctx.arc(pos.x, pos.y - scale * 0.34, scale * 0.36, 0, Math.PI * 2);
      ctx.fill();

      // Torso / shoulders
      ctx.beginPath();
      ctx.arc(
        pos.x,
        pos.y + scale * 0.8,
        scale * 0.68,
        Math.PI * 1.18,
        Math.PI * 1.82,
        false
      );
      ctx.fill();
    }

    animationFrameId = requestAnimationFrame(render);
  };

  render();

  return () => {
    container.removeEventListener("mousemove", handleMouseMove);
    container.removeEventListener("mouseleave", handleMouseLeave);
    window.removeEventListener("resize", handleResize);
    cancelAnimationFrame(animationFrameId);
  };
}


export default function Community() {
  const t = useTranslations("community");
  const topContainerRef = useRef<HTMLDivElement>(null);
  const topCanvasRef = useRef<HTMLCanvasElement>(null);

  const bottomContainerRef = useRef<HTMLDivElement>(null);
  const bottomCanvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    let cleanTop = () => {};
    let cleanBottom = () => {};

    if (topCanvasRef.current && topContainerRef.current) {
      cleanTop = initCanvasNetwork(topCanvasRef.current, topContainerRef.current);
    }

    if (bottomCanvasRef.current && bottomContainerRef.current) {
      cleanBottom = initCanvasNetwork(
        bottomCanvasRef.current,
        bottomContainerRef.current
      );
    }

    return () => {
      cleanTop();
      cleanBottom();
    };
  }, []);

  return (
    <section
      id="community"
      className="relative scroll-mt-16 overflow-hidden bg-white py-6 md:py-10"
    >
      {/* 1. TOP ANIMATION BAND: Dispersed across entire screen width */}
      <div
        ref={topContainerRef}
        className="relative h-44 w-full overflow-hidden sm:h-52 md:h-60"
        aria-hidden="true"
      >
        <canvas
          ref={topCanvasRef}
          className="pointer-events-auto absolute inset-0 h-full w-full"
        />
        {/* Subtle transition into the white text area */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* 2. CENTER CONTENT: 100% free and clear for effortless reading */}
      <div className="relative z-10 mx-auto max-w-4xl px-5 py-6 text-center sm:px-6 md:py-10 lg:px-8">
        {/* Title: verde azulado */}
        <h2 className="text-2xl font-bold tracking-tight text-teal break-words sm:text-3xl md:text-4xl lg:text-5xl">
          {t("title")}
        </h2>

        <div className="mt-6 flex flex-col items-center space-y-6 md:mt-12 md:space-y-9">
          {/* Paragraph 1: gris de la paleta */}
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-dark break-words sm:text-base md:text-lg lg:text-xl">
            {t("p1")}
          </p>

          {/* Paragraph 2: verde azulado */}
          <p className="max-w-3xl text-sm font-bold leading-relaxed text-teal break-words sm:text-base md:text-lg lg:text-xl">
            {t("p2")}
          </p>

          {/* Paragraph 3: gris de la paleta */}
          <p className="max-w-3xl text-sm font-medium leading-relaxed text-dark break-words sm:text-base md:text-lg lg:text-xl">
            {t("p3")}
          </p>

          {/* Paragraph 4: verde azulado */}
          <p className="max-w-3xl text-sm font-bold leading-relaxed text-teal break-words sm:text-base md:text-lg lg:text-xl">
            {t("p4")}
          </p>
        </div>
      </div>

      {/* 3. BOTTOM ANIMATION BAND: Dispersed across entire screen width */}
      <div
        ref={bottomContainerRef}
        className="relative h-44 w-full overflow-hidden sm:h-52 md:h-60"
        aria-hidden="true"
      >
        {/* Subtle transition from white text area into bottom canvas */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-gradient-to-b from-white to-transparent" />
        <canvas
          ref={bottomCanvasRef}
          className="pointer-events-auto absolute inset-0 h-full w-full"
        />
      </div>
    </section>
  );
}
