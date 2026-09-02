function FaqFilterChips({ categories, activeCategory, onSelect }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          type="button"
          onClick={() => onSelect(category)}
          className={`px-4 py-2 rounded-full text-sm font-semibold border transition-colors ${
            activeCategory === category
              ? "bg-primary text-white border-primary"
              : "bg-white text-gray border-gray/30 hover:border-primary hover:text-primary"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default FaqFilterChips;
