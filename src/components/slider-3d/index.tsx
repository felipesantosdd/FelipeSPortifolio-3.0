import Image from "next/image";
import { SliderItem } from "./slider-item";
import backgroundImage from "@/assets/images/icon.png";

interface Props<T> {
  items: T[];
  sliderItem: (props: T) => JSX.Element;
}

export const Slider3D = function <T = unknown>({
  items,
  sliderItem,
}: Props<T>) {
  return (
    <div className="h-[50vh] scale-100">
      <div
        aria-label="banner"
        className="w-full h-full text-center overflow-hidden relative"
      >
        <div
          aria-label="slider"
          className="absolute w-[60%] h-[60%] top-[10%] left-[calc(50%-30%)] animate-AutoRun flex justify-center items-center"
          style={{
            transformStyle: "preserve-3d",
            transform: "perspective(400px)",
          }}
        >
          <div className="absolute w-full h-full flex justify-center items-center">
            <Image
              src={backgroundImage}
              height={250}
              width={250}
              className="rounded-full"
              alt="Background"
            />
          </div>
          {items.map((item, index) => (
            <SliderItem
              index={index}
              key={index}
              quantity={items.length}
              style={{
                transform: `rotateY(${index * (360 / items.length)}deg) translateZ(600px)`,
                margin: '0 20px' // Ajuste a margem conforme necessário
              }}
            >
              {sliderItem(item)}
            </SliderItem>
          ))}
        </div>
      </div>
    </div>
  );
};
