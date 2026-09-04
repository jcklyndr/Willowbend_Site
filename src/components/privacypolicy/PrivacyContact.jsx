function PrivacyContact({ title, intro, details, delay }) {
  return (
    <div
      className="mb-4 bg-background rounded-2xl p-6 sm:p-8 border border-accent/30"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={delay}
    >
      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-secondary">
        {title}
      </h3>
      <p className="text-gray mb-4 leading-relaxed">{intro}</p>

      <div className="space-y-2">
        {details.map((detail, index) => (
          <p key={index} className="leading-relaxed text-text">
            <strong className="text-secondary">{detail.label}:</strong>{" "}
            {detail.value}
          </p>
        ))}
      </div>
    </div>
  );
}

export default PrivacyContact;
