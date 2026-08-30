import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowDown01Icon } from "@hugeicons/core-free-icons";

function AccordionItem({
  id,
  title,
  subtitle,
  icon,
  iconColor = "--primary-color",
  itemCount,
  isOpen,
  onToggle,
  aosDelay,
  children,
}) {
  const panelId = `panel-${id}`;
  const buttonId = `button-${id}`;

  return (
    <div
      id={id}
      className={`scroll-mt-24 rounded-xl mb-3 bg-white overflow-hidden transition-shadow duration-300 ${
        isOpen ? "shadow-md" : "shadow-sm hover:shadow-md"
      }`}
      style={{
        borderLeft: `4px solid ${isOpen ? `var(${iconColor})` : "transparent"}`,
      }}
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
          className="w-full flex items-center gap-4 px-4 py-4 sm:px-5 text-left transition-colors hover:bg-(--background-color)"
        >
          {icon && (
            <span
              className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
              style={{
                backgroundColor: `color-mix(in srgb, var(${iconColor}) 12%, white)`,
              }}
            >
              <HugeiconsIcon
                icon={icon}
                size={20}
                style={{ color: `var(${iconColor})` }}
              />
            </span>
          )}

          <span className="flex-1 min-w-0">
            <span className="flex items-center gap-2 flex-wrap">
              <span className="font-semibold text-(--text-color)">{title}</span>
              {typeof itemCount === "number" && (
                <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-(--background-color) text-(--gray)">
                  {itemCount} guideline{itemCount !== 1 ? "s" : ""}
                </span>
              )}
            </span>
            {subtitle && !isOpen && (
              <span className="block text-sm text-(--gray) mt-0.5 truncate">
                {subtitle}
              </span>
            )}
          </span>

          <HugeiconsIcon
            icon={ArrowDown01Icon}
            size={18}
            className={`shrink-0 text-(--gray) transition-transform duration-300 ${
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
          <div className="px-4 pb-5 sm:px-5 pt-1 bg-(--background-color) text-sm sm:text-base leading-relaxed text-(--text-color)">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
