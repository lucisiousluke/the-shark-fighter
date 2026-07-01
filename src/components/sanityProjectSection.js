import React from "react";
import ProjectSection from "./projectSection";
import PortableTextRenderer from "./portableTextRenderer";

const SanityProjectSection = ({ section, heading }) => {
  const { layout, background, centered, columns: rawColumns } = section;
  const bgColor = background === "slate-50" ? "bg-slate-50" : "bg-white";
  const extraClasses = centered ? "items-center" : "";

  const columns = (rawColumns || []).map((column) => (
    <PortableTextRenderer key={column._key} content={column.content} />
  ));

  if (layout === "fiftyFifty") {
    return (
      <ProjectSection fiftyFifty bgColor={bgColor} extraClasses={extraClasses} heading={heading}>
        {columns}
      </ProjectSection>
    );
  }

  if (layout === "oneThirdLeft" || layout === "oneThirdRight") {
    return (
      <ProjectSection
        oneThirdTwoThird
        leftSide={layout === "oneThirdLeft"}
        bgColor={bgColor}
        extraClasses={extraClasses}
        heading={heading}
      >
        {columns}
      </ProjectSection>
    );
  }

  return (
    <ProjectSection bgColor={bgColor} extraClasses={extraClasses} heading={heading}>
      {columns}
    </ProjectSection>
  );
};

export default SanityProjectSection;
