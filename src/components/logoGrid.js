import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';

export const LogoGrid = ({ logos }) => {
  return (
    <section className="my-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {logos.map((logo) => {
          const imageData = logo.childImageSharp.gatsbyImageData; // Direct access
          return (
            <div key={logo.name} className="grayscale flex justify-center items-center rounded-xl hover:grayscale-0 transition-all duration-100">
              {imageData ? (
                <GatsbyImage image={imageData} alt={`${logo.name} logo`}/>
              ) : (
                <p>Image not available</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default LogoGrid;
