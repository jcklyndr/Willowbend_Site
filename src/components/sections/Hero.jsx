import { NavLink } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown02Icon } from "@hugeicons/core-free-icons";

import heroImage from "../../assets/images/hero.jpg";

function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      data-aos="fade"
    >
      {/* Background */}
      <img
        src={heroImage}
        alt="Willowbend Subdivision"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-[rgba(37,61,44,0.65)] via-[rgba(37,61,44,0.75)] to-[rgba(37,61,44,0.9)]" />
      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-6 text-center text-white">
        {/* Welcome */}
        <ruby
          className="mt-4 text-lg font-light md:text-2xl"
          aria-labelledby="welcome-heading"
        >
          Mabuhay<rp>(</rp>
          <rt id="welcome-heading">Welcome / Long Live</rt>
          <rp>)</rp>
        </ruby>
        {/* Heading */}
        <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
          Quiet living,
          <br />
          Green Surroundings where good neighbors come together.
        </h1>

        {/* Description */}
        <p className="max-w-3xl text-lg leading-8 text-gray-200 md:text-xl">
          Located in Pinagkuartelan, Pandi, Bulacan, Willowbend Subdivision is a
          peaceful residential community committed to providing a safe,
          respectful, and connected neighborhood for every resident.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
          <NavLink
            to="/about"
            className="rounded-lg bg-(--primary-color) px-8 py-4 font-semibold text-white transition hover:brightness-110"
          >
            Explore Community
          </NavLink>

          <NavLink
            to="/regulations"
            className="rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-(--secondary-color)"
          >
            View Regulations
          </NavLink>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 flex flex-col items-center text-gray-200">
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
