import StatCard from "./StatCard";

const stats = [
  {
    value: "155+",
    label: "Households",
    bgClass: "bg-(--tertiary-color)",
    textClass: "",
    aosDelay: "50",
  },
  {
    value: "24/7",
    label: "Security Patrol",
    bgClass: "bg-(--secondary-color)",
    textClass: "text-white",
    aosDelay: "100",
  },
  {
    value: "6",
    label: "Active Officers",
    bgClass: "bg-(--primary-color)",
    textClass: "text-white",
    aosDelay: "150",
  },
  {
    value: "2015",
    label: "Year Established",
    bgClass: "bg-(--fourth-color)",
    textClass: "text-white",
    aosDelay: "200",
  },
];

function StatsSection() {
  return (
    <div className="mb-16">
      <h2
        className="text-2xl font-bold mb-6 text-center text-(--primary-color)"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        Willowbend by the Numbers
      </h2>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  );
}

export default StatsSection;
