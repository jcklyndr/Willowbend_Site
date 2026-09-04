import { useEffect, useRef, useState } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import useCountUp from "../../hooks/useCountUp";

const AOS_DURATION = 500;

function StatCard({ icon, value, label, bgClass, textClass, aosDelay = 0 }) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Normalize aosDelay to a number regardless of whether it arrives
  // as a string ("150") or number (150) from the data file
  const delay = Number(aosDelay) || 0;

  const match =
    typeof value === "string" || typeof value === "number"
      ? String(value).match(/^(\d+)(\D*)$/)
      : null;

  const isCountable = Boolean(match);
  const numericValue = isCountable ? parseInt(match[1], 10) : 0;
  const suffix = isCountable ? match[2] : "";

  const count = useCountUp(numericValue, 1500, isCountable && isVisible);

  useEffect(() => {
    if (!isCountable) return;

    let timeoutId;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeoutId = setTimeout(() => {
            setIsVisible(true);
          }, delay + AOS_DURATION);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => {
      observer.disconnect();
      clearTimeout(timeoutId);
    };
  }, [isCountable, delay]);

  return (
    <div
      ref={cardRef}
      data-aos="flip-left"
      data-aos-duration={AOS_DURATION}
      data-aos-delay={delay}
    >
      <div className={`p-6 rounded-xl text-center ${bgClass} ${textClass}`}>
        {icon && (
          <HugeiconsIcon
            icon={icon}
            size={28}
            strokeWidth={1.5}
            className="mb-2 inline-block"
          />
        )}
        <h3 className="text-2xl font-bold">
          {isCountable ? `${count}${suffix}` : value}
        </h3>
        <p className={`text-sm ${textClass ? "" : "text-gray-700"}`}>{label}</p>
      </div>
    </div>
  );
}

export default StatCard;
