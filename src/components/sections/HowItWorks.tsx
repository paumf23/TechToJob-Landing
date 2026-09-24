"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";

const emptySubscribe = () => () => {};

const STEPS = ["step1", "step2", "step3", "step4"] as const;

export default function HowItWorks() {
  const t = useTranslations("howItWorks");
  const sectionRef = useRef<HTMLElement>(null);

  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
        rootMargin: "0px 0px -30px 0px",
      }
    );

    observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const cardsVisible = mounted ? isVisible : true;

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="scroll-mt-16 bg-white py-14 sm:py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header Block: Title & Subtitle */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base font-medium leading-relaxed text-dark/85 break-words sm:mt-5 sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* Desktop-only Temporal Trajectory Line (Visible on lg and above) */}
        <div className="hidden lg:block relative mt-14 mb-12">
          {/* Continuous gradient connector bar on desktop */}
          <div
            className="absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-teal/30 via-teal to-teal/30"
            aria-hidden="true"
          >
            {/* Animated glowing streak along the trajectory */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-teal to-transparent opacity-75 blur-[1px] animate-pulse" />
          </div>

          {/* 4 Milestones aligned with the 4 columns below */}
          <div className="grid grid-cols-4 gap-6">
            {STEPS.map((stepKey, index) => (
              <div
                key={`desktop-timeline-${stepKey}`}
                className="group relative flex flex-col items-center text-center"
              >
                {/* Milestone Node */}
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-teal bg-white shadow-md transition-all duration-300 group-hover:scale-110 group-hover:border-teal-dark group-hover:bg-teal group-hover:shadow-teal/25">
                  <span className="font-mono text-sm font-bold text-teal transition-colors duration-300 group-hover:text-dark">
                    0{index + 1}
                  </span>
                  {/* Subtle active pulse dot */}
                  <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-teal" />
                  </span>
                </div>

                {/* Phase Pill */}
                <div className="mt-2.5">
                  <span className="inline-block rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-semibold text-teal tracking-wide">
                    {t(`timeline.${stepKey}.time`)}
                  </span>
                </div>

                {/* Milestone Label */}
                <p className="mt-1 text-xs font-bold text-dark sm:text-sm">
                  {t(`timeline.${stepKey}.milestone`)}
                </p>

                {/* Downward indicator pointing to card below on desktop */}
                <div
                  className="mt-3 flex items-center justify-center text-teal/40 opacity-30 transition-all duration-300 group-hover:scale-125 group-hover:text-teal-dark group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <svg
                    className="h-7 w-7 transition-transform duration-300 group-hover:animate-bounce"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2.5}
                      d="M19 14l-7 7m0 0l-7-7m7 7V3"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cards Grid: on mobile/tablet (< lg) each card has its milestone header directly above it */}
        <div className="mt-10 sm:mt-12 lg:mt-0 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((stepKey, index) => {
            return (
              <div key={stepKey} className="flex flex-col">
                {/* Mobile / Tablet Milestone Header (< lg) */}
                <div className="lg:hidden mb-3.5 flex flex-col items-center text-center">
                  {/* Milestone Node */}
                  <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 border-teal bg-white shadow-md">
                    <span className="font-mono text-sm font-bold text-teal">
                      0{index + 1}
                    </span>
                    <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-teal" />
                    </span>
                  </div>

                  {/* Phase Pill */}
                  <div className="mt-2">
                    <span className="inline-block rounded-full bg-teal/10 px-2.5 py-0.5 text-xs font-semibold text-teal tracking-wide">
                      {t(`timeline.${stepKey}.time`)}
                    </span>
                  </div>

                  {/* Milestone Label */}
                  <p className="mt-1 text-xs font-bold text-dark">
                    {t(`timeline.${stepKey}.milestone`)}
                  </p>

                  {/* Downward indicator arrow pointing into the card */}
                  <div className="mt-2 text-teal" aria-hidden="true">
                    <svg
                      className="h-5 w-5 animate-bounce"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </div>
                </div>

                {/* Card Article */}
                <article
                  className={`relative flex flex-1 flex-col items-center overflow-hidden rounded-2xl border border-white/15 bg-dark p-6 text-center shadow-xl transition-all duration-700 ease-out sm:p-7 ${
                    cardsVisible
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-8 opacity-0 scale-95 pointer-events-none"
                  }`}
                  style={{ isolation: "isolate" }}
                >
                  {/* Thick diffused diagonal glow sweep */}
                  {cardsVisible && (
                    <div
                      key={`glow-${stepKey}`}
                      className="pointer-events-none absolute inset-0 z-20 overflow-hidden rounded-2xl mix-blend-screen"
                      aria-hidden="true"
                    >
                      <div className="animate-card-glow absolute -inset-[100%] bg-card-glow blur-md" />
                    </div>
                  )}

                  <div className="relative z-10 flex flex-col items-center">
                    <h3 className="text-center text-lg font-bold text-teal md:text-xl">
                      {t(`${stepKey}.title`)}
                    </h3>
                    <p className="mt-3 text-center text-sm leading-relaxed text-gray-200">
                      {t(`${stepKey}.description`)}
                    </p>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* Bottom Section: Left Text + Right Teal Question Card */}
        <div className="mt-14 sm:mt-16 md:mt-20">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
            {/* Left Column: Descriptive text */}
            <div className="text-left lg:col-span-6 xl:col-span-7">
              <p className="text-base font-medium leading-relaxed text-dark/85 break-words sm:text-lg lg:text-xl">
                {t("bottomText")}
              </p>
            </div>

            {/* Right Column: Teal Question Card */}
            <div className="lg:col-span-6 xl:col-span-5">
              <div className="relative overflow-hidden rounded-3xl border border-teal-dark/30 bg-teal p-7 text-left shadow-xl shadow-teal/20 transition-all duration-300 hover:shadow-2xl hover:shadow-teal/30 sm:p-9">
                {/* Ambient glow highlight inside card */}
                <div
                  className="pointer-events-none absolute -top-12 -right-12 h-36 w-36 rounded-full bg-white/30 blur-2xl"
                  aria-hidden="true"
                />
                <div
                  className="pointer-events-none absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-teal-dark/25 blur-2xl"
                  aria-hidden="true"
                />

                {/* Question text only - no link, no arrow */}
                <h3 className="relative z-10 text-xl font-bold text-dark sm:text-2xl leading-snug">
                  {t("ctaQuestion")}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
