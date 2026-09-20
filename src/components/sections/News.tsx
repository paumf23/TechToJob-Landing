import { useTranslations } from "next-intl";

const NEWS_KEYS = ["item1", "item2", "item3"] as const;

export default function News() {
  const t = useTranslations("newsSection");

  return (
    <section
      id="news"
      className="scroll-mt-16 overflow-hidden bg-teal py-14 sm:py-16 md:py-24 lg:py-28"
    >
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Subtle ambient depth */}
        <div
          className="pointer-events-none absolute -top-24 -left-20 h-72 w-72 rounded-full bg-teal-dark/20 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-teal-dark/20 blur-3xl"
          aria-hidden="true"
        />

        {/* Section Header */}
        <div className="relative z-10 mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-dark break-words sm:text-4xl md:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-3 text-base font-medium leading-relaxed text-dark/85 break-words sm:mt-4 sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* 3 Columns Grid of News Cards */}
        <div className="relative z-10 mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:gap-7 md:mt-16 md:grid-cols-3 lg:gap-8">
          {NEWS_KEYS.map((key) => {
            const tag = t(`items.${key}.tag`);
            const title = t(`items.${key}.title`);
            const description = t(`items.${key}.description`);

            return (
              <article
                key={key}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-white/20 bg-dark/85 p-6 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.2),0_12px_28px_-6px_rgba(0,0,0,0.3)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 hover:border-white/35 hover:bg-dark/90 hover:shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.3),0_20px_35px_-8px_rgba(0,0,0,0.35)] sm:rounded-3xl sm:p-7 lg:p-8"
              >
                {/* Diagonal glass reflection sheen */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-90"
                  aria-hidden="true"
                />

                <div className="relative z-10">
                  {/* Category & Date */}
                  <span className="text-xs font-bold uppercase tracking-wider text-teal sm:text-sm">
                    {tag}
                  </span>

                  {/* Title */}
                  <h3 className="mt-2.5 text-lg font-bold leading-snug text-white break-words sm:text-xl sm:leading-snug">
                    {title}
                  </h3>

                  {/* Divider line as shown in wireframe */}
                  <div
                    className="my-4 w-full border-b border-white/15 sm:my-5"
                    aria-hidden="true"
                  />

                  {/* Description */}
                  <p className="text-sm font-normal leading-relaxed text-gray-200 break-words sm:text-base sm:leading-relaxed">
                    {description}
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
