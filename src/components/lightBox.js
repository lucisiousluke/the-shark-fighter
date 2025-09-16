import React, { useState, useEffect } from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Thumbnail = ({ image, index, onClick }) => {
  const thumb = getImage(image.image);
  return (
    <div
      className="cursor-pointer rounded shadow hover:opacity-75 transition-opacity"
      onClick={() => onClick(index)}
    >
      <div className="w-32 h-32 flex items-center justify-center bg-gray-100 rounded">
        <GatsbyImage
          image={thumb}
          alt={image.alt}
          className="w-full h-full" // wrapper sizing
          imgStyle={{
            objectFit: "contain",   // 👈 override Gatsby default
            width: "100%",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

const Modal = ({ image, onClose, onPrev, onNext }) => {
  const img = getImage(image.image);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
      {/* Close */}
      <button
        className="absolute top-4 right-4 text-white text-3xl font-bold hover:text-cyan-500 transition-colors"
        onClick={onClose}
        aria-label="Close Lightbox"
      >
        &times;
      </button>

      {/* Prev */}
      <button
        className="absolute left-4 text-white text-3xl font-bold hover:text-cyan-500 transition-colors"
        onClick={onPrev}
        aria-label="Previous Image"
      >
        &#8592;
      </button>

      {/* Image Wrapper */}
      <div className="flex items-center justify-center max-w-5xl max-h-[80vh] w-full h-full px-4">
        <GatsbyImage
          image={img}
          alt={image.alt}
          className="w-auto h-auto max-w-full max-h-[80vh]"
          imgStyle={{
            objectFit: "contain", // keep full image, no crop
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      {/* Next */}
      <button
        className="absolute right-4 text-white text-3xl font-bold hover:text-cyan-500 transition-colors"
        onClick={onNext}
        aria-label="Next Image"
      >
        &#8594;
      </button>
    </div>
  );
};


// Lightbox Component
const Lightbox = ({ images }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const showPrev = () =>
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );

  const showNext = () =>
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
      if (event.key === "ArrowLeft") showPrev();
      if (event.key === "ArrowRight") showNext();
    };

    if (isOpen) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // ✅ Safe to conditionally return *after* hooks
  if (!images || images.length === 0) return null;

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="max-w-7xl mx-auto flex justify-center">
      {/* Responsive Thumbnails */}
      <div className="flex flex-wrap gap-4 mt-8">
        {images.map((img, index) => (
          <Thumbnail
            key={index}
            image={img}
            index={index}
            onClick={openLightbox}
          />
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <Modal
          image={images[currentIndex]}
          onClose={() => setIsOpen(false)}
          onPrev={showPrev}
          onNext={showNext}
        />
      )}
    </div>
  );
};


export default Lightbox;
