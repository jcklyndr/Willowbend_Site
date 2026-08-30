import React from "react";
import RegulationsHero from "../components/regulations/RegulationsHero";
import RulesIntro from "../components/regulations/RulesIntro";
import RulesAccordion from "../components/regulations/RulesAccordion";

function Regulations() {
  return (
    <main className="pt-10 bg-(--background-color) min-h-screen">
      <RegulationsHero />

      <section className="py-10 sm:py-14 relative overflow-hidden bg-background">
        <img
          src="/images/site_icon.png"
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute -right-10 -bottom-10 w-64 sm:w-80 opacity-5"
        />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <RulesIntro />
          <RulesAccordion />
        </div>
      </section>
    </main>
  );
}

export default Regulations;
