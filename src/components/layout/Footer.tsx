import Image from "next/image";
import { useTranslations } from "next-intl";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="relative border-t border-white/10 bg-dark py-12 text-white sm:py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Main Footer Grid: Brand Column + Navigation Columns */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Tagline Block */}
          <div className="flex flex-col items-start lg:col-span-4">
            <a href="#" className="inline-block" aria-label="TechToJob home">
              <Image
                src="/v2Negativo.svg"
                alt="TechToJob logo"
                width={200}
                height={110}
                className="h-14 w-auto sm:h-16"
              />
            </a>
            {/* Catchy brand phrase in teal */}
            <p className="mt-4 max-w-sm text-sm font-medium leading-relaxed text-teal sm:text-base">
              {t("tagline")}
            </p>
          </div>

          {/* Navigation Columns (Divided by subtle vertical borders on desktop) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8 lg:divide-x lg:divide-white/10">
            {/* Column 1: Talent */}
            <div className="flex flex-col space-y-3 lg:pl-6">
              <h3 className="text-base font-bold tracking-wider text-teal sm:text-lg">
                {t("columns.talent")}
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#how-it-works"
                    className="text-sm text-white/90 transition-colors hover:text-teal sm:text-base"
                  >
                    {t("columns.howItWorks")}
                  </a>
                </li>
                <li>
                  <a
                    href="#talent"
                    className="text-sm text-white/90 transition-colors hover:text-teal sm:text-base"
                  >
                    {t("columns.talentLink")}
                  </a>
                </li>
                <li>
                  <a
                    href="#tournaments"
                    className="text-sm text-white/90 transition-colors hover:text-teal sm:text-base"
                  >
                    {t("columns.tournaments")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 2: Companies */}
            <div className="flex flex-col space-y-3 lg:pl-6">
              <h3 className="text-base font-bold tracking-wider text-teal sm:text-lg">
                {t("columns.companies")}
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#companies"
                    className="text-sm text-white/90 transition-colors hover:text-teal sm:text-base"
                  >
                    {t("columns.companiesLink")}
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 3: Social */}
            <div className="flex flex-col space-y-3 lg:pl-6">
              <h3 className="text-base font-bold tracking-wider text-teal sm:text-lg">
                {t("columns.social")}
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/90 transition-colors hover:text-teal sm:text-base"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/90 transition-colors hover:text-teal sm:text-base"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/90 transition-colors hover:text-teal sm:text-base"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4: Legal */}
            <div className="flex flex-col space-y-3 lg:pl-6">
              <h3 className="text-base font-bold tracking-wider text-teal sm:text-lg">
                {t("columns.legal")}
              </h3>
              <ul className="space-y-2.5">
                <li>
                  <a
                    href="#privacy"
                    className="text-sm text-white/90 transition-colors hover:text-teal sm:text-base"
                  >
                    {t("columns.privacy")}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Horizontal Divider and Copyright */}
        <div className="mt-12 border-t border-white/10 pt-8 sm:mt-16">
          <p className="text-center text-xs font-normal text-gray-300 sm:text-sm">
            {t("copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
