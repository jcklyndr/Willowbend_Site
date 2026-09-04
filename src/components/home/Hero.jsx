import { HugeiconsIcon } from "@hugeicons/react";
import { highlights } from "../../data/willowbendInfo";
import { ArrowDown02Icon } from "@hugeicons/core-free-icons";

import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroImage}
        alt="Willowbend Subdivision"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(37,61,44,0.65)] via-[rgba(37,61,44,0.75)] to-[rgba(37,61,44,0.9)]" />

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 pt-12 text-center text-white md:pt-16">
        {/* Welcome */}
        <ruby
          className="text-lg font-light leading-[2.5] md:text-2xl md:leading-[2.2]"
          aria-labelledby="welcome-heading"
          data-aos="fade-up"
        >
          Mabuhay<rp>(</rp>
          <rt
            id="welcome-heading"
            className="text-xs font-normal text-white/80 md:text-sm"
          >
            Welcome / Long Live
          </rt>
          <rp>)</rp>
        </ruby>

        {/* Heading */}
        <h1
          className="mb-6 text-4xl font-bold leading-tight md:text-6xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Quiet living,
          <br />
          Green Surroundings where good neighbors come together.
        </h1>

        {/* Description */}
        <p
          className="max-w-4xl text-lg leading-8 text-gray-200 md:text-xl"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Located in Pinagkuartelan, Pandi, Bulacan, Willowbend Subdivision is a
          residential community committed to providing a safe, respectful, and
          connected neighborhood for every resident.
        </p>

        {/* Housing Highlights */}
        <div
          className="mt-10 grid w-full grid-cols-1 divide-y divide-white/15 rounded-2xl border border-white/30 bg-secondary/50 backdrop-blur-sm sm:grid-cols-3 sm:divide-x sm:divide-y-0"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          {highlights.map((item, index) => (
            <div
              key={item.stat}
              className="flex flex-col items-center gap-2 px-6 py-6 text-center"
              data-aos="fade-up"
              data-aos-delay={300 + index * 100}
            >
              <span className="flex size-12 items-center justify-center rounded-full bg-accent/15 text-accent">
                <HugeiconsIcon icon={item.icon} size={20} />
              </span>
              <p className="text-xl font-bold text-white md:text-2xl">
                {item.stat}
              </p>
              <p className="text-sm text-gray-200/80 md:text-base">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div
          className="mt-10 flex flex-col items-center text-gray-200"
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <span className="mb-2 text-sm tracking-widest uppercase">Scroll</span>

          <HugeiconsIcon
            icon={ArrowDown02Icon}
            size={28}
            className="animate-bounce shrink-0"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
