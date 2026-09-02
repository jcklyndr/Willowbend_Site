import { HugeiconsIcon } from "@hugeicons/react";
import { BubbleChatQuestionIcon, Sent02Icon } from "@hugeicons/core-free-icons";

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
      <div className="flex items-center gap-3 mb-4">
        <HugeiconsIcon
          icon={BubbleChatQuestionIcon}
          size={28}
          className="text-primary"
        />
        <label
          htmlFor="questionInput"
          className="font-bold text-secondary text-lg"
        >
          Have more questions?
        </label>
      </div>

      <form onSubmit={handleSubmit}>
        <textarea
          id="questionInput"
          rows={10}
          placeholder="Type your question here..."
          className="w-full rounded-md border border-gray/30 p-3 mb-4 text-text-color focus:outline-none focus:ring-2 focus:ring-tertiary resize-none"
        />
        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-fourth-color text-white font-bold py-3 rounded-md transition-colors"
        >
          Submit Question
          <HugeiconsIcon icon={Sent02Icon} size={18} />
        </button>
      </form>
    </div>
  );
}

export default FaqForm;
