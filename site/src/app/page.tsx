import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Bridge } from "@/components/sections/Bridge";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Capabilities } from "@/components/sections/Capabilities";
import { AlethiaKit } from "@/components/sections/AlethiaKit";
import { Impact } from "@/components/sections/Impact";
import { Opportunity } from "@/components/sections/Opportunity";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";
import { StackedSections } from "@/components/StackedSections";

export default function Home() {
  return (
    <>
      <div className="ambient-mesh" aria-hidden />
      <div className="ambient-grain" aria-hidden />

      <Navigation />

      <main className="relative">
        <Hero />
        <StackedSections>
          <Problem />
          <Bridge />
          <HowItWorks />
          <Capabilities />
          <AlethiaKit />
          <Impact />
          <Opportunity />
          <Contact />
        </StackedSections>
      </main>

      <Footer />
    </>
  );
}
