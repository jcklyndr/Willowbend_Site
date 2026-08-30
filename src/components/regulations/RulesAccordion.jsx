import React, { useState } from "react";
import {
  UserGroupIcon,
  House01Icon,
  SecurityCheckIcon,
  CarIcon,
  Megaphone01Icon,
} from "@hugeicons/core-free-icons";
import { rulesData } from "../../data/rulesData";
import Accordion from "../ui/Accordion";

const iconMap = {
  UserGroupIcon,
  House01Icon,
  SecurityCheckIcon,
  CarIcon,
  Megaphone01Icon,
};

const colorMap = {
  "community-conduct": "--primary-color",
  "property-housing": "--fourth-color",
  "security-safety": "--secondary-color",
  "vehicles-parking": "--tertiary-color",
  "noise-public": "--accent-color",
};

function RulesAccordion() {
  const [openIds, setOpenIds] = useState([]);

  const handleToggle = (id) => {
    setOpenIds((current) => (current.includes(id) ? [] : [id]));
  };

  const handleJump = (id) => {
    setOpenIds([id]);
    requestAnimationFrame(() => {
      document
        .getElementById(id)
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const items = rulesData.map((category) => ({
    id: category.id,
    title: category.title,
    subtitle: category.subtitle,
    icon: iconMap[category.icon],
    iconColor: colorMap[category.id],
    itemCount: category.rules.length,
    content: (
      <ul className="mb-0 space-y-3">
        {category.rules.map((rule, index) => (
          <li key={index} className="flex gap-2.5">
            <span
              className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
              style={{ backgroundColor: `var(${colorMap[category.id]})` }}
              aria-hidden="true"
            />
            <span>
              <strong className="text-(--text-color)">{rule.title}:</strong>{" "}
              <span className="text-(--gray)">{rule.description}</span>
            </span>
          </li>
        ))}
      </ul>
    ),
  }));

  return (
    <div>
      <div
        className="flex flex-wrap gap-2 mb-6"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        {rulesData.map((category) => (
          <button
            key={category.id}
            type="button"
            onClick={() => handleJump(category.id)}
            aria-expanded={openIds.includes(category.id)}
            className={`text-sm font-medium px-3.5 py-1.5 rounded-full border transition-colors ${
              openIds.includes(category.id)
                ? "bg-(--primary-color) text-white border-(--primary-color)"
                : "border-(--primary-color)/40 text-(--primary-color) bg-white hover:bg-(--primary-color) hover:text-white"
            }`}
          >
            {category.title}
          </button>
        ))}
      </div>

      <Accordion items={items} openIds={openIds} onToggle={handleToggle} />
    </div>
  );
}

export default RulesAccordion;
