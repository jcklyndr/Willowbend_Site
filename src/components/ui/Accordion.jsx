import React, { useState, useEffect } from "react";
import AOS from "aos";
import AccordionItem from "./AccordionItem";

function Accordion({
  items,
  allowMultiple = false,
  openIds: controlledOpenIds,
  onToggle: controlledOnToggle,
}) {
  const [internalOpenIds, setInternalOpenIds] = useState([]);

  const isControlled = controlledOpenIds !== undefined;
  const openIds = isControlled ? controlledOpenIds : internalOpenIds;

  const isOpen = (id) => openIds.includes(id);

  const handleToggle = (id) => {
    if (isControlled) {
      controlledOnToggle(id);
      return;
    }
    setInternalOpenIds((current) => {
      const alreadyOpen = current.includes(id);
      if (allowMultiple) {
        return alreadyOpen
          ? current.filter((openId) => openId !== id)
          : [...current, id];
      }
      return alreadyOpen ? [] : [id];
    });
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      AOS.refresh();
    }, 350);
    return () => clearTimeout(timeout);
  }, [openIds]);

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={item.id}
          id={item.id}
          title={item.title}
          subtitle={item.subtitle}
          icon={item.icon}
          iconColor={item.iconColor}
          itemCount={item.itemCount}
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
