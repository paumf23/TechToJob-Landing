import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <HowItWorks />
    </main>
  );
}
