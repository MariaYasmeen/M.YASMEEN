import React from "react";
 import "./Images.css"
import { Link } from "react-router-dom";

const Image = ({ imageSrc, heading, subheading, buttonText, link }) => {
  return (
    <div className="image-hover-card">
      <div className="image-container">
        <img src={imageSrc} alt="Hover" className="card-image" />
        <div className="overlay">
          <div className="text">
            <h2>{heading}</h2>
            <p>{subheading}</p>
            <div style={{paddingTop:"22px"}}>
            <Link to={link}  className="action-button"  >{buttonText}</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Image;
