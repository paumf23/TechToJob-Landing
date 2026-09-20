import Image from "next/image";
import { useTranslations } from "next-intl";

const TESTIMONIAL_KEYS = ["javier", "marcos", "ana", "sofia"] as const;

export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section
      id="testimonials"
      className="scroll-mt-16 overflow-hidden bg-dark py-14 sm:py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="text-center text-3xl font-bold tracking-tight text-teal break-words sm:text-4xl md:text-5xl">
          {t("title")}
        </h2>

        {/* 2x2 Grid of Testimonial Cards with uniform height and calibrated vertical gap */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:mt-12 sm:gap-y-12 md:mt-16 md:grid-cols-2 md:auto-rows-fr md:gap-x-7 md:gap-y-12 lg:gap-x-8 lg:gap-y-14">
          {TESTIMONIAL_KEYS.map((key) => {
            const name = t(`items.${key}.name`);
            const role = t(`items.${key}.role`);
            const quote = t(`items.${key}.quote`);

            return (
              <article
                key={key}
                className="group relative flex h-full flex-col rounded-2xl transition-all duration-300 hover:-translate-y-1.5 sm:rounded-3xl"
              >
                {/* Outer glowing halo of the border beam for maximum visibility */}
                <div
                  className="pointer-events-none absolute -inset-1.5 overflow-hidden rounded-[inherit] opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                >
                  <div className="animate-border-beam absolute -inset-[200%] m-auto bg-border-beam" />
                </div>

                {/* Container with top/side borders (4px) and thick bottom shelf (18px) for the border beam */}
                <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[inherit] p-[3.5px] pb-[16px] shadow-md transition-shadow duration-300 group-hover:shadow-2xl sm:p-[4px] sm:pb-[18px]">
                  {/* Static border when not hovering */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[inherit] border border-teal/20 transition-opacity duration-300 group-hover:opacity-0"
                    aria-hidden="true"
                  />

                  {/* Continuous teal border beam traveling the entire perimeter on hover */}
                  <div
                    className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden="true"
                  >
                    <div className="animate-border-beam absolute -inset-[200%] m-auto bg-border-beam" />
                  </div>

                  {/* Card Body */}
                  <div className="relative z-10 flex h-full w-full flex-1 flex-col rounded-[calc(1rem-3px)] bg-white p-6 sm:rounded-[calc(1.5rem-3px)] sm:p-7 lg:p-8">
                  {/* Top: Logo + Name & Role */}
                  <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1">
                    <Image
                      src="/SimboloPositivo.svg"
                      alt=""
                      width={24}
                      height={24}
                      className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <h3 className="text-lg font-bold text-teal-dark sm:text-xl">
                      {name}
                    </h3>
                    <span className="text-teal-dark/60 font-medium">—</span>
                    <span className="text-sm font-semibold text-teal-dark/85 sm:text-base">
                      {role}
                    </span>
                  </div>

                  {/* LinkedIn link badge */}
                  <div className="mt-1">
                    <a
                      href="https://www.linkedin.com/company/techtojob/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-dark transition-colors duration-200 hover:text-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50 rounded sm:text-sm"
                      aria-label={`LinkedIn de ${name}`}
                    >
                      <svg
                        className="h-3.5 w-3.5 fill-current flex-shrink-0"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                      </svg>
                      <span>linkedin</span>
                    </a>
                  </div>

                  {/* Quote: Palette dark gray with consistent, compact spacing */}
                  <blockquote className="mt-2.5 text-sm font-medium leading-relaxed text-dark break-words sm:mt-3 sm:text-base sm:leading-relaxed">
                    &ldquo;{quote}&rdquo;
                  </blockquote>
                </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
