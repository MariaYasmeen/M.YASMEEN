import React from 'react';
import './Components.css'; // Custom styles for the loader

const ImageLoader = ({ isLoading }) => {
  return (
    <>
      {isLoading && (
        <div className="loader-text">
          M.YASMEEN
          <span style={{ fontSize: '10px' }}>Loading..</span>
        </div>
      )}
    </>
  );
};

export default ImageLoader;
