// ButtonFlip.jsx
import React from 'react';
import './AnimationCss.css'; // Make sure to import your CSS file

const ButtonFlip = ({ frontText, backText, className = '', ...props }) => {
  return (
    <a
      href="#"
      className={`btn-flip ${className}`}
      data-front={frontText}
      data-back={backText}
      {...props}
    >
      {/* Optionally, you can include content here if needed */}
    </a>
  );
};

export default ButtonFlip;
