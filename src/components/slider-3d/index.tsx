import { SliderItem } from "./slider-item";

interface Props<T> {
  items: T[];
  sliderItem: (props: T) => JSX.Element;
}

export const Slider3D = function <T = unknown>({
  items,
  sliderItem,
}: Props<T>) {
  return (
    <div className="h-[50vh] overflow-visible scale-75 sm:scale-75 md:scale-100">
      <div
        aria-label="banner"
        className="w-full h-full text-center overflow-hidden relative"
      >
        <div
          aria-label="slider"
          className="absolute w-[60%] h-[60%] top-[10%] left-[calc(50%-30%)] animate-AutoRun"
          style={{
            transformStyle: "preserve-3d",
            transform: "perspective(400px)",
          }}
        >
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
