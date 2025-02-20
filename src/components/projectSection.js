import React from "react";

const ProjectSection = ({
  children,
  oneThirdTwoThird = false, // Renamed for clarity
  fiftyFifty = false,
  bgColor = "bg-white",
  leftSide = false,
  extraClasses = "",
}) => {
  return (
    <section className={`${bgColor} py-20`}>
      <div className={`max-w-7xl mx-auto ${extraClasses} flex justify-center`}>
        <div
          className={`grid gap-x-6 items-start ${
            fiftyFifty ? "md:grid-cols-2" : ""
          } ${oneThirdTwoThird ? "md:grid-cols-3" : "md:grid-cols-1"}`}
        >
          {React.Children.map(children, (child, index) => {
            if (fiftyFifty) {
              return <div className="md:col-span-1">{child}</div>;
            }

            if (oneThirdTwoThird) {
              const isFirstChild = index === 0;
              const childClass = leftSide
                ? isFirstChild
                  ? "md:col-span-2" // 2/3 on the left
                  : "md:col-span-1" // 1/3 on the right
                : isFirstChild
                ? "md:col-span-1" // 1/3 on the left
                : "md:col-span-2"; // 2/3 on the right

              return <div className={childClass}>{child}</div>;
            }

            return <div className="w-full">{child}</div>;
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
