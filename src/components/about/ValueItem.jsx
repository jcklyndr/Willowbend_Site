import { HugeiconsIcon } from "@hugeicons/react";

function ValueItem({ icon, title, description }) {
  return (
    <div className="flex">
      <HugeiconsIcon
        icon={icon}
        size={28}
        strokeWidth={1.5}
        className="text-(--tertiary-color) shrink-0"
      />
      <div className="ml-3">
        <h6 className="font-bold mb-2">{title}</h6>
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </div>
  );
}

export default ValueItem;
