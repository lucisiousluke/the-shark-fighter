import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const BackgroundSection = ({ imageData, children }) => {
  const image = getImage(imageData);

  return (
    <div className="background-container">
      <GatsbyImage
        image={image}
        alt="Background"
        className="background-image"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />
      <div className="content">{children}</div>
    </div>
  );
};

export default BackgroundSection;