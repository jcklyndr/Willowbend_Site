import WaveDivider from "./WaveDivider";

function PageHero({ title, description, children }) {
  return (
    <section className="relative bg-(--secondary-color) text-white text-center py-18 px-4 overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          {title}
        </h1>
        <p
          className="text-lg md:text-xl mb-6 text-white/90"
          data-aos="zoom-in"
          data-aos-duration="1000"
          data-aos-delay="220"
        >
          {description}
        </p>
        {children}
      </div>

      <WaveDivider color="var(--background-color)" />
    </section>
  );
}

export default PageHero;
