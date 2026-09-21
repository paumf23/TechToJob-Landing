import Image from "next/image";
import { useTranslations } from "next-intl";
import { DISCORD_URL } from "@/lib/constants";
import CodeParticlesBackground from "@/components/ui/CodeParticlesBackground";

export default function Hero() {
  const t = useTranslations("hero");

  return (
    <section className="relative overflow-hidden bg-dark pt-12 pb-20 sm:pt-16 sm:pb-24 md:pt-24 md:pb-32 lg:pt-32 lg:pb-36">
      {/* Reusable Code Syntax Particles Floating Background */}
      <CodeParticlesBackground />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
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

      {/* Atmospheric Gradient & Central Glow Transition to How It Works (White) */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-28 sm:h-36 md:h-44 overflow-hidden"
        aria-hidden="true"
      >
        {/* Central Luminous Teal Ambient Glow */}
        <div className="absolute left-1/2 bottom-3 -translate-x-1/2 h-24 w-[320px] sm:h-32 sm:w-[540px] md:h-40 md:w-[750px] rounded-full bg-teal/35 blur-3xl" />

        {/* Smooth Atmospheric Gradient to Pure White */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/30 via-25% to-white" />
      </div>
    </section>
  );
}
