import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Menu01Icon } from "@hugeicons/core-free-icons";
import { navigation } from "../../data/navigation";
import logo from "../../assets/images/site_icon.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" top-0 left-0 z-50 w-full border-b border-(--secondary-color) bg-(--secondary-color) shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <img src={logo} alt="Willowbend Subdivision" className="h-11 w-11" />

          {/* Desktop */}
          <span className="hidden text-lg font-bold text-white md:block">
            Willowbend Subdivision
          </span>

          {/* Mobile */}
          <span className="block text-base font-bold text-white md:hidden">
            Willowbend{" "}
            <abbr title="Subdivision" className="no-underline">
              Subd.
            </abbr>
          </span>
        </a>
        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-8 rounded-2xl bg-white px-6 py-2 font-semibold lg:flex">
          {navigation.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-(--accent-color)"
                      : "text-(--secondary-color) hover:text-(--primary-color)"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md bg-white p-2 lg:hidden"
          aria-label="Toggle Navigation"
        >
          {isOpen ? (
            <HugeiconsIcon
              icon={Cancel01Icon}
              size={24}
              className="text-[--secondary-color] shrink-0"
            />
          ) : (
            <HugeiconsIcon
              icon={Menu01Icon}
              size={24}
              className="text-[--secondary-color] shrink-0"
            />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col border-t border-white/20 bg-[--secondary-color]">
          {navigation.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `transition-colors duration-300 ${
                    isActive
                      ? "text-[--accent-color]"
                      : "text-[--secondary-color] hover:text-[--primary-color]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
