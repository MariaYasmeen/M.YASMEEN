import React, { useState } from 'react';
import './Images.css'; // Custom styles for the slider
import ZoomImage from './ZoomImage';

const ProductSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="image-slider">
      {images.length > 1 && (
        <div className="thumbnail-container">
          {images.map((image, index) => (
            <div
              key={index}
              className={`thumbnail ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleThumbnailClick(index)}
            >
              <img src={image} alt={`Thumbnail ${index}`} />
            </div>
          ))}
        </div>
      )}
      <div className="display-image">
        <ZoomImage>
          <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </ZoomImage>
      </div>
    </div>
  );
};

export default ProductSlider;
