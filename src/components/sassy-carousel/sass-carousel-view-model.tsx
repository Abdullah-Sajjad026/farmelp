import { useEffect, useRef, useState } from "react";
import { SassyCarouselItem, SassyCarouselProps } from ".";

type Props = {
  items: SassyCarouselProps["items"];
  variant: SassyCarouselProps["variant"];
  duration: SassyCarouselProps["duration"];
  children: (props: ForwardedProps) => React.ReactNode;
};

type ForwardedProps = Omit<Props, "children"> & {
  activeIndex: number;
  activeItem: SassyCarouselItem;
  moveNext: () => void;
  nextItem: SassyCarouselItem;
};

export const SassyCarouselViewModel = ({
  items,
  variant,
  duration,
  children,
}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeItem, setActiveItem] = useState(items[0]);
  const [nextItem, setNextItem] = useState(items[1]);

  const intervalId = useRef<any>();

  const startSlide = () => {
    intervalId.current = setInterval(() => {
      moveNext(false);
    }, duration);
  };

  const stopSlide = () => {
    clearInterval(intervalId.current);
  };

  const getNextIndex = (index: number) => {
    if (index === items.length - 1) {
      return 0;
    } else {
      return index + 1;
    }
  };

  const moveNext = (resetInterval: boolean = true) => {
    setActiveIndex((active) => getNextIndex(active));
    if (resetInterval) {
      stopSlide();
      startSlide();
    }
  };

  // changing item and index every duration ms
  useEffect(() => {
    startSlide();

    return () => {
      stopSlide();
    };
  }, []);

  // changing active item when active index changes
  useEffect(() => {
    setActiveItem(items[activeIndex]);
    setNextItem(items[getNextIndex(activeIndex)]);
  }, [activeIndex]);

  return children({
    items,
    variant,
    duration,
    activeIndex,
    activeItem,
    moveNext,
    nextItem,
  });
};
