// Sassy is just a fancy term originated by me and a mate to name components :smile:

import React from "react";
import { SassyCarouselProps } from ".";
import { SassyCarouselViewModel } from "./sass-carousel-view-model";
import FullBleedCarousel from "./variants/full-bleed/full-bleed";

export const SassyCarousel = ({
  items,
  variant = "full-bleed",
  duration = 3000,
}: SassyCarouselProps) => {
  return (
    <SassyCarouselViewModel
      {...{
        items,
        variant,
        duration,
      }}
    >
      {(props) => {
        return {
          "full-bleed": (
            <FullBleedCarousel
              items={props.items}
              activeIndex={props.activeIndex}
              activeItem={props.activeItem}
              nextItem={props.nextItem}
              moveNext={props.moveNext}
            />
          ),
          "centered-tilted": <></>,
        }[props.variant!];
      }}
    </SassyCarouselViewModel>
  );
};
