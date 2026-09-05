import { HugeiconsIcon } from "@hugeicons/react";

function ContactCard({
  icon,
  title,
  subtitle,
  mainLine,
  description,
  delay = 0,
}) {
  return (
    <div
      className="flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm transition-shadow hover:shadow-md"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={delay}
    >
      {/* Header strip */}
      <div className="flex items-center gap-4 bg-secondary px-6 py-5 sm:px-7">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/15">
          <HugeiconsIcon
            icon={icon}
            size={26}
            strokeWidth={2}
            className="text-white"
          />
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-bold leading-snug text-white sm:text-xl">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-0.5 text-sm text-white/70">{subtitle}</p>
          )}
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
        <p className="break-words text-lg font-extrabold text-text [overflow-wrap:anywhere] sm:text-2xl">
          {mainLine}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray">{description}</p>
      </div>
    </div>
  );
}

export default ContactCard;
