import React from "react";
import Accordion from "./accordion";

const AccordionGroup = ({ section, heading }) => {
  const bgColor = section.background === "slate-50" ? "bg-slate-50" : "bg-white";

  return (
    <section className={`${bgColor} py-20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {heading && (
          <h1 className="text-4xl font-bold text-cyan-500 mb-8">{heading}</h1>
        )}
        {section.title && (
          <h2 className="text-3xl font-semibold font-thin text-cyan-500 mb-6">{section.title}</h2>
        )}
        {(section.items || []).map((item) => (
          <Accordion key={item._key} title={item.title} body={item.body} />
        ))}
      </div>
    </section>
  );
};

export default AccordionGroup;
