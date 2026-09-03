import PageHero from "../components/ui/PageHero";
import ContactCard from "../components/ui/ContactCard";
import { contactData } from "../data/contactData";

function Contact() {
  return (
    <main className="pt-10 bg-(--background-color) min-h-screen">
      <PageHero
        title="Reach Out to Officers"
        description="Whether you have questions about our community, need support, or want to connect with neighbors, we're here to help. Contact us through any of the methods below and we'll get back to you as soon as possible."
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
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3489.3269015913475!2d120.98370477457804!3d14.89068406990981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sph!4v1788411584087!5m2!1sen!2sph"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          ></iframe>
        </div>
      </section>
    </main>
  );
}

export default Contact;
