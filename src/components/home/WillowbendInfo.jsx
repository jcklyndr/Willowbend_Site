import { HugeiconsIcon } from "@hugeicons/react";
import {
  VoteIcon,
  Store01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import { NavLink } from "react-router-dom";
import StatCard from "../ui/StatCard";
import { stats, committees, businesses } from "../../data/willowbendInfo";

function WillowbendInfo() {
  return (
    <section className="bg-background px-4 py-4 pb-0 sm:px-6 md:pt-16 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Heading */}
        <h2
          className="text-2xl font-bold text-secondary sm:text-3xl md:text-4xl"
          data-aos="zoom-in"
          data-aos-duration="500"
        >
          About Willowbend Subdivision
        </h2>

        {/* Intro paragraphs */}
        <div
          className="mt-4 space-y-4"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <p className="text-text">
            Nestled in the heart of Brgy. Pinagkuartelan, Pandi, Bulacan,
            Willowbend Subdivision stands as a pioneer of residential
            development in the area. As one of the first established communities
            in the barangay, it has grown into a vibrant neighborhood known for
            its accessibility, community spirit, and budget-friendly housing
            solutions.
          </p>
          <p className="text-text">
            Willowbend Subdivision offers a variety of affordable housing
            options, catering to families and individuals seeking a comfortable
            living environment without breaking the bank. The subdivision is
            strategically located near essential amenities such as schools,
            markets, and transportation hubs, making it an ideal choice for
            residents who value convenience and accessibility.
          </p>
          <p className="text-text">
            The community is characterized by its friendly atmosphere, where
            neighbors come together to create a safe and welcoming environment.
            Regular community events and activities foster a sense of belonging
            among residents, making Willowbend Subdivision not just a place to
            live, but a place to call home.
          </p>
        </div>

        {/* Stats grid */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              icon={stat.icon}
              value={stat.value}
              label={stat.label}
              bgClass={stat.bgClass}
              textClass={stat.textClass}
              aosDelay={index * 100}
            />
          ))}
        </div>

        {/* Committees & Businesses */}
        <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
          <div
            className="rounded-xl border border-accent/30 bg-white p-6 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="mb-4 flex items-center gap-2">
              <HugeiconsIcon
                icon={VoteIcon}
                size={22}
                className="text-primary"
              />
              <h3 className="text-lg font-bold text-secondary">
                Current Committees
              </h3>
            </div>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-text">
              {committees.map((committee) => (
                <li key={committee}>{committee}</li>
              ))}
            </ul>
          </div>

          <div
            className="rounded-xl border border-accent/30 bg-white p-6 shadow-sm"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="mb-4 flex items-center gap-2">
              <HugeiconsIcon
                icon={Store01Icon}
                size={22}
                className="text-primary"
              />
              <h3 className="text-lg font-bold text-secondary">
                Local Businesses
              </h3>
            </div>
            <ul className="grid grid-cols-2 gap-y-2 text-sm text-text">
              {businesses.map((business) => (
                <li key={business}>{business}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div
          className="mt-8 flex justify-center md:justify-end"
          data-aos="fade-up"
          data-aos-delay="300"
        ></div>
      </div>
    </section>
  );
}

export default WillowbendInfo;
