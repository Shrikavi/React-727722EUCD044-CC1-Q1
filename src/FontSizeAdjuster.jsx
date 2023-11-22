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
    <div>
      
      <button onClick={increaseFontSize}>Increase</button>
      <button onClick={decreaseFontSize}>Decrease</button>
      <p style={{ fontSize: `${fontSize}px`, margin: '10px 0' }}>
        Text with adjustable size
      </p>
    </div>
  );
};

export default FontSizeAdjuster;