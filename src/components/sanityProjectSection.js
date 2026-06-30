import React from "react";
import ProjectSection from "./projectSection";
import PortableTextRenderer from "./portableTextRenderer";

const SanityProjectSection = ({ section }) => {
  const { layout, background, centered, _rawColumns } = section;
  const bgColor = background === "slate-50" ? "bg-slate-50" : "bg-white";
  const extraClasses = centered ? "items-center" : "";

  const columns = (_rawColumns || []).map((column) => (
    <PortableTextRenderer key={column._key} content={column.content} />
  ));

  if (layout === "fiftyFifty") {
    return (
      <ProjectSection fiftyFifty bgColor={bgColor} extraClasses={extraClasses}>
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
      >
        {columns}
      </ProjectSection>
    );
  }

  return (
    <ProjectSection bgColor={bgColor} extraClasses={extraClasses}>
      {columns}
    </ProjectSection>
  );
};

export default SanityProjectSection;
