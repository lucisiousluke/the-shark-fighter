import React from "react";

const ProjectSection = ({ children, twoColumn, bgColor = "bg-white" }) => {
  return (
    <section className={`${bgColor} py-12`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={twoColumn ? "grid md:grid-cols-3 gap-6 items-start" : ""}>
          {React.Children.map(children, (child, index) => (
            <div className={index === 0 ? "md:col-span-2" : "md:col-span-1"}>
              {child}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
