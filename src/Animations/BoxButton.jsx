import React from 'react';
import './AnimationCss.css'; // Make sure to import your CSS file

const BoxButton = ({ buttonName }) => {
  return (
    <div className="container">
      <a href="#" className="button type--A">
        <div className="button__line"></div>
        <div className="button__line"></div>
        <span className="button__text">{buttonName}</span>
        <div className="button__drow1"></div>
        <div className="button__drow2"></div>
      </a>
    </div>
  );
};

export default BoxButton;
