function PurposeCard({ icon, title, description, aosDelay }) {
  return (
    <div data-aos="zoom-in-up" data-aos-delay={aosDelay}>
      <div className="h-full shadow-sm rounded-lg p-6 text-center">
        <i
          className={`bi ${icon} text-4xl text-(--primary-color) mb-3 inline-block`}
        ></i>
        <h6 className="font-bold mb-2 text-(--primary-color)">{title}</h6>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
}

export default PurposeCard;
