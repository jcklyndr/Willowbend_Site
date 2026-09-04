import AboutHero from "../components/about/AboutHero";
import CommunitySection from "../components/about/CommunitySection";
import PurposeSection from "../components/about/PurposeSection";
import ValuesSection from "../components/about/ValuesSection";
import StatsSection from "../components/about/StatsSection";
import WatermarkSection from "../components/ui/WatermarkSection";

function About() {
  return (
    <main className="pt-10 bg-(--background-color) min-h-screen">
      <AboutHero />

      <WatermarkSection>
        <CommunitySection />
        <PurposeSection />
        <ValuesSection />
        <StatsSection />
      </WatermarkSection>
    </main>
  );
}

export default About;
