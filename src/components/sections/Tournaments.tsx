"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";
import {
  Flag,
  Code2,
  CheckCircle2,
  Rocket,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";

const TIMELINE_STEPS = [
  { key: "step1", icon: Flag, tabKey: "01 · Desafío" },
  { key: "step2", icon: Code2, tabKey: "02 · Código" },
  { key: "step3", icon: CheckCircle2, tabKey: "03 · Votación" },
  { key: "step4", icon: Rocket, tabKey: "04 · En vivo" },
] as const;

export default function Tournaments() {
  const t = useTranslations("tournaments");
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-advance carousel every 5s unless hovered
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TIMELINE_STEPS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + TIMELINE_STEPS.length) % TIMELINE_STEPS.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TIMELINE_STEPS.length);
  };

  return (
    <section id="tournaments" className="scroll-mt-16 overflow-hidden bg-teal py-14 sm:py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header content */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-dark/75 sm:text-sm md:text-base">
            {t("title")}
          </span>
          <h2 className="mt-2 text-2xl font-bold tracking-tight text-dark break-words sm:text-3xl md:text-4xl lg:text-5xl">
            {t("subtitle")}
          </h2>
          <p className="mt-5 text-sm font-medium leading-relaxed text-dark/90 break-words sm:mt-6 sm:text-base md:text-lg">
            {t("description1")}
          </p>
          <p className="mt-3 text-sm font-bold leading-relaxed text-dark break-words sm:mt-4 sm:text-base md:text-lg">
            {t("description2")}
          </p>
        </div>

        {/* Visual support: Interactive Carousel Box */}
        <div
          className="relative mt-10 overflow-hidden rounded-3xl bg-dark p-4 shadow-2xl sm:p-8 md:mt-16 md:p-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Ambient glow effects */}
          <div
            className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-teal/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-teal/15 blur-3xl"
            aria-hidden="true"
          />

          {/* Stepper Tabs */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 border-b border-white/10 pb-5 sm:gap-3 sm:pb-6">
            {TIMELINE_STEPS.map((step, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={step.key}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`min-h-[36px] rounded-xl px-3 py-2 text-xs font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal sm:min-h-[40px] sm:px-4 sm:py-2.5 sm:text-sm ${
                    isActive
                      ? "bg-teal text-dark shadow-md"
                      : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white"
                  }`}
                  aria-label={`Ir a ${t(`timeline.${step.key}.title`)}`}
                >
                  <span className="font-mono">0{idx + 1}</span> · {t(`timeline.${step.key}.tab`)}
                </button>
              );
            })}
          </div>

          {/* Carousel Slide Track */}
          <div className="relative z-10 mt-6 w-full overflow-hidden sm:mt-8">
            <div
              className="flex w-full transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {TIMELINE_STEPS.map(({ key, icon: Icon }) => (
                <div key={key} className="w-full min-w-full flex-shrink-0 px-1 sm:px-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-8 md:p-10">
                    <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 lg:grid-cols-12">
                      {/* Left info */}
                      <div className="lg:col-span-7">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal text-dark shadow-md sm:h-12 sm:w-12 sm:rounded-2xl">
                            <Icon size={20} className="sm:size-6" />
                          </div>
                          <span className="rounded-full border border-teal/40 bg-teal/15 px-3 py-1 font-mono text-xs font-bold text-teal">
                            {t(`timeline.${key}.tag`)}
                          </span>
                        </div>

                        <h3 className="mt-4 text-xl font-bold text-white break-words sm:mt-5 sm:text-2xl md:text-3xl">
                          {t(`timeline.${key}.title`)}
                        </h3>

                        <p className="mt-3 text-sm leading-relaxed text-gray-200 break-words sm:mt-4 sm:text-base md:text-lg">
                          {t(`timeline.${key}.description`)}
                        </p>
                      </div>

                      {/* Right highlights card */}
                      <div className="rounded-xl border border-white/10 bg-black/25 p-4 sm:p-6 lg:col-span-5">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-teal">
                          Puntos Clave
                        </h4>
                        <ul className="mt-3 space-y-2.5 sm:mt-4 sm:space-y-3">
                          {[0, 1, 2].map((pIdx) => (
                            <li
                              key={pIdx}
                              className="flex items-start gap-2.5 text-xs text-gray-200 sm:gap-3 sm:text-sm"
                            >
                              <div className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-teal/20 text-teal sm:h-5 sm:w-5">
                                <Check size={10} strokeWidth={3} className="sm:size-3" />
                              </div>
                              <span className="break-words">
                                {t(`timeline.${key}.points.${pIdx}`)}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom navigation controls */}
          <div className="relative z-10 mt-8 flex items-center justify-between pt-2">
            {/* Dots */}
            <div className="flex items-center gap-1 sm:gap-1.5">
              {TIMELINE_STEPS.map((step, idx) => (
                <button
                  key={step.key}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className="group flex h-9 min-w-8 items-center justify-center rounded-full p-1 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                  aria-label={`Slide ${idx + 1}`}
                  aria-current={idx === activeIndex ? "true" : undefined}
                >
                  <span
                    className={`h-3 rounded-full transition-all duration-300 ${
                      idx === activeIndex
                        ? "w-9 bg-teal"
                        : "w-3 bg-white/30 group-hover:bg-white/60"
                    }`}
                  />
                </button>
              ))}
            </div>

            {/* Prev / Next buttons */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-teal hover:bg-teal hover:text-dark hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                aria-label="Fase anterior"
              >
                <ChevronLeft size={24} />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all hover:border-teal hover:bg-teal hover:text-dark hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal"
                aria-label="Siguiente fase"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
