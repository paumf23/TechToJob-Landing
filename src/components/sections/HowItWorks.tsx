"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { useTranslations } from "next-intl";

const emptySubscribe = () => () => {};

const STEPS = ["step1", "step2", "step3", "step4"] as const;

export default function HowItWorks() {
  const t = useTranslations("howItWorks");
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const [isDesktop, setIsDesktop] = useState(false);
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);
  const [desktopVisibleCount, setDesktopVisibleCount] = useState(0);
  const [mobileVisible, setMobileVisible] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const maxVisibleRef = useRef(0);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  // Desktop: scroll-driven progressive reveal via sticky container
  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      // If all cards are already visible, no need to do anything
      if (maxVisibleRef.current >= 4) return;
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const navOffset = 64; // height of sticky header
      const totalScrollable = rect.height - window.innerHeight;

      // Only activate when user reaches the section in viewport
      if (rect.top > window.innerHeight * 0.7) {
        return;
      }

      if (totalScrollable <= 0) {
        maxVisibleRef.current = 4;
        setDesktopVisibleCount(4);
        return;
      }

      const scrolled = navOffset - rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);

      let target = 1;
      if (progress >= 0.75) {
        target = 4;
      } else if (progress >= 0.45) {
        target = 3;
      } else if (progress >= 0.15) {
        target = 2;
      } else {
        target = 1;
      }

      // ONLY increase, NEVER decrease
      if (target > maxVisibleRef.current) {
        maxVisibleRef.current = target;
        setDesktopVisibleCount(target);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isDesktop]);

  // Mobile: reveal each card with glow as it enters the viewport
  useEffect(() => {
    if (isDesktop) return;

    const observers: IntersectionObserver[] = [];

    cardRefs.current.forEach((el, index) => {
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setMobileVisible((prev) => {
              const updated = [...prev];
              updated[index] = true;
              return updated;
            });
          }
        },
        { threshold: 0.2 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [isDesktop]);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative bg-white md:h-[260vh]"
    >
      <div className="flex flex-col justify-center py-14 md:sticky md:top-16 md:min-h-[calc(100vh-4rem)] md:py-16">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-teal md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
            {STEPS.map((stepKey, index) => {
              const isVisible = mounted
                ? isDesktop
                  ? index < desktopVisibleCount
                  : mobileVisible[index]
                : true;

              return (
                <article
                  key={stepKey}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  className={`relative flex flex-col items-center overflow-hidden rounded-2xl border border-white/15 bg-dark p-6 text-center shadow-xl transition-all duration-700 ease-out sm:p-7 ${
                    isVisible
                      ? "translate-y-0 opacity-100 scale-100"
                      : "translate-y-8 opacity-0 scale-95 pointer-events-none"
                  }`}
                  style={{ isolation: "isolate" }}
                >
                  {/* Thick diffused diagonal glow sweep */}
                  {isVisible && (
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
      </div>
    </section>
  );
}
