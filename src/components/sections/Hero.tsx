import Image from "next/image";
import { useTranslations } from "next-intl";
import { DISCORD_URL } from "@/lib/constants";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="overflow-hidden bg-dark py-12 sm:py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-8 sm:gap-10 lg:flex-row lg:gap-16">
          {/* Logo */}
          <div className="w-48 flex-shrink-0 sm:w-56 md:w-72 lg:w-96">
            <Image
              src="/v2Negativo.svg"
              alt="TechToJob logo"
              width={614}
              height={340}
              priority
              className="h-auto w-full"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <h1 className="text-2xl font-bold leading-snug text-white break-words sm:text-3xl sm:leading-tight md:text-4xl lg:text-5xl">
              {t.rich("title", {
                teal: (chunks) => <span className="text-teal">{chunks}</span>,
              })}
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-relaxed text-gray-200 break-words sm:text-base md:text-lg">
              {t("description")}
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center rounded-xl bg-teal px-7 py-3 text-base font-bold text-dark transition-colors hover:bg-teal-light sm:mt-8 sm:px-8 sm:py-3.5 sm:text-lg"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
