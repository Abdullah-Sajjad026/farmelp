import React from "react";
import { SassyCarouselItem } from "../..";

import "./full-bleed.scss";

type FullBleedCarouselProps = {
  items: SassyCarouselItem[];
  activeItem: SassyCarouselItem;
  activeIndex: number;
  moveNext: () => void;
  nextItem: SassyCarouselItem;
};

export default function FullBleedCarousel({
  items,
  activeItem,
  activeIndex,
  moveNext,
  nextItem,
}: FullBleedCarouselProps) {
  return (
    <div className="full-carousel">
      {items.map((item, index) => {
        return (
          <div
            className={
              "full-carousel-slide" + (activeIndex === index ? " active" : "")
            }
          >
            {/* image */}
            <div className="image-box">
              <img className="image" src={item.src} alt={item.alt} />
            </div>

            <div className="content">
              <div className="title-box">
                {/* subtitle */}
                <p className="subtitle">{item.subtitle}</p>
                {/* title */}
                <h1 className="title">{item.title}</h1>
              </div>

              <div className="slider-meta">
                <div className="next-slide" onClick={moveNext}>
                  <img
                    src={nextItem.src}
                    alt={nextItem.alt}
                    className="next-slide-image"
                  />
                </div>

                {/* active and total  */}
                <div className="active-total">
                  <span className="active">
                    {
                      // pad by 0 if less than 10
                      (activeIndex + 1).toString().padStart(2, "0")
                    }
                  </span>
                  <span className="separator" />
                  <span className="total">
                    {
                      // pad by 0 if less than 10
                      items.length.toString().padStart(2, "0")
                    }
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
