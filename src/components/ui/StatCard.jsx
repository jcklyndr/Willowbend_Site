import { HugeiconsIcon } from "@hugeicons/react";

function StatCard({ icon, value, label, bgClass, textClass, aosDelay }) {
  return (
    <div data-aos="flip-left" data-aos-duration="500" data-aos-delay={aosDelay}>
      <div className={`p-6 rounded-xl text-center ${bgClass} ${textClass}`}>
        {icon && (
          <HugeiconsIcon
            icon={icon}
            size={28}
            strokeWidth={1.5}
            className="mb-2 inline-block"
          />
        )}
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className={`text-sm ${textClass ? "" : "text-gray-700"}`}>{label}</p>
      </div>
    </div>
  );
}

export default StatCard;
