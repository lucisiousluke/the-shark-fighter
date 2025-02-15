import React from "react";

const ProjectSection = ({
  children,
  twoColumn,
  fiftyFifty,
  bgColor = "bg-white",
  leftSide = false,
  extraClasses = "", // Add extraClasses to props with a default value
}) => {
  return (
    <section className={`${bgColor} py-20`}>
      <div className={`max-w-7xl mx-auto ${extraClasses} flex justify-center`}>
        <div
          className={`grid ${twoColumn ? "md:grid-cols-3" : ""} ${
            fiftyFifty ? "md:grid-cols-2" : ""
          } gap-x-6 items-start`}
        >
          {React.Children.map(children, (child, index) => {
            // 50/50 Layout
            if (fiftyFifty) {
              return <div className="md:col-span-1">{child}</div>;
            }
            // Two-Column Layout (1/3 + 2/3 with leftSide control)
            if (twoColumn) {
              const isFirstChild = index === 0;
              const childClass = leftSide
                ? isFirstChild
                  ? "md:col-span-2" // First child takes 2/3 on the left side
                  : "md:col-span-1" // Second child takes 1/3 on the right side
                : isFirstChild
                ? "md:col-span-1" // First child takes 1/3 on the left side
                : "md:col-span-2"; // Second child takes 2/3 on the right side

              return <div className={childClass}>{child}</div>;
            }
            return <div className="w-full">{child}</div>; // Default layout for single column
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
