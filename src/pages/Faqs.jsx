import PageHero from "../components/ui/PageHero";
import InfoBanner from "../components/ui/InfoBanner";
import FaqAccordionSection from "../components/faq/FaqAccordionSection";
import FaqForm from "../components/faq/FaqForm";
import { NavLink } from "react-router-dom";

function Faq() {
  return (
    <main className="pt-10 bg-(--background-color) min-h-screen">
      <PageHero
        title="Frequently Asked Questions"
        description="Common questions about our Subdivision, community amenities, residency requirements, and more."
      />

      <section className="py-12 lg:py-20 bg-background-color">
        <div className="container mx-auto px-4">
          <InfoBanner className="mb-8 max-w-3xl mx-auto" aos="fade-up">
            You can also read the{" "}
            <NavLink
              to="/rules-and-regulations"
              className="font-semibold underline"
            >
              rules and regulations section
            </NavLink>{" "}
            for detailed information about living in our community.
          </InfoBanner>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <FaqAccordionSection />
            </div>
            <div>
              <FaqForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Faq;
