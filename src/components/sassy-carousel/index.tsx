import { SassyCarousel } from "./sassy-carousel";

export { SassyCarousel };

export type SassyCarouselProps = {
  items: SassyCarouselItem[];
  // variant describes the layout of the carousel
  variant?: "full-bleed" | "centered-tilted";
  // duration describes the duration of the transition between slides
  duration?: number;
};

export type SassyCarouselItem = {
  // src can be an online url or a local imported image
  src: string;
  alt: string;
  subtitle?: string;
  title?: string;
  description?: string;
  // content is a custom component that can be passed in
  content?: React.ReactNode;
};
