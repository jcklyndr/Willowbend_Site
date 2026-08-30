import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

function AccordionItem({
  id,
  title,
  icon,
  isOpen,
  onToggle,
  aosDelay,
  children,
}) {
  const panelId = `panel-${id}`;
  const buttonId = `button-${id}`;

  return (
    <div
      className="rounded-lg mb-3 shadow-sm overflow-hidden bg-white"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay={aosDelay}
    >
      <h2 className="m-0">
        <button
          id={buttonId}
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className="w-full flex items-center justify-between gap-3 px-4 py-3 sm:px-5 sm:py-4 font-semibold text-left text-text hover:bg-background transition-colors"
        >
          <span className="flex items-center gap-2">
            {icon && (
              <HugeiconsIcon
                icon={icon}
                size={22}
                className="text-primary shrink-0"
              />
            )}
            {title}
          </span>
          <HugeiconsIcon
            icon={ArrowDown01Icon}
            size={18}
            className={`text-gray shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
      </h2>

      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="px-4 py-3 sm:px-5 sm:py-4 bg-background text-sm sm:text-base leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
