import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BackgroundSection = ({ imageData, children }) => {
  const image = getImage(imageData);
  return (
    <div className="background-container">
      <GatsbyImage
        image={imageData} // Pass imageData directly here
        alt="Background"
        className="relative top-0 left-0 w-full h-96 object-cover z-[-1] rounded-xl"
      />
      <div className="content">{children}</div>
    </div>
  );
};

export default BackgroundSection;
