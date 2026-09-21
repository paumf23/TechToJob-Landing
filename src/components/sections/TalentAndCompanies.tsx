import { useTranslations } from "next-intl";
import {
  Code2,
  Trophy,
  GitBranch,
  ShieldCheck,
  UserCheck,
  MessageSquare,
  Zap,
  Eye,
  Search,
  CheckCircle2,
  Timer,
  Target,
  FileCode,
  Rocket,
  Users,
  Handshake,
} from "lucide-react";
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

            {/* Visual Support: Dev Profile Card */}
            <div className="relative mt-8 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-teal/40 hover:bg-white/[0.06] sm:mt-10 sm:p-6">
              {/* Subtle ambient glow behind card */}
              <div
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-teal/15 blur-2xl"
                aria-hidden="true"
              />

              {/* Header: Avatar + Info + Availability Badge */}
              <div className="relative z-10 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  {/* Avatar with status indicator */}
                  <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-teal/40 bg-teal/15 text-teal shadow-inner">
                    <Code2 size={24} />
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-dark bg-emerald-500"></span>
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-base">Alex R.</span>
                      <span className="rounded-full bg-teal/15 px-2 py-0.5 font-mono text-[11px] font-semibold text-teal">
                        PRO
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-gray-300">
                      {t("talent.card.role")}
                    </p>
                    <p className="text-[11px] text-teal-light/90">
                      {t("talent.card.levelAndAvailability")}
                    </p>
                  </div>
                </div>

                {/* Live availability pill */}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-semibold text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400"></span>
                  {t("talent.card.status")}
                </span>
              </div>

              {/* Tech Stack Chips */}
              <div className="relative z-10 mt-5 border-t border-white/10 pt-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                  {t("talent.card.stackLabel")}
                </span>
                <div className="mt-2.5 flex flex-wrap gap-1.5">
                  {["React", "TypeScript", "Next.js", "Tailwind", "Git"].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-xs font-medium text-gray-200 transition-colors hover:border-teal/50 hover:bg-teal/10 hover:text-teal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Community Validation Badges (Proof of Work) */}
              <div className="relative z-10 mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-3.5 text-xs">
                <div className="flex items-center gap-1.5 rounded-lg border border-teal/30 bg-teal/10 px-2.5 py-1.5 text-teal font-medium">
                  <Trophy size={14} className="flex-shrink-0 text-teal" />
                  <span>{t("talent.card.badge1")}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-gray-300 font-medium">
                  <GitBranch size={14} className="flex-shrink-0 text-teal" />
                  <span>{t("talent.card.badge2")}</span>
                </div>
              </div>
            </div>

            {/* Process Guarantees: Visual Highlights Below the Card */}
            <div className="mt-6 w-full max-w-md text-left">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal">
                  {t("talent.card.benefitsLabel")}
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <div className="mt-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {[
                  { icon: ShieldCheck, key: 0 },
                  { icon: UserCheck, key: 1 },
                  { icon: MessageSquare, key: 2 },
                  { icon: Zap, key: 3 },
                  { icon: Eye, key: 4 },
                ].map(({ icon: Icon, key }, idx) => (
                  <div
                    key={key}
                    className={`group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs font-medium text-gray-200 backdrop-blur-sm transition-all duration-200 hover:border-teal/40 hover:bg-white/[0.06] hover:text-white ${
                      idx === 4 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-teal/15 text-teal shadow-inner transition-colors group-hover:bg-teal group-hover:text-dark">
                      <Icon size={15} />
                    </div>
                    <span className="font-semibold text-gray-200 group-hover:text-white">
                      {t(`talent.card.benefits.${key}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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

            {/* Visual Support: Company Radar Card */}
            <div className="relative mt-8 w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-left shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-teal/40 hover:bg-white/[0.06] sm:mt-10 sm:p-6 lg:ml-auto">
              {/* Subtle ambient glow behind card */}
              <div
                className="pointer-events-none absolute -left-8 -top-8 h-28 w-28 rounded-full bg-teal/15 blur-2xl"
                aria-hidden="true"
              />

              {/* Header: Search Icon + Info + Status Badge */}
              <div className="relative z-10 flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl border border-teal/40 bg-teal/15 text-teal shadow-inner">
                    <Search size={22} />
                    <span className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal opacity-75"></span>
                      <span className="relative inline-flex h-3.5 w-3.5 rounded-full border-2 border-dark bg-teal"></span>
                    </span>
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-gray-400">
                        {t("companies.card.searchLabel")}
                      </span>
                      <span className="rounded-full bg-teal/15 px-2 py-0.5 font-mono text-[11px] font-semibold text-teal">
                        ACTIVO
                      </span>
                    </div>
                    <p className="text-xs font-semibold text-gray-300">
                      {t("companies.card.role")}
                    </p>
                    <p className="text-[11px] text-teal-light/90">
                      {t("companies.card.matchInfo")}
                    </p>
                  </div>
                </div>

                {/* Radar Status Pill */}
                <span className="inline-flex items-center gap-1.5 rounded-full border border-teal/40 bg-teal/15 px-2.5 py-1 text-[11px] font-semibold text-teal">
                  <span className="h-1.5 w-1.5 rounded-full bg-teal animate-pulse"></span>
                  {t("companies.card.status")}
                </span>
              </div>

              {/* Pre-evaluation Preview Box */}
              <div className="relative z-10 mt-5 rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5">
                <span className="block text-[11px] font-bold uppercase tracking-wider text-teal">
                  {t("companies.card.previewLabel")}
                </span>
                <div className="mt-2.5 flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md bg-teal/20 text-teal">
                    <CheckCircle2 size={13} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">
                      {t("companies.card.projectTitle")}
                    </p>
                    <p className="mt-0.5 text-[11px] text-gray-300">
                      {t("companies.card.projectDesc")}
                    </p>
                  </div>
                </div>
              </div>

              {/* Badges Footer */}
              <div className="relative z-10 mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-3.5 text-xs">
                <div className="flex items-center gap-1.5 rounded-lg border border-teal/30 bg-teal/10 px-2.5 py-1.5 text-teal font-medium">
                  <Timer size={14} className="flex-shrink-0 text-teal" />
                  <span>{t("companies.card.badge1")}</span>
                </div>
                <div className="flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-1.5 text-gray-300 font-medium">
                  <Target size={14} className="flex-shrink-0 text-teal" />
                  <span>{t("companies.card.badge2")}</span>
                </div>
              </div>
            </div>

            {/* Benefits: Highlights Below the Card */}
            <div className="mt-6 w-full max-w-md text-left lg:ml-auto">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-teal">
                  {t("companies.card.benefitsLabel")}
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <div className="mt-3.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {[
                  { icon: FileCode, key: 0 },
                  { icon: Rocket, key: 1 },
                  { icon: Users, key: 2 },
                  { icon: Handshake, key: 3 },
                ].map(({ icon: Icon, key }) => (
                  <div
                    key={key}
                    className="group flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs font-medium text-gray-200 backdrop-blur-sm transition-all duration-200 hover:border-teal/40 hover:bg-white/[0.06] hover:text-white"
                  >
                    <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-teal/15 text-teal shadow-inner transition-colors group-hover:bg-teal group-hover:text-dark">
                      <Icon size={15} />
                    </div>
                    <span className="font-semibold text-gray-200 group-hover:text-white">
                      {t(`companies.card.benefits.${key}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
