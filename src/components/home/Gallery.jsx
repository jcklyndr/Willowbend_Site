// src/components/ui/ExpandableGallery.jsx
import { useState, useEffect, useRef } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";

const ITEMS_PER_PAGE = 4;

function Gallery({ images, itemsPerPage = ITEMS_PER_PAGE }) {
  const pages = [];
  for (let i = 0; i < images.length; i += itemsPerPage) {
    pages.push(images.slice(i, i + itemsPerPage));
  }
  const totalPages = pages.length;

  const [page, setPage] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    setActiveIndex(0);
  }, [page]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver((entries) => {
      setContainerWidth(entries[0].contentRect.width);
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const goToPage = (index) => {
    setPage((index + totalPages) % totalPages);
  };

  const imageWidth = containerWidth ? containerWidth * 0.6 : 0;

  return (
    <section className="bg-background px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* Section Header */}
      <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
        <span
          className="text-sm font-semibold uppercase tracking-widest text-tertiary"
          data-aos="fade-up"
        >
          Gallery
        </span>
        <h2
          className="mt-2 text-3xl font-bold text-secondary md:text-4xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          A Glimpse of Willowbend
        </h2>
        <p className="mt-4 text-gray" data-aos="fade-up" data-aos-delay="200">
          Take a look at the community spaces, homes, and surroundings that make
          Willowbend Subdivision a great place to live.
        </p>
      </div>

      <div data-aos="fade-up" data-aos-delay="300">
        <div
          ref={containerRef}
          className="flex gap-2 sm:gap-3 h-75 sm:h-95 md:h-115 w-full"
        >
          {pages[page].map((image, idx) => {
            const isActive = activeIndex === idx;
            return (
              <div
                key={image.id}
                onMouseEnter={() => setActiveIndex(idx)}
                onClick={() => setActiveIndex(idx)}
                style={{ flexGrow: isActive ? 5 : 1 }}
                className="relative flex-1 min-w-10 overflow-hidden rounded-2xl cursor-pointer transition-[flex-grow] duration-500 ease-in-out"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{ width: imageWidth || "100%" }}
                  className="absolute top-0 left-1/2 -translate-x-1/2 h-full max-w-none object-cover"
                />
                <div
                  className={`absolute inset-0 bg-secondary transition-opacity duration-500 ${
                    isActive ? "opacity-0" : "opacity-20"
                  }`}
                />
              </div>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={() => goToPage(page - 1)}
              aria-label="Previous images"
              className="text-secondary hover:text-primary transition-colors"
            >
              <HugeiconsIcon icon={ArrowLeft01Icon} size={22} />
            </button>

            <div className="flex gap-2">
              {pages.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goToPage(i)}
                  aria-label={`Go to page ${i + 1}`}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === page ? "w-6 bg-secondary" : "w-2 bg-gray/50"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => goToPage(page + 1)}
              aria-label="Next images"
              className="text-secondary hover:text-primary transition-colors"
            >
              <HugeiconsIcon icon={ArrowRight01Icon} size={22} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Gallery;
