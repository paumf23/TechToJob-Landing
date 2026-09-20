import { useTranslations } from "next-intl";
import { DISCORD_URL } from "@/lib/constants";

export default function TalentAndCompanies() {
  const t = useTranslations("talentAndCompanies");

  return (
    <section id="talent" className="scroll-mt-16 overflow-hidden bg-dark py-14 sm:py-16 md:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Talent */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="inline-block rounded-xl bg-teal px-5 py-2 text-sm font-bold text-dark sm:px-6 sm:py-2.5 sm:text-base md:text-lg">
              {t("talent.pill")}
            </span>

            <h2 className="mt-5 text-xl font-bold text-white break-words sm:mt-6 sm:text-2xl md:text-3xl">
              {t("talent.subtitle")}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-200 break-words sm:mt-6 sm:text-base md:text-lg">
              {t("talent.description")}
            </p>

            <p className="mt-5 text-sm font-semibold text-white sm:mt-6 sm:text-base md:text-lg">
              {t("talent.note")}
            </p>
          </div>

          {/* Right Column: Companies */}
          <div
            id="companies"
            className="flex scroll-mt-20 flex-col items-center border-t border-white/10 pt-10 text-center sm:pt-12 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0 lg:items-end lg:text-right"
          >
            <span className="inline-block rounded-xl bg-teal px-5 py-2 text-sm font-bold text-dark sm:px-6 sm:py-2.5 sm:text-base md:text-lg">
              {t("companies.pill")}
            </span>

            <h2 className="mt-5 text-xl font-bold text-white break-words sm:mt-6 sm:text-2xl md:text-3xl">
              {t("companies.subtitle")}
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-200 break-words sm:mt-6 sm:text-base md:text-lg lg:ml-auto">
              {t("companies.description")}
            </p>

            <p className="mt-5 text-sm font-semibold text-white sm:mt-6 sm:text-base md:text-lg">
              {t("companies.note")}
            </p>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-12 flex justify-center sm:mt-14 lg:mt-20">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-teal px-8 py-3 text-base font-bold text-dark shadow-md transition-colors hover:bg-teal-light sm:px-10 sm:py-3.5 sm:text-lg"
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
