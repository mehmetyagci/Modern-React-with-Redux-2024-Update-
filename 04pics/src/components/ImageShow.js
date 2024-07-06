import React from 'react';

function ImageShow({ image }) {
  if (!image || !image.urls || !image.urls.small) {
    return null; // Avoid rendering if the image properties are not available
  }

  const containerStyle = {
    margin: '10px',
    textAlign: 'center',
  };

  const imageStyle = {
    maxWidth: '400px', // Adjust the size as needed
    height: 'auto',
    objectFit: 'cover',
  };

  const descriptionStyle = {
    fontSize: '14px',
    color: '#666',
  };

  return (
    <div style={containerStyle}>
      <img
        src={image.urls.small}
        alt={image.alt_description || 'Image'}
        style={imageStyle}
      />
      {image.alt_description && (
        <p style={descriptionStyle}>
          {image.alt_description}
        </p>
      )}
    </div>
  );
}

export default ImageShow;
