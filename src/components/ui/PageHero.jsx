function PageHero({ title, description, children }) {
  return (
    <section className="bg-(--secondary-color) text-white text-center py-16 px-4">
      <div className="max-w-4xl mx-auto">
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
    </section>
  );
}

export default PageHero;
