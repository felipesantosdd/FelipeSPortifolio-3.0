import React, { ReactNode, CSSProperties } from "react";

interface Props {
  index: number;
  children: ReactNode;
  quantity: number;
  style?: CSSProperties;
}

export const SliderItem: React.FC<Props> = ({ children, index, quantity, style }) => {
  return (
    <div
      aria-label="item"
      className="absolute inset-0 mx-11"
      style={{
        ...style, // Usa o estilo passado por props
        transform: `rotateY(calc(${index} * 360/${quantity} * 1deg)) translateZ(400px)`,
      }}
    >
      {children}
    </div>
  );
};
