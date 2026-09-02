import Accordion from "../ui/Accordion";
import { faqData } from "../../data/faqData";

function FaqAccordionSection() {
  return <Accordion items={faqData} allowMultiple={true} />;
}

export default FaqAccordionSection;
