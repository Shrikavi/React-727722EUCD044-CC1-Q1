import React, { useState } from 'react';

const FontSizeAdjuster = ({ defaultSize }) => {
  const [fontSize, setFontSize] = useState(defaultSize);

  const increaseFontSize = () => {
    setFontSize(fontSize + 5);
  };

  const decreaseFontSize = () => {
    setFontSize(fontSize - 2);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <button
        style={{
          marginRight: '10px',
          backgroundColor: 'green',
          color: 'white',
        }}
        onClick={increaseFontSize}
      >
        Increase
      </button>
      <button
        style={{
          backgroundColor: 'red',
          color: 'white',
        }}
        onClick={decreaseFontSize}
      >
        Decrease
      </button>
      <p style={{ fontSize: `${fontSize}px`, margin: '10px 0' }}>
        Text with adjustable size
      </p>
    </div>
  );
};

export default FontSizeAdjuster;
