"use client";

import { useState } from "react";
import { useTranslations, useLocale } from "next-intl";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { DISCORD_URL, NAV_LINKS } from "@/lib/constants";

export default function Header() {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const nextLocale = locale === "es" ? "en" : "es";

  return (
    <header className="sticky top-0 z-50 bg-white">
      <nav
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex-shrink-0" aria-label="TechToJob home">
            <Image
              src="/v1Negativo.svg"
              alt="TechToJob logo"
              width={150}
              height={22}
              priority
              className="h-6 w-auto"
            />
          </a>

          {/* Desktop nav links */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="text-sm font-medium text-dark transition-colors hover:text-teal"
              >
                {t(link.key)}
              </a>
            ))}

            {/* Language switcher */}
            <Link
              href={pathname}
              locale={nextLocale}
              className="rounded-md border border-dark/20 px-2 py-1 text-xs font-bold uppercase tracking-wider text-dark transition-colors hover:border-teal hover:text-teal"
              aria-label={locale === "es" ? "Cambiar idioma a inglés" : "Switch language to Spanish"}
            >
              {nextLocale.toUpperCase()}
            </Link>

            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-lg bg-teal px-5 py-2 text-sm font-bold text-dark transition-colors hover:bg-teal-light"
            >
              {t("joinDiscord")}
            </a>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-3 lg:hidden">
            <Link
              href={pathname}
              locale={nextLocale}
              className="rounded-md border border-dark/20 px-2 py-1 text-xs font-bold uppercase tracking-wider text-dark transition-colors hover:border-teal hover:text-teal"
              aria-label={locale === "es" ? "Cambiar idioma a inglés" : "Switch language to Spanish"}
            >
              {nextLocale.toUpperCase()}
            </Link>

            <button
              type="button"
              className="rounded-md p-2 text-dark transition-colors hover:text-teal"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-label={isMobileMenuOpen ? t("closeMenu") : t("openMenu")}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-dark/10 pb-4 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.key}
                href={link.href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-dark transition-colors hover:bg-gray-100 hover:text-teal"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block rounded-lg bg-teal px-4 py-2 text-center text-sm font-bold text-dark transition-colors hover:bg-teal-light"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t("joinDiscord")}
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
