import AboutHero from "../components/about/AboutHero";
import CommunitySection from "../components/about/CommunitySection";
import PurposeSection from "../components/about/PurposeSection";
import ValuesSection from "../components/about/ValuesSection";
import StatsSection from "../components/about/StatsSection";
import siteIcon from "../assets/images/site_icon.png";

function About() {
  return (
    <main className="pt-16">
      <AboutHero />

      <section className="relative overflow-hidden py-10">
        {/* Watermark background */}
        <img
          src={siteIcon}
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
