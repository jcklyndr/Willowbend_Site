import React from "react";
import { NavLink } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import WaveDivider from "../ui/WaveDivider";
import {
  MailIcon,
  Call02Icon,
  Location01Icon,
  FacebookIcon,
  AlertCircleIcon,
  Shield01Icon,
  FireIcon,
  AmbulanceIcon,
  Heart,
} from "@hugeicons/core-free-icons";

function Footer() {
  const hotlines = [
    { label: "Barangay Hall", number: "(044) 123-4567", icon: Shield01Icon },
    { label: "Police (PNP)", number: "117", icon: AlertCircleIcon },
    {
      label: "Fire Department (BFP)",
      number: "(044) 765-4321",
      icon: FireIcon,
    },
    { label: "Medical / Ambulance", number: "911", icon: AmbulanceIcon },
  ];

  return (
    <footer
      className="bg-(--background-color) text-white"
      data-aos="fade-up"
      data-aos-duration="700"
    >
      <div className="relative h-12 sm:h-16 md:h-20 lg:h-24">
        <WaveDivider color="var(--secondary-color)" />
      </div>
      <div className="bg-(--secondary-color)">
        <div className="mx-auto max-w-7xl px-6 py-12">
          {/* Top Section */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Brand */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-(--tertiary-color)">
                Willowbend Subdivision
              </h3>

              <p className="text-sm leading-7 text-gray-300">
                A peaceful, close-knit residential community dedicated to
                fostering a secure environment and strong neighborhood
                connections.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-(--tertiary-color)">
                Get In Touch
              </h3>

              <ul className="space-y-4">
                <li>
                  <a
                    href="mailto:info@willowbend.com"
                    className="flex items-center gap-3 text-gray-300 transition hover:text-white"
                  >
                    <HugeiconsIcon
                      icon={MailIcon}
                      size={20}
                      className="shrink-0"
                    />
                    info@willowbend.com
                  </a>
                </li>

                <li>
                  <a
                    href="tel:+635551234567"
                    className="flex items-center gap-3 text-gray-300 transition hover:text-white"
                  >
                    <HugeiconsIcon
                      icon={Call02Icon}
                      size={20}
                      className="shrink-0"
                    />
                    (555) 123-4567
                  </a>
                </li>

                <li className="flex items-start gap-3 text-gray-300">
                  <HugeiconsIcon
                    icon={Location01Icon}
                    size={20}
                    className="mt-1 shrink-0"
                  />
                  <span>
                    Pandi, Bulacan,
                    <br />
                    Philippines, 3014
                  </span>
                </li>
              </ul>
            </div>

            {/* Emergency Hotlines */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-(--tertiary-color)">
                Emergency Hotlines
              </h3>

              <ul className="space-y-4">
                {hotlines.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-start gap-3 text-gray-300"
                  >
                    <HugeiconsIcon
                      icon={item.icon}
                      size={20}
                      className="mt-0.5 shrink-0"
                    />
                    <span>
                      {item.label}
                      <br />
                      <a
                        href={`tel:${item.number.replace(/[^\d]/g, "")}`}
                        className="font-medium text-gray-300 transition hover:text-white"
                      >
                        {item.number}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social */}
            <div>
              <h3 className="mb-4 text-xl font-bold text-(--tertiary-color)">
                Follow Us
              </h3>
              <a
                href="https://www.facebook.com/willowbend1998"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-gray-300 transition hover:text-white"
              >
                <HugeiconsIcon
                  icon={FacebookIcon}
                  size={24}
                  className="shrink-0"
                />
                <span>Willowbend Official Facebook</span>
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="my-10 h-px bg-white/20"></div>

          {/* Bottom */}
          <div className="flex flex-col gap-4 text-center md:flex-row md:items-center md:justify-between">
            <div className="space-y-1 text-sm text-gray-300">
              <p>© 2026 Willowbend Subdivision. All rights reserved.</p>

              <p className="flex items-center justify-center gap-2 md:justify-start">
                Designed with
                <HugeiconsIcon
                  icon={Heart}
                  className="text-(--tertiary-color)"
                />
                for our community.
              </p>
            </div>

            <NavLink
              to="/privacy-policy"
              className="text-sm text-gray-300 transition hover:text-white"
            >
              Privacy Policy
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
