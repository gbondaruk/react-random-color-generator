import complementaryColors from 'complementary-colors';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function RandomColorBox() {
  const initialColor = randomColor();
  const [rancolor, setColor] = useState(initialColor.rancolor);

  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '20px',
        }}
      >
        <button
          onClick={() => {
            const newColor = randomColor();
            setColor(newColor.rancolor);
          }}
        >
          Generate
        </button>
      </div>
      <div
        style={{
          backgroundColor: initialColor,
          borderRadius: '20px',
          height: '25vh',
          width: '50vw',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Generated Color: {rancolor}
      </div>
    </>
  );
}
