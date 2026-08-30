import {
  UserGroupIcon,
  House01Icon,
  SecurityCheckIcon,
  Car01Icon,
  Megaphone01Icon,
} from "@hugeicons/core-free-icons";
import { rulesData } from "../regulations/rulesData";
import Accordion from "../ui/Accordion";

const iconMap = {
  UserGroupIcon,
  House01Icon,
  SecurityCheckIcon,
  Car01Icon,
  Megaphone01Icon,
};

function RulesAccordion() {
  const items = rulesData.map((category) => ({
    id: category.id,
    title: category.title,
    icon: iconMap[category.icon],
    content: (
      <ul className="mb-0 space-y-2">
        {category.rules.map((rule, index) => (
          <li key={index}>
            <strong className="text-primary">{rule.title}:</strong>{" "}
            {rule.description}
          </li>
        ))}
      </ul>
    ),
  }));

  return <Accordion items={items} />;
}

export default RulesAccordion;
