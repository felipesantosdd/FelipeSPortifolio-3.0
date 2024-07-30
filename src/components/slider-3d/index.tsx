import React from 'react';
import { Slider3DItem } from './slider-item';


interface Slider3DProps {
  items: React.ReactNode[];
}

const Slider3D: React.FC<Slider3DProps> = ({ items }) => {
  return (
    <div className="slider-3d">
      {items.map((item, index) => (
        <Slider3DItem
          key={index}
          index={index}
          quantity={items.length}
          style={{
            transform: `rotateY(${index * (360 / items.length)}deg) translateZ(600px)`,
            margin: '0 20px' // Adjust the margin as needed
          }}
        >
          {item}
        </Slider3DItem>
      ))}
    </div>
  );
};

export default Slider3D;
