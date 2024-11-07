import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BackgroundSection = ({ imageData, children }) => {
  const image = getImage(imageData);
  return (
    <div className="background-container">
      <GatsbyImage
        image={imageData} // Pass imageData directly here
        alt="Background"
        className="h-96 rounded-xl"
      />
      <div className="content">{children}</div>
    </div>
  );
};

export default BackgroundSection;
