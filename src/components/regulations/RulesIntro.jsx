import { HugeiconsIcon } from "@hugeicons/react";
import { InformationCircleIcon } from "@hugeicons/core-free-icons";

function RulesIntro() {
  return (
    <div
      className="flex gap-4 items-start bg-white p-5 sm:p-6 rounded-xl mb-8 shadow-sm"
      style={{ borderLeft: "4px solid var(--accent-color)" }}
      data-aos="fade-right"
      data-aos-duration="550"
    >
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-(--accent-color)/15 shrink-0">
        <HugeiconsIcon
          icon={InformationCircleIcon}
          size={20}
          className="text-(--accent-color)"
        />
      </span>
      <p className="mb-0 leading-relaxed text-(--text-color)">
        <strong>Welcome to Willowbend Subdivision.</strong> Please take time to
        review the guidelines below. These rules ensure our community remains a
        safe, clean, and pleasant place for all residents and their families. If
        you have questions about any rule, please contact the subdivision
        management office.
      </p>
    </div>
  );
}

export default RulesIntro;
