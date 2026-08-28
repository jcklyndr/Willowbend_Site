import React from "react";
import ValueItem from "./ValueItem";

const values = [
  {
    icon: "bi-hand-thumbs-up",
    title: "Community Cooperation",
    description:
      "We believe that Willowbend thrives when residents work together. Cooperation and mutual support are the foundation of our community.",
  },
  {
    icon: "bi-unlock",
    title: "Transparency",
    description:
      "We operate with openness and honesty. Our officers and committees share information openly and explain decisions that affect our community.",
  },
  {
    icon: "bi-shield-check",
    title: "Responsibility",
    description:
      "Each resident has a responsibility to our community. By following rules and contributing to maintenance, we all ensure Willowbend remains safe and beautiful.",
  },
  {
    icon: "bi-arrow-up-right",
    title: "Continuous Improvement",
    description:
      "We are committed to improving life in Willowbend. We listen to feedback, implement improvements, and work toward making our community even better.",
  },
  {
    icon: "bi-lock",
    title: "Safety & Security",
    description:
      "The safety and well-being of our residents is paramount. We maintain security personnel, enforce safety protocols, and address concerns promptly.",
  },
  {
    icon: "bi-heart",
    title: "Inclusivity",
    description:
      "Willowbend is home to diverse families and individuals. We value inclusivity and ensure all residents feel welcome and respected.",
  },
];

function ValuesSection() {
  return (
    <div
      className="mb-16 bg-(--secondary-color) p-8 md:p-12 rounded-lg text-white"
      data-aos="fade-up"
      data-aos-duration="1300"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">
        Our Community Values
      </h2>
      <p className="text-center text-white/80 mb-10">
        These principles guide how we manage Willowbend and how we work together
        as a community:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {values.map((value) => (
          <ValueItem key={value.title} {...value} />
        ))}
      </div>
    </div>
  );
}

export default ValuesSection;
