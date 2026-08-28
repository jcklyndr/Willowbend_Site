import React from "react";

function ValueItem({ icon, title, description }) {
  return (
    <div className="flex">
      <i className={`bi ${icon} text-(--primary-color) text-2xl shrink-0`}></i>
      <div className="ml-3">
        <h6 className="font-bold mb-2">{title}</h6>
        <p className="text-sm text-white/80">{description}</p>
      </div>
    </div>
  );
}

export default ValueItem;
