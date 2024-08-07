import { useState } from "react";
import { SketchPicker } from "react-color"; // Import the color picker from react-color
import "./styles.css"; // Import any custom styles

const ColorPicker = () => {
  const [color, setColor] = useState("#ffffff"); // Default color
  const [displayColorPicker, setDisplayColorPicker] = useState(false);

  const handleInputChange = (event) => {
    setColor(event.target.value);
  };

  const handleColorChange = (newColor) => {
    setColor(newColor.hex);
  };

  const handleBoxClick = () => {
    setDisplayColorPicker(!displayColorPicker);
  };

  return (
    <div className="color-picker-container">
      <input
        type="text"
        value={color}
        onChange={handleInputChange}
        className="color-input"
        placeholder="#ffffff"
      />
      <div
        className="color-box"
        style={{ backgroundColor: color }}
        onClick={handleBoxClick}
      />
      {displayColorPicker && (
        <div className="popover">
          <div className="cover" onClick={() => setDisplayColorPicker(false)} />
          <SketchPicker color={color} onChange={handleColorChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
