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
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
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
        <h2 className="text-center text-3xl font-bold text-teal md:text-4xl lg:text-5xl">
          {t("title")}
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {STEPS.map((stepKey, index) => {
            return (
              <article
                key={stepKey}
                className={`relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/15 bg-dark p-6 text-center shadow-xl transition-all duration-700 ease-out sm:p-7 ${
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
                  {/* Step indicator pill badge */}
                  <div className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-teal/30 bg-teal/15 px-3 py-1 text-xs font-mono font-bold text-teal">
                    <span>0{index + 1}</span>
                  </div>

                  <h3 className="text-center text-lg font-bold text-teal md:text-xl">
                    {t(`${stepKey}.title`)}
                  </h3>
                  <p className="mt-3 text-center text-sm leading-relaxed text-gray-200">
                    {t(`${stepKey}.description`)}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
