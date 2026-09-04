import siteIcon from "../../assets/images/site_icon.png";

function WatermarkSection({ children, className = "" }) {
  return (
    <section className={`relative overflow-hidden py-10 ${className}`}>
      {/* Watermark background */}
      <img
        src={siteIcon}
        alt=""
        aria-hidden="true"
        className="pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 opacity-5 z-0"
      />
      <div className="relative max-w-6xl mx-auto px-4">{children}</div>
    </section>
  );
}

export default WatermarkSection;
