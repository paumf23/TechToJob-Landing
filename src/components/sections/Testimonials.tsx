import Image from "next/image";
import { useTranslations } from "next-intl";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  { key: "javier", initials: "JM", avatar: null },
  { key: "marcos", initials: "MV", avatar: null },
  { key: "ana", initials: "AR", avatar: null },
  { key: "sofia", initials: "SL", avatar: null },
] as const;

const STAT_KEYS = [
  "members",
  "rating",
  "satisfaction",
  "feedback",
  "confidence",
] as const;

export default function Testimonials() {
  const t = useTranslations("testimonials");

  return (
    <section
      id="testimonials"
      className="scroll-mt-16 overflow-hidden bg-dark py-14 sm:py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Section Title & Subtitle */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-teal break-words sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-sm font-medium leading-relaxed text-gray-300 break-words sm:mt-5 sm:text-base md:text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* 2x2 Grid of Testimonial Cards with uniform height and calibrated vertical gap */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:mt-12 sm:gap-y-12 md:mt-16 md:grid-cols-2 md:auto-rows-fr md:gap-x-7 md:gap-y-12 lg:gap-x-8 lg:gap-y-14">
          {TESTIMONIALS.map((item) => {
            const name = t(`items.${item.key}.name`);
            const role = t(`items.${item.key}.role`);
            const quote = t(`items.${item.key}.quote`);

            return (
              <article
                key={item.key}
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
                    {/* Top: Avatar + Logo + Name & Role + LinkedIn */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-3">
                        {/* Developer Avatar (ready for photo) */}
                        <div className="relative flex h-11 w-11 sm:h-12 sm:w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-teal/40 bg-teal/15 font-bold text-teal-dark text-sm sm:text-base shadow-inner">
                          {item.avatar ? (
                            <Image
                              src={item.avatar}
                              alt={name}
                              fill
                              className="rounded-full object-cover"
                            />
                          ) : (
                            <span>{item.initials}</span>
                          )}
                        </div>

                        {/* Generic Logo + Name & Role */}
                        <div className="flex flex-col">
                          <div className="flex items-center gap-1.5">
                            <Image
                              src="/SimboloPositivo.svg"
                              alt=""
                              width={18}
                              height={18}
                              className="h-4 w-4 sm:h-4.5 sm:w-4.5 flex-shrink-0"
                              aria-hidden="true"
                            />
                            <h3 className="text-base font-bold text-teal-dark sm:text-lg leading-tight">
                              {name}
                            </h3>
                          </div>
                          <span className="text-xs font-semibold text-teal-dark/80 sm:text-sm mt-0.5">
                            {role}
                          </span>
                        </div>
                      </div>

                      {/* LinkedIn link badge */}
                      <a
                        href="https://www.linkedin.com/company/techtojob/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-full border border-teal-dark/25 bg-teal/10 px-2.5 py-1 text-xs font-semibold text-teal-dark transition-colors duration-200 hover:bg-teal/25 hover:text-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50 flex-shrink-0 mt-0.5"
                        aria-label={`LinkedIn de ${name}`}
                      >
                        <svg
                          className="h-3.5 w-3.5 fill-current flex-shrink-0"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28Z" />
                        </svg>
                        <span>LinkedIn</span>
                      </a>
                    </div>

                    {/* 5-star rating row in real golden amber */}
                    <div className="mt-3.5 flex items-center gap-1" aria-label="5 de 5 estrellas">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-400 text-amber-400 sm:h-4.5 sm:w-4.5"
                          aria-hidden="true"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <blockquote className="mt-3 text-sm font-medium leading-relaxed text-dark break-words sm:text-base sm:leading-relaxed">
                      &ldquo;{quote}&rdquo;
                    </blockquote>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Subtle Integrated Metrics Bar */}
        <div className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm sm:mt-16 sm:p-8 lg:mt-20 lg:p-8">
          {/* Header Phrase */}
          <div className="text-center">
            <h3 className="text-lg font-bold text-teal sm:text-xl md:text-2xl">
              {t("stats.heading")}
            </h3>
          </div>

          <div className="mt-6 sm:mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0 lg:divide-x lg:divide-white/10">
            {STAT_KEYS.map((key, index) => (
              <div
                key={key}
                className={`group cursor-default flex flex-col items-center justify-start text-center px-4 py-3 sm:py-4 lg:px-3 rounded-xl transition-all duration-300 hover:bg-white/[0.02] ${
                  index === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <span className="inline-block text-3xl font-extrabold tracking-tight text-teal sm:text-4xl lg:text-3xl xl:text-4xl transition-all duration-300 ease-out group-hover:scale-110 group-hover:text-teal-light group-hover:drop-shadow-[0_0_20px_rgba(132,192,191,0.85)]">
                  {t(`stats.items.${key}.value`)}
                </span>
                <span className="mt-2 text-sm font-bold text-white leading-snug transition-colors duration-300 group-hover:text-teal-light">
                  {t(`stats.items.${key}.label`)}
                </span>
                <p className="mt-1.5 text-xs text-gray-300 leading-relaxed max-w-[220px] transition-colors duration-300 group-hover:text-white">
                  {t(`stats.items.${key}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
