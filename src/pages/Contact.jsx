import PageHero from "../components/ui/PageHero";
import ContactCard from "../components/ui/ContactCard";
import { Home01Icon, Call02Icon, Mail01Icon } from "@hugeicons/core-free-icons";

const contactData = [
  {
    icon: Home01Icon,
    title: "Visit Us",
    subtitle: "Community Office",
    mainLine: "Willowbend Info Center",
    description:
      "Drop by during business hours for in-person support or ask directly at the main entrance.",
  },
  {
    icon: Call02Icon,
    title: "Call Us",
    subtitle: "Community Hotline",
    mainLine: "0960 113 4960",
    description:
      "Speak with a community representative for questions and guidance.",
  },
  {
    icon: Mail01Icon,
    title: "Contact Us",
    subtitle: "Email & Social",
    mainLine: "info@willowbend.com",
    description:
      "Send us an email for community news, or reach us on social media for quick announcements.",
  },
];

function Contact() {
  return (
    <main className="pt-10 bg-(--background-color) min-h-screen">
      <PageHero
        title="Reach Out to Officers"
        subtitle="Whether you have questions about our community, need support, or want to connect with neighbors, we're here to help. Contact us through any of the methods below and we'll get back to you as soon as possible."
      />

      <section
        id="contact-overview"
        className="container mx-auto px-4 py-12 sm:py-16"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
          {contactData.map((item, idx) => (
            <ContactCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              subtitle={item.subtitle}
              mainLine={item.mainLine}
              description={item.description}
              delay={idx * 100}
            />
          ))}
        </div>
      </section>

      <section
        id="location-map"
        className="container mx-auto px-4 pb-12 sm:pb-16"
      >
        <div className="mb-6 text-center sm:mb-8">
          <h2
            className="text-2xl font-bold text-secondary sm:text-3xl"
            data-aos="fade-up"
          >
            Our Location
          </h2>
          <p
            className="mt-1 text-sm text-gray"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            Use the map below to find the community office and neighborhood
            landmark.
          </p>
        </div>

        <div
          className="h-64 w-full overflow-hidden rounded-lg border border-gray/20 shadow-sm sm:h-80 md:h-96"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <iframe
            title="Willowbend Subdivision Location"
            className="h-full w-full"
            frameBorder="0"
            scrolling="no"
            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=Pandi%20Bulacan%20Philippines&t=&z=14&ie=UTF8&iwloc=B&output=embed"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default Contact;
