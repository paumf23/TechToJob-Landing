export const DISCORD_URL = "https://discord.gg/s3fJJfVmEX";

export const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  if (process.env.NODE_ENV === "development" || !process.env.VERCEL) {
    return "http://localhost:3000";
  }
  return "https://techtojob.vercel.app";
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/techtojob/",
  twitter: "https://x.com/techtojob",
  instagram: "https://www.instagram.com/techtojob",
} as const;

export const NAV_LINKS = [
  { key: "howItWorks", href: "#how-it-works" },
  { key: "talent", href: "#talent" },
  { key: "companies", href: "#companies" },
  { key: "tournaments", href: "#tournaments" },
  { key: "community", href: "#community" },
  { key: "testimonials", href: "#testimonials" },
  { key: "news", href: "#news" },
  { key: "newsletter", href: "#newsletter" },
] as const;
