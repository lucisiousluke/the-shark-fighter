import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const BackgroundSection = ({ imageData, overlayImageData, children }) => {
  return (
    <div className="background-container relative overflow-visible">
      {/* First (background) image */}
      <GatsbyImage
        image={imageData}
        alt="Background"
        className="absolute top-0 left-0 w-full h-96 object-cover z-[-1] rounded-xl"
      />

      {/* Second (overlay) image */}
      {overlayImageData && (
        <GatsbyImage
          image={overlayImageData}
          alt="Overlay"
          className="absolute -top-20 right-36 md:right-48 w-[425px] max-w-full h-auto object-contain z-10"
        />
      )}

      {/* Content */}
      <div className="content">{children}</div>
    </div>
  );
};

export default BackgroundSection;
