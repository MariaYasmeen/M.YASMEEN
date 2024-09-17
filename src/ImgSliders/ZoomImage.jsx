import React, { useState, useRef } from 'react';
import './Images.css'; // Custom styles for the zoom effect

const ZoomImage = ({ children }) => {
  const [zoom, setZoom] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);

  const handleMouseEnter = () => setZoom(true);
  const handleMouseLeave = () => setZoom(false);

  const handleMouseMove = (e) => {
    if (containerRef.current) {
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = e.clientX - left;
      const y = e.clientY - top;
      setCursorPos({ x, y });
    }
  };

  return (
    <div
      ref={containerRef}
      className="zoom-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div
        className={`zoom-overlay ${zoom ? 'zoom' : ''}`}
        style={{
          backgroundImage: `url(${children.props.src})`,
          backgroundPosition: `-${cursorPos.x * 2}px -${cursorPos.y * 2}px`,
          backgroundSize: '200% 200%',
          backgroundRepeat: 'no-repeat',
        }}
      />
      {children}
    </div>
  );
};

export default ZoomImage;
