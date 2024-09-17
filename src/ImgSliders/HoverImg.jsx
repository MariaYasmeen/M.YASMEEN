import React from "react";
import './Images.css';

const HoverImg = ({ imageSrc, heading, subheading, buttonText }) => {
  return (
    <div className="stylish-hover-card">
      <div className="image-wrap">
        <img src={imageSrc} alt="Stylish Hover" className="styled-image" />
        <div className="hover-overlay">
          <div className="overlay-content">
            <h2 className="overlay-heading">{heading}</h2>
            <p className="overlay-subheading">{subheading}</p>
            <button className="overlay-button">{buttonText}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HoverImg;
