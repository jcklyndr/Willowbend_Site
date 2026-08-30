import AboutHero from "../components/about/AboutHero";
import CommunitySection from "../components/about/CommunitySection";
import PurposeSection from "../components/about/PurposeSection";
import ValuesSection from "../components/about/ValuesSection";
import StatsSection from "../components/about/StatsSection";
import siteIcon from "../assets/images/site_icon.png";

function About() {
  return (
    <main className="pt-10 bg-(--background-color) min-h-screen">
      <AboutHero />

      <section className="relative overflow-hidden py-10">
        {/* Watermark background */}
        <img
          src={siteIcon}
          alt=""
          aria-hidden="true"
          className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 opacity-5 z-0"
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
