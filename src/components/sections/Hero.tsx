import Image from "next/image";
import { useTranslations } from "next-intl";
import { DISCORD_URL } from "@/lib/constants";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="bg-dark py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
          {/* Logo */}
          <div className="w-56 flex-shrink-0 md:w-72 lg:w-96">
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
            <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              {t.rich("title", {
                teal: (chunks) => <span className="text-teal">{chunks}</span>,
              })}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-200">
              {t("description")}
            </p>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center rounded-lg bg-teal px-8 py-3 text-lg font-bold text-dark transition-colors hover:bg-teal-light"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
