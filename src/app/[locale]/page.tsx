import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import TalentAndCompanies from "@/components/sections/TalentAndCompanies";
import Tournaments from "@/components/sections/Tournaments";
import Community from "@/components/sections/Community";
import Testimonials from "@/components/sections/Testimonials";
import News from "@/components/sections/News";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <HowItWorks />
      <TalentAndCompanies />
      <Tournaments />
      <Community />
      <Testimonials />
      <News />
    </main>
  );
}
