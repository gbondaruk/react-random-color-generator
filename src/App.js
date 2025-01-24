import './App.css';
import { colord } from 'colord';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor);
  // Function to change color using randomColor
  const changeColor = () => {
    const newColor = randomColor();
    setColor(newColor);
  };

  // Translate random color to invert for text color
  const textColor = colord(color).invert().toHex();

  // Div with generation button, text, hex value of currently displayed color
  return (
    <div
      className="App"
      style={{
        backgroundColor: color,
      }}
    >
      <button
        style={{
          color: textColor,
          boxShadow: '-1px 1px 5px black',
        }}
        onClick={changeColor}
      >
        Generate
      </button>

      <p
        style={{
          color: textColor,
          textShadow: '0.5px 0.5px 1px black',
        }}
      >
        Generated Color: {color}
      </p>
    </div>
  );
}
