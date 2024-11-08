import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";

const BackgroundSection = ({ imageData, overlayImageData, children }) => {
  return (
    <div className="background-container relative">
      {/* First (background) image */}
      <GatsbyImage
        image={imageData} // Pass the background image data
        alt="Background"
        className="absolute top-0 left-0 w-full h-96 object-cover z-[-1] rounded-xl"
      />

      {/* Second (overlay) image */}
      {overlayImageData && (
        <GatsbyImage
          image={overlayImageData} // Pass the overlay image data
          alt="Overlay"
          className="absolute top-0 left-0 w-1/2 h-auto object-contain z-10 m-auto" // Example class for centering the overlay
        />
      )}

      {/* Content */}
      <div className="content">{children}</div>
    </div>
  );
};

export default BackgroundSection;