import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ items, allowMultiple = false }) {
  const [openIds, setOpenIds] = useState([]);

  const isOpen = (id) => openIds.includes(id);

  const handleToggle = (id) => {
    setOpenIds((current) => {
      const alreadyOpen = current.includes(id);
      if (allowMultiple) {
        return alreadyOpen
          ? current.filter((openId) => openId !== id)
          : [...current, id];
      }
      return alreadyOpen ? [] : [id];
    });
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          icon={item.icon}
          isOpen={isOpen(item.id)}
          onToggle={() => handleToggle(item.id)}
          aosDelay={100 + index * 50}
        >
          {item.content}
        </AccordionItem>
      ))}
    </div>
  );
}

export default Accordion;
