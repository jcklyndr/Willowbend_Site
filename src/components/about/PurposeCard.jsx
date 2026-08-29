import { HugeiconsIcon } from "@hugeicons/react";

function PurposeCard({ icon, title, description, aosDelay }) {
  return (
    <div data-aos="zoom-in-up" data-aos-delay={aosDelay}>
      <div className="h-full shadow-2xl rounded-lg p-6 text-center bg-white">
        <HugeiconsIcon
          icon={icon}
          size={40}
          strokeWidth={1.5}
          className="text-(--primary-color) mb-3 inline-block"
        />
        <h6 className="font-bold mb-2 text-(--primary-color)">{title}</h6>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default PurposeCard;
