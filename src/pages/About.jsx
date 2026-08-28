import React from "react";
import AboutHero from "../components/about/AboutHero";
import CommunitySection from "../components/about/CommunitySection";
import PurposeSection from "../components/about/PurposeSection";
import ValuesSection from "../components/about/ValuesSection";
import StatsSection from "../components/about/StatsSection";

function About() {
  return (
    <main className="pt-5 mt-4">
      <AboutHero />

      <section className="relative overflow-hidden py-16">
        {/* Watermark background */}
        <img
          src="/Root/images/site_icon.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-20 -top-10 w-125 opacity-5 z-0"
        />

        <div className="relative max-w-6xl mx-auto px-4">
          <CommunitySection />
          <PurposeSection />
          <ValuesSection />
          <StatsSection />
        </div>
      </section>
    </main>
  );
}
export default About;
