import { HugeiconsIcon } from "@hugeicons/react";
import { InformationCircleIcon } from "@hugeicons/core-free-icons";

function InfoBanner({
  icon = InformationCircleIcon,
  children,
  className = "",
  aos = "fade-right",
  aosDuration = 550,
}) {
  return (
    <div
      className={`flex gap-4 items-start bg-white p-5 sm:p-6 rounded-xl mb-8 shadow-sm border-l-4 border-accent ${className}`}
      data-aos={aos}
      data-aos-duration={aosDuration}
    >
      <span className="flex items-center justify-center w-10 h-10 rounded-full bg-accent/15 shrink-0">
        <HugeiconsIcon icon={icon} size={20} className="text-accent" />
      </span>
      <p className="mb-0 leading-relaxed text-text">{children}</p>
    </div>
  );
}

export default InfoBanner;
