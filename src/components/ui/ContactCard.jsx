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
      className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-linear-to-b from-white via-white to-secondary/15 p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={delay}
    >
      <div className="absolute right-6 top-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary shadow-md sm:h-20 sm:w-20">
        <HugeiconsIcon
          icon={icon}
          size={36}
          strokeWidth={2}
          className="text-white sm:size-10"
        />
      </div>

      <div className="relative z-10 pr-20">
        <h3 className="text-lg font-bold leading-snug text-secondary sm:text-xl">
          {title}
        </h3>
        {subtitle && <p className="mt-1 text-sm text-gray/70">{subtitle}</p>}
      </div>

      <div className="mt-10 flex flex-1 flex-col justify-end">
        <p className="text-xl font-extrabold text-text sm:text-2xl">
          {mainLine}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-gray">{description}</p>
      </div>
    </div>
  );
}

export default ContactCard;
