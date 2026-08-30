import { HugeiconsIcon } from "@hugeicons/react";
import { CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";

function Card({
  image,
  imageAlt = "",
  eyebrow,
  title,
  subtitle,
  description,
  listTitle,
  listItems = [],
  className = "",
  aos,
  aosDuration = 800,
  aosDelay = 0,
}) {
  return (
    <div
      className={`bg-white rounded-lg shadow-sm overflow-hidden flex flex-col ${className}`}
      data-aos={aos}
      data-aos-duration={aosDuration}
      data-aos-delay={aosDelay}
    >
      {image && (
        <div className="relative w-full aspect-4/3 overflow-hidden bg-secondary/10 group">
          <img
            src={image}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
      )}

      <div className="p-5 sm:p-6 flex flex-col flex-1">
        {eyebrow && (
          <p className="text-xs font-semibold uppercase tracking-wide text-gray mb-1">
            {eyebrow}
          </p>
        )}

        {title && (
          <h3 className="text-lg font-bold text-secondary mb-1">{title}</h3>
        )}

        {subtitle && (
          <p className="text-primary font-semibold mb-3">{subtitle}</p>
        )}

        {description && (
          <p className="text-text text-sm leading-relaxed mb-4">
            {description}
          </p>
        )}

        {listItems.length > 0 && (
          <div className="mt-auto">
            {listTitle && (
              <p className="text-sm font-semibold text-secondary mb-2">
                {listTitle}
              </p>
            )}
            <ul className="space-y-2">
              {listItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-text"
                >
                  <HugeiconsIcon
                    icon={CheckmarkCircle02Icon}
                    size={16}
                    className="text-tertiary mt-0.5 shrink-0"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Card;
