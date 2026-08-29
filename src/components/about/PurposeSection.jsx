import {
  InformationCircleIcon,
  BubbleChatIcon,
  ViewIcon,
  UserGroupIcon,
} from "@hugeicons/core-free-icons";
import PurposeCard from "./PurposeCard";

const purposes = [
  {
    icon: InformationCircleIcon,
    title: "Community Information",
    description:
      "Access rules, regulations, and important community guidelines in one organized location.",
    aosDelay: "100",
  },
  {
    icon: BubbleChatIcon,
    title: "Better Communication",
    description:
      "Stay connected with officers, get updates on community projects, and share feedback easily.",
    aosDelay: "200",
  },
  {
    icon: ViewIcon,
    title: "Transparency",
    description:
      "Understand how the community is managed, how funds are used, and what projects are underway.",
    aosDelay: "300",
  },
  {
    icon: UserGroupIcon,
    title: "Community Awareness",
    description:
      "Learn about our officers, neighborhood events, FAQ's, and resources available to residents.",
    aosDelay: "400",
  },
];

function PurposeSection() {
  return (
    <div className="mb-16">
      <h2
        className="text-2xl font-bold mb-4 text-(--secondary-color)"
        data-aos="fade-down"
      >
        Purpose of This Website
      </h2>
      <p className=" mb-8" data-aos="fade-down" data-aos-delay="100">
        This website serves as the central hub for Willowbend Subdivision
        community information and communication. We created this platform to
        strengthen our community by fostering better connections, improving
        transparency, and making important information easily accessible to all
        residents.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {purposes.map((purpose) => (
          <PurposeCard key={purpose.title} {...purpose} />
        ))}
      </div>
    </div>
  );
}

export default PurposeSection;
