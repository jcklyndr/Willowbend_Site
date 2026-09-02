import { useState, useMemo } from "react";
import { NavLink } from "react-router-dom";
import PageHero from "../components/ui/PageHero";
import FaqFilterChips from "../components/faq/FaqFilterChips";
import FaqAccordionSection from "../components/faq/FaqAccordionSection";
import FaqForm from "../components/faq/FaqForm";
import { faqData, faqCategories } from "../data/faqData";

function Faq() {
  const [activeCategory, setActiveCategory] = useState("All Topics");

  const filteredFaqs = useMemo(() => {
    if (activeCategory === "All Topics") return faqData;
    return faqData.filter((faq) => faq.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="pt-10 bg-(--background-color) min-h-screen">
      <PageHero
        title="Frequently Asked Questions"
        description="Everything you need to know about community living, amenities, and resident guidelines in Willowbend."
      />

      <section className="py-12 lg:py-20 bg-background-color">
        <div className="container mx-auto px-4">
          <p
            className="text-center text-gray text-sm mb-8"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Looking for specific bylaws? View our{" "}
            <NavLink
              to="/rules-and-regulations"
              className="font-semibold text-primary underline"
            >
              Rules & Regulations
            </NavLink>
            .
          </p>

          <FaqFilterChips
            categories={faqCategories}
            activeCategory={activeCategory}
            onSelect={setActiveCategory}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <FaqAccordionSection items={filteredFaqs} />
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
