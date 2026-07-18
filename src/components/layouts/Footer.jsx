import React from "react";
import { NavLink } from "react-router-dom";
import { Facebook, Mail, Phone, MapPin, Heart } from "lucide-react";
import navigation from "../../data/navigation";

const Footer = () => {
  return (
    <footer className="bg-[--secondary-color] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        {/* Top Section */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Willowbend Subdivision</h3>

            <p className="text-sm leading-7 text-gray-300">
              A Class D residential community dedicated to achieving a peaceful
              environment and fostering strong neighborhood connections.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Quick Links</h3>

            <ul className="space-y-3">
              {navigation.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `transition-colors duration-300 ${
                        isActive
                          ? "text-(--accent-color)"
                          : "text-gray-300 hover:text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Get In Touch</h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:info@willowbend.com"
                  className="flex items-center gap-3 text-gray-300 transition hover:text-white"
                >
                  <Mail />
                  info@willowbend.com
                </a>
              </li>

              <li>
                <a
                  href="tel:+635551234567"
                  className="flex items-center gap-3 text-gray-300 transition hover:text-white"
                >
                  <Phone />
                  (555) 123-4567
                </a>
              </li>

              <li className="flex items-start gap-3 text-gray-300">
                <MapPin className="mt-1" />
                <span>
                  Pandi, Bulacan,
                  <br />
                  Philippines, 3014
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Follow Us</h3>

            <a
              href="https://www.facebook.com/willowbend1998"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-gray-300 transition hover:text-white"
            >
              <Facebook className="text-2xl" />

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
              <Heart className="text-(--tertiary-color)" />
              for our community.
            </p>
          </div>

          <NavLink
            to="/privacy"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Privacy Policy
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
