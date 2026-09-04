import PageHero from "../components/ui/PageHero";
import WatermarkSection from "../components/ui/WatermarkSection";
import PrivacySection from "../components/privacypolicy/PrivacySection";
import PrivacyContact from "../components/privacypolicy/PrivacyContact";
import {
  privacyIntro,
  privacySections,
  privacyContact,
} from "../data/privacyPolicyData";

function PrivacyPolicy() {
  return (
    <main className="pt-10 bg-(--background-color) min-h-screen">
      <PageHero
        title="Privacy Policy"
        description="Willowbend Subdivision is a peaceful, organized, and community-oriented residential neighborhood located in Pinagkuartelan, Pandi, Bulacan. We are committed to creating a safe, harmonious, and prosperous living environment for all our residents."
      />

      <WatermarkSection>
        {/* Intro */}
        <div className="mb-8" data-aos="fade-up" data-aos-duration="700">
          <p className="text-gray mb-2">
            <strong className="text-secondary">Effective Date:</strong>{" "}
            {privacyIntro.effectiveDate}
          </p>
          <p className="leading-relaxed text-text">{privacyIntro.paragraph}</p>
        </div>

        {privacySections.map((section, index) => (
          <PrivacySection
            key={section.id}
            title={section.title}
            intro={section.intro}
            paragraph={section.paragraph}
            items={section.items}
            delay={(index + 1) * 100}
          />
        ))}

        <PrivacyContact
          title={privacyContact.title}
          intro={privacyContact.intro}
          details={privacyContact.details}
          delay={(privacySections.length + 1) * 100}
        />
      </WatermarkSection>
    </main>
  );
}

export default PrivacyPolicy;
