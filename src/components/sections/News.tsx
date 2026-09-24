"use client";

import { useTranslations } from "next-intl";
import {
  Trophy,
  Clock,
  ArrowRight,
  FileText,
  XCircle,
  Terminal,
  CheckCircle2,
  GitBranch,
  Flame,
  Rocket,
  MessageSquare,
} from "lucide-react";
import { DISCORD_URL } from "@/lib/constants";

export default function News() {
  const t = useTranslations("newsSection");

  return (
    <section
      id="news"
      className="relative scroll-mt-20 overflow-hidden py-14 sm:py-16 md:py-24 lg:py-28"
      style={{
        background:
          "radial-gradient(ellipse 85% 65% at 50% 25%, rgba(163, 212, 211, 0.45) 0%, rgba(132, 192, 191, 1) 55%, rgba(106, 173, 172, 1) 100%)",
      }}
    >
      {/* 1. Visible Tech Blueprint Grid (Idea 1) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(47, 52, 54, 0.14) 1px, transparent 1px), linear-gradient(to bottom, rgba(47, 52, 54, 0.14) 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
        aria-hidden="true"
      />

      {/* 2. Visible Dot Matrix Pattern at intersections (Idea 2) */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(47, 52, 54, 0.32) 1.5px, transparent 1.5px)",
          backgroundSize: "36px 36px",
          backgroundPosition: "0 0",
        }}
        aria-hidden="true"
      />

      {/* 3. Radial Lighting Spotlight & Ambient Blobs */}
      <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 h-96 w-[45rem] rounded-full bg-white/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-20 h-80 w-80 rounded-full bg-teal-dark/25 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -right-20 h-80 w-80 rounded-full bg-teal-dark/25 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark break-words sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-base font-bold leading-relaxed text-dark break-words sm:mt-4 sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* News Content */}
        <div className="relative z-10 mt-10 sm:mt-12 md:mt-16 space-y-6 sm:space-y-8">
          {/* 1. FEATURED ARTICLE: Noticia 1 (Landing & Torneo #02) */}
          <article className="group relative overflow-hidden rounded-3xl border border-white/20 bg-dark/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/35 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]">
            {/* Diagonal glass reflection sheen */}
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90"
              aria-hidden="true"
            />

            <div className="relative z-10 grid grid-cols-1 gap-8 items-center lg:grid-cols-12 lg:gap-10">
              {/* Left Info Column */}
              <div className="flex flex-col justify-between h-full lg:col-span-6 xl:col-span-6">
                <div>
                  {/* Badges row */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/40 bg-teal/20 px-3 py-1 text-xs font-bold text-teal">
                      <Trophy size={13} className="text-teal" />
                      {t("featuredBadge")}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-medium text-gray-300">
                      <Clock size={12} />
                      {t("readTime")}
                    </span>
                  </div>

                  {/* Category & Date */}
                  <span className="mt-3.5 block text-xs font-bold uppercase tracking-wider text-teal sm:text-sm">
                    {t("items.item1.tag")}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2 text-xl sm:text-2xl lg:text-3xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-teal-light">
                    {t("items.item1.title")}
                  </h3>

                  {/* Description */}
                  <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-gray-200">
                    {t("items.item1.description")}
                  </p>
                </div>

                {/* CTA Link */}
                <div className="mt-6 pt-5 border-t border-white/10">
                  <a
                    href={DISCORD_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-teal transition-all duration-300 group-hover:text-teal-light"
                  >
                    <span>{t("readMore")}</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1.5"
                    />
                  </a>
                </div>
              </div>

              {/* Right Visual Header: Opción C (Podio del Torneo) */}
              <div className="lg:col-span-6 xl:col-span-6">
                <div className="relative rounded-2xl border border-white/15 bg-black/40 p-4 sm:p-6 overflow-hidden">
                  {/* Ambient teal glow behind winner */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-40 w-40 rounded-full bg-teal/20 blur-3xl pointer-events-none" />

                  <div className="relative z-10 flex items-end justify-center gap-2 sm:gap-3">
                    {/* 2nd place (Finalista B) */}
                    <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center opacity-70">
                      <span className="text-[11px] font-bold text-gray-300">
                        🥈 2do Lugar
                      </span>
                      <div className="mt-2 h-1.5 w-12 mx-auto bg-white/20 rounded-full" />
                      <div className="mt-1.5 h-1.5 w-8 mx-auto bg-white/10 rounded-full" />
                      <div className="mt-3 py-1 rounded bg-white/5 text-[10px] font-mono text-gray-400">
                        Proyecto #08
                      </div>
                    </div>

                    {/* 1st place (Winner - Elevated) */}
                    <div className="flex-[1.3] -translate-y-2 rounded-xl border-2 border-teal/60 bg-dark-light/95 p-4 text-center shadow-xl shadow-teal/15 ring-1 ring-teal/30">
                      <div className="inline-flex items-center gap-1 rounded-full bg-teal/25 border border-teal/40 px-2 py-0.5 text-[10px] font-bold text-teal">
                        <Trophy size={11} className="text-teal" />
                        <span>1er Lugar · Ganador</span>
                      </div>
                      <div className="mt-2 text-xs sm:text-sm font-bold text-white leading-tight">
                        TechToJob Landing
                      </div>
                      <div className="text-[11px] text-teal font-mono mt-0.5">
                        techtojob.com 🚀
                      </div>
                      <div className="mt-2.5 flex flex-wrap justify-center gap-1">
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-teal/15 text-teal border border-teal/30">
                          Next.js
                        </span>
                        <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-teal/15 text-teal border border-teal/30">
                          Tailwind
                        </span>
                      </div>
                      <div className="mt-2.5 text-[10px] font-medium text-emerald-400 bg-emerald-500/10 rounded py-0.5 border border-emerald-500/20">
                        ● En producción
                      </div>
                    </div>

                    {/* 3rd place (Finalista C) */}
                    <div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center opacity-70">
                      <span className="text-[11px] font-bold text-gray-300">
                        🥉 3er Lugar
                      </span>
                      <div className="mt-2 h-1.5 w-12 mx-auto bg-white/20 rounded-full" />
                      <div className="mt-1.5 h-1.5 w-8 mx-auto bg-white/10 rounded-full" />
                      <div className="mt-3 py-1 rounded bg-white/5 text-[10px] font-mono text-gray-400">
                        Proyecto #14
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* 2. SECONDARY ARTICLES (2-Column Grid) */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
            {/* Card 2: Sector Tech (Opción A: CV vs Código) */}
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-dark/90 p-6 sm:p-7 lg:p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/35 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]">
              {/* Glass sheen */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90"
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Visual Header 2: Contraste CV en papel vs Código en vivo */}
                <div className="rounded-2xl border border-white/15 bg-black/40 p-3 sm:p-4 mb-5 overflow-hidden">
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 items-center">
                    {/* Left: CV tradicional descartado */}
                    <div className="rounded-xl border border-rose-500/20 bg-rose-500/[0.05] p-2.5 text-center flex flex-col justify-between h-32">
                      <div>
                        <div className="flex items-center justify-between text-[10px] text-gray-400">
                          <span className="flex items-center gap-1 font-medium">
                            <FileText size={10} /> CV en PDF
                          </span>
                          <XCircle size={12} className="text-rose-400" />
                        </div>
                        <div className="mt-2.5 space-y-1.5">
                          <div className="h-1.5 w-full bg-white/15 rounded" />
                          <div className="h-1.5 w-4/5 bg-white/15 rounded" />
                          <div className="h-1.5 w-3/5 bg-white/10 rounded" />
                        </div>
                      </div>
                      <div className="rounded bg-rose-500/20 border border-rose-500/30 py-1 px-1 text-[9px] font-bold text-rose-300">
                        Filtro ATS: Descartado
                      </div>
                    </div>

                    {/* Right: Código práctico verificado */}
                    <div className="rounded-xl border border-teal/40 bg-teal/[0.08] p-2.5 text-center flex flex-col justify-between h-32 shadow-sm shadow-teal/10">
                      <div>
                        <div className="flex items-center justify-between text-[10px] text-teal">
                          <span className="flex items-center gap-1 font-mono">
                            <Terminal size={10} /> código.ts
                          </span>
                          <CheckCircle2 size={12} className="text-emerald-400" />
                        </div>
                        <div className="mt-2 font-mono text-left text-[9px] text-teal-light/90 bg-black/40 p-1.5 rounded border border-white/5 overflow-hidden">
                          <code>function solve() &#123;</code>
                          <code className="block text-emerald-400 font-bold">  return true;</code>
                          <code>&#125;</code>
                        </div>
                      </div>
                      <div className="rounded bg-emerald-500/20 border border-emerald-500/30 py-1 px-1 text-[9px] font-bold text-emerald-300">
                        ✓ Habilidad demostrada
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal sm:text-sm">
                    {t("items.item2.tag")}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-gray-300">
                    <Clock size={12} />
                    {t("readTime")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-2 text-lg sm:text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-teal-light">
                  {t("items.item2.title")}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-200">
                  {t("items.item2.description")}
                </p>
              </div>

              {/* CTA Link */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal transition-all duration-300 group-hover:text-teal-light"
                >
                  <span>{t("readMore")}</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </a>
              </div>
            </article>

            {/* Card 3: Construir en Público (Opción A: Feed Build in Public) */}
            <article className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/20 bg-dark/90 p-6 sm:p-7 lg:p-8 shadow-xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-white/35 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.4)]">
              {/* Glass sheen */}
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90"
                aria-hidden="true"
              />

              <div className="relative z-10">
                {/* Visual Header 3: Feed de Build in Public */}
                <div className="rounded-2xl border border-white/15 bg-black/40 p-3 sm:p-4 mb-5 overflow-hidden">
                  {/* Post header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="h-7 w-7 rounded-full bg-teal/20 border border-teal/40 flex items-center justify-center text-[10px] font-bold text-teal">
                        AD
                      </div>
                      <div className="text-left">
                        <span className="block text-xs font-bold text-white leading-tight">
                          Alex Dev
                        </span>
                        <span className="text-[10px] text-gray-400">
                          hace 2h · en Discord
                        </span>
                      </div>
                    </div>
                    <span className="rounded-full bg-teal/15 border border-teal/30 px-2 py-0.5 text-[10px] font-mono font-bold text-teal">
                      #build-in-public
                    </span>
                  </div>

                  {/* Post body snippet */}
                  <div className="mt-2.5 text-left text-xs text-gray-200 leading-snug bg-white/[0.03] p-2 rounded-lg border border-white/10">
                    <p className="font-semibold text-white text-[11px]">
                      📌 Day 12: Implementando auth & filtros
                    </p>
                    <div className="mt-1 font-mono text-[9px] text-teal flex items-center gap-1.5">
                      <GitBranch size={10} />
                      <span>git commit: 14 tests passing</span>
                    </div>
                  </div>

                  {/* Reactions footer */}
                  <div className="mt-2.5 flex items-center gap-1.5">
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-medium text-gray-300">
                      <Flame size={10} className="text-orange-400" /> 18
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-medium text-gray-300">
                      <Rocket size={10} className="text-teal" /> 24
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-medium text-gray-300">
                      <MessageSquare size={10} className="text-blue-400" /> 14 feedback
                    </span>
                  </div>
                </div>

                {/* Metadata */}
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-teal sm:text-sm">
                    {t("items.item3.tag")}
                  </span>
                  <span className="flex items-center gap-1 text-xs font-medium text-gray-300">
                    <Clock size={12} />
                    {t("readTime")}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mt-2 text-lg sm:text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-teal-light">
                  {t("items.item3.title")}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-gray-200">
                  {t("items.item3.description")}
                </p>
              </div>

              {/* CTA Link */}
              <div className="relative z-10 mt-6 pt-4 border-t border-white/10">
                <a
                  href={DISCORD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-teal transition-all duration-300 group-hover:text-teal-light"
                >
                  <span>{t("readMore")}</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  />
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
