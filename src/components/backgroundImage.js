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
          style={{
            position: 'absolute',
            top: '-80px',
            right: '150px',
            width: '425px',
            zIndex: 10,
            objectFit: 'contain',
          }}
          className="rounded-xl"
        />
      )}

      {/* Content */}
      <div className="content">{children}</div>
    </div>
  );
};

export default BackgroundSection;
