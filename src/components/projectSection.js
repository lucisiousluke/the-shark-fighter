import React from "react";

const ProjectSection = ({ children, twoColumn, bgColor = "bg-white", leftSide = false }) => {
  return (
    <section className={`${bgColor} py-12`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`grid ${twoColumn ? "md:grid-cols-3" : ""} gap-6 items-start`}>
          {React.Children.map(children, (child, index) => {
            // When twoColumn is true, divide the layout into 3 equal parts
            if (twoColumn) {
              // If leftSide is true, the first child takes 2/3, the second takes 1/3 on the left
              // If leftSide is false, the first child takes 1/3 on the left, the second takes 2/3
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
