function PrivacySection({ title, intro, paragraph, items, delay }) {
  return (
    <div
      className="mb-8"
      data-aos="fade-up"
      data-aos-duration="700"
      data-aos-delay={delay}
    >
      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-secondary">
        {title}
      </h3>

      {intro && <p className="text-gray mb-3 leading-relaxed">{intro}</p>}
      {paragraph && <p className="leading-relaxed text-text">{paragraph}</p>}

      {items && (
        <ul className="space-y-2 leading-relaxed text-text list-disc list-inside">
          {items.map((item, index) => (
            <li key={index}>
              {item.label && (
                <strong className="text-secondary">{item.label} </strong>
              )}
              {item.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default PrivacySection;
