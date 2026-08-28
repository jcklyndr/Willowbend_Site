function StatCard({ value, label, bgClass, textClass, aosDelay }) {
  return (
    <div data-aos="flip-left" data-aos-duration="500" data-aos-delay={aosDelay}>
      <div
        className={`p-6 border rounded-xl text-center ${bgClass} ${textClass}`}
      >
        <h3 className="text-2xl font-bold">{value}</h3>
        <p className={`text-sm ${textClass ? "" : "text-gray-500"}`}>{label}</p>
      </div>
    </div>
  );
}

export default StatCard;
