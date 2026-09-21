import { useTranslations } from "next-intl";
import { DISCORD_URL } from "@/lib/constants";
import CodeParticlesBackground from "@/components/ui/CodeParticlesBackground";

export default function FinalCta() {
  const t = useTranslations("finalCta");

  return (
    <section
      id="join"
      className="relative overflow-hidden bg-dark pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-24 lg:pt-40 lg:pb-28"
    >
      {/* Code Syntax Particles Floating Background */}
      <CodeParticlesBackground />

      {/* Atmospheric Gradient & Central Glow Transition from Newsletter (White) */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-10 h-28 sm:h-36 md:h-44 overflow-hidden"
        aria-hidden="true"
      >
        {/* Central Luminous Teal Ambient Glow */}
        <div className="absolute left-1/2 top-3 -translate-x-1/2 h-24 w-[320px] sm:h-32 sm:w-[540px] md:h-40 md:w-[750px] rounded-full bg-teal/35 blur-3xl" />

        {/* Smooth Atmospheric Gradient from Pure White to Transparent */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-dark/30 via-75% to-transparent" />
      </div>

      {/* Subtle ambient glow in the background */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(132, 192, 191, 0.25) 0%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 text-center sm:px-6 lg:px-8">
        {/* Main Heading in Brand Teal */}
        <h2 className="text-3xl font-bold tracking-tight text-teal sm:text-4xl md:text-5xl lg:text-6xl">
          {t("title")}
        </h2>

        {/* Content Paragraphs in White / Light Gray */}
        <div className="mx-auto mt-6 max-w-3xl space-y-4 sm:mt-8 sm:space-y-5">
          <p className="text-base leading-relaxed text-gray-200 sm:text-lg md:text-xl">
            {t("p1")}
          </p>
          <p className="text-base font-semibold leading-relaxed text-white sm:text-lg md:text-xl">
            {t("p2")}
          </p>
        </div>

        {/* Discord Action Button */}
        <div className="mt-8 flex justify-center sm:mt-10 md:mt-12">
          <a
            href={DISCORD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-teal px-8 py-3.5 text-base font-bold text-dark shadow-lg shadow-teal/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-teal-light hover:shadow-teal/25 sm:px-10 sm:py-4 sm:text-lg"
          >
            {t("button")}
          </a>
        </div>
      </div>
    </section>
  );
}
