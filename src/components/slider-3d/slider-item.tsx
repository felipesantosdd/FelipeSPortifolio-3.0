import { ReactNode } from "react";

interface Slider3DItemProps {
  children: React.ReactNode;
  index: number;
  quantity: number;
  style?: React.CSSProperties; // Adiciona a propriedade style à interface Props
}

export const Slider3DItem: React.FC<Slider3DItemProps> = ({ children, index, quantity, style }) => {
  return (
    <div className="slider-3d-item" style={style}>
      {children}
    </div>
  );
};
