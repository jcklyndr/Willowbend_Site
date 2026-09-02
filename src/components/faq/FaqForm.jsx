import { HugeiconsIcon } from "@hugeicons/react";
import {
  HelpCircleIcon,
  Sent02Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";

function FaqForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up submission logic
  };

  return (
    <div
      className="bg-white rounded-lg shadow-sm p-6 lg:p-8"
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="300"
    >
      <div className="flex items-center gap-2 mb-2">
        <HugeiconsIcon
          icon={HelpCircleIcon}
          size={22}
          className="text-tertiary"
        />
        <h5 className="font-bold text-secondary text-lg">
          Have More Questions?
        </h5>
      </div>
      <p className="text-gray text-sm mb-5">
        Can't find what you need? Send a message directly to the HOA
        administrative desk.
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="fullName"
            className="block text-sm font-semibold text-gray mb-1"
          >
            Your Name
          </label>
          <input
            type="text"
            id="fullName"
            placeholder="e.g., Juan Dela Cruz"
            className="w-full rounded-md border border-gray/30 p-2.5 text-text-color focus:outline-none focus:ring-2 focus:ring-tertiary"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="blockLot"
            className="block text-sm font-semibold text-gray mb-1"
          >
            Block & Lot (Optional)
          </label>
          <input
            type="text"
            id="blockLot"
            placeholder="e.g., Block 4, Lot 12"
            className="w-full rounded-md border border-gray/30 p-2.5 text-text-color focus:outline-none focus:ring-2 focus:ring-tertiary"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="questionInput"
            className="block text-sm font-semibold text-gray mb-1"
          >
            Your Question or Inquiry
          </label>
          <textarea
            id="questionInput"
            rows={4}
            placeholder="Describe your concern or inquiry here..."
            className="w-full rounded-md border border-gray/30 p-2.5 text-text-color focus:outline-none focus:ring-2 focus:ring-tertiary resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-fourth-color text-white font-bold py-3 rounded-md transition-colors"
        >
          <span>Submit Question</span>
          <HugeiconsIcon icon={Sent02Icon} size={18} />
        </button>
      </form>

      <div className="mt-4 pt-4 border-t border-gray/20 flex items-center justify-center gap-1.5 text-gray text-xs">
        <HugeiconsIcon icon={Clock01Icon} size={14} />
        Admin office responds within 24–48 hours (Mon–Sat)
      </div>
    </div>
  );
}

export default FaqForm;
