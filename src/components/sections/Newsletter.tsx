"use client";

import { useState, FormEvent } from "react";
import { useTranslations } from "next-intl";
import { CheckCircle2 } from "lucide-react";

export default function Newsletter() {
  const t = useTranslations("newsletter");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    tournaments: false,
    jobOffers: false,
    interviewResources: false,
    eventsLiveCoding: false,
  });
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInterestToggle = (key: keyof typeof interests) => {
    setInterests((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email.trim() || !privacyAccepted) return;
    setSubmitted(true);
  };

  return (
    <section
      id="newsletter"
      className="scroll-mt-16 overflow-hidden bg-white py-14 sm:py-16 md:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Headlines and Value Proposition */}
          <div className="flex flex-col space-y-5 sm:space-y-6">
            {/* Section Title */}
            <h2 className="text-3xl font-bold tracking-tight text-teal break-words sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>

            {/* Main Lead: Palette Dark Gray */}
            <h3 className="text-2xl font-bold tracking-tight text-dark break-words sm:text-3xl lg:text-4xl leading-tight">
              {t("headline")}
            </h3>

            {/* Paragraph 1: Palette Dark Gray */}
            <p className="text-base font-medium leading-relaxed text-dark break-words sm:text-lg">
              {t("p1")}
            </p>

            {/* Paragraph 2: Palette Dark Gray */}
            <p className="text-base font-medium leading-relaxed text-dark break-words sm:text-lg">
              {t("p2")}
            </p>
          </div>

          {/* Right Column: Detailed Form Card */}
          <div className="relative rounded-2xl border border-teal/30 bg-teal-light/35 p-6 shadow-xl sm:rounded-3xl sm:p-8 lg:p-10">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center animate-fade-in">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/20 text-teal-dark">
                  <CheckCircle2 className="h-8 w-8 text-teal-dark" />
                </div>
                <h4 className="mt-5 text-xl font-bold text-dark">
                  {t("form.success")}
                </h4>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setEmail("");
                    setPrivacyAccepted(false);
                    setInterests({
                      tournaments: false,
                      jobOffers: false,
                      interviewResources: false,
                      eventsLiveCoding: false,
                    });
                  }}
                  className="mt-6 text-sm font-semibold text-teal-dark underline transition-colors hover:text-dark"
                >
                  {t("form.button")}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                aria-label={t("form.ariaLabel")}
                className="flex flex-col space-y-5"
              >
                {/* 1. Name Field */}
                <div className="flex flex-col space-y-1.5">
                  <label
                    htmlFor="newsletter-name"
                    className="text-sm font-bold text-dark sm:text-base"
                  >
                    {t("form.nameLabel")}
                  </label>
                  <input
                    id="newsletter-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={t("form.namePlaceholder")}
                    className="w-full rounded-xl border border-dark/20 bg-white px-4 py-3 text-base text-dark placeholder:text-dark-muted transition-all focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
                  />
                </div>

                {/* 2. Email Field */}
                <div className="flex flex-col space-y-1.5">
                  <label
                    htmlFor="newsletter-email"
                    className="text-sm font-bold text-dark sm:text-base"
                  >
                    {t("form.emailLabel")}
                  </label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={t("form.emailPlaceholder")}
                    className="w-full rounded-xl border border-dark/20 bg-white px-4 py-3 text-base text-dark placeholder:text-dark-muted transition-all focus:border-teal focus:outline-none focus:ring-2 focus:ring-teal/30"
                  />
                </div>

                {/* 3. Interests Section */}
                <div className="pt-2">
                  <div className="border-b-2 border-dark/80 pb-1">
                    <h4 className="text-base font-bold text-dark sm:text-lg">
                      {t("form.interestsTitle")}
                    </h4>
                  </div>

                  {/* 2x2 Grid of Interests Checkboxes */}
                  <div className="mt-3.5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {/* Left Col: Tournaments */}
                    <label className="flex cursor-pointer items-center space-x-2.5">
                      <input
                        type="checkbox"
                        checked={interests.tournaments}
                        onChange={() => handleInterestToggle("tournaments")}
                        className="h-4 w-4 rounded border-dark/30 text-teal accent-teal focus:ring-teal"
                      />
                      <span className="text-sm font-medium text-dark sm:text-base">
                        {t("form.interests.tournaments")}
                      </span>
                    </label>

                    {/* Right Col: Interview Resources */}
                    <label className="flex cursor-pointer items-center space-x-2.5">
                      <input
                        type="checkbox"
                        checked={interests.interviewResources}
                        onChange={() =>
                          handleInterestToggle("interviewResources")
                        }
                        className="h-4 w-4 rounded border-dark/30 text-teal accent-teal focus:ring-teal"
                      />
                      <span className="text-sm font-medium text-dark sm:text-base">
                        {t("form.interests.interviewResources")}
                      </span>
                    </label>

                    {/* Left Col: Job Offers */}
                    <label className="flex cursor-pointer items-center space-x-2.5">
                      <input
                        type="checkbox"
                        checked={interests.jobOffers}
                        onChange={() => handleInterestToggle("jobOffers")}
                        className="h-4 w-4 rounded border-dark/30 text-teal accent-teal focus:ring-teal"
                      />
                      <span className="text-sm font-medium text-dark sm:text-base">
                        {t("form.interests.jobOffers")}
                      </span>
                    </label>

                    {/* Right Col: Events & Live Coding */}
                    <label className="flex cursor-pointer items-center space-x-2.5">
                      <input
                        type="checkbox"
                        checked={interests.eventsLiveCoding}
                        onChange={() =>
                          handleInterestToggle("eventsLiveCoding")
                        }
                        className="h-4 w-4 rounded border-dark/30 text-teal accent-teal focus:ring-teal"
                      />
                      <span className="text-sm font-medium text-dark sm:text-base">
                        {t("form.interests.eventsLiveCoding")}
                      </span>
                    </label>
                  </div>
                </div>

                {/* 4. Privacy Policy Checkbox */}
                <div className="pt-2">
                  <label className="flex cursor-pointer items-start space-x-2.5">
                    <input
                      type="checkbox"
                      required
                      checked={privacyAccepted}
                      onChange={(e) => setPrivacyAccepted(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-dark/30 text-teal accent-teal focus:ring-teal"
                    />
                    <span className="text-xs font-medium text-dark-muted hover:text-dark sm:text-sm">
                      {t("form.privacyPolicy")}
                    </span>
                  </label>
                </div>

                {/* 5. Submit Button: Brand Teal */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-xl bg-teal px-6 py-3.5 text-base font-bold text-dark shadow-md transition-all duration-200 hover:bg-teal-light active:scale-[0.99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal/50"
                  >
                    {t("form.button")}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
