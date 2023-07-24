import React from "react";

// Components
import { MainLayout } from "./layouts";
import { SassyCarousel, SassyCarouselItem } from "./components/sassy-carousel";

// Static assets
import "./styles.scss";
import Farm1Img from "@/assets/images/farm-1.jpeg";
import Farm2Img from "@/assets/images/farm-2.png";
import Farm3Img from "@/assets/images/farm-3.png";
import Farm4Img from "@/assets/images/farm-4.png";

const carouselItems: SassyCarouselItem[] = [
  {
    src: Farm1Img,
    alt: "Farm 1",
    subtitle: "Welcome To TenTwenty Farms",
    title: "From our Farm's to your hands",
  },
  {
    src: Farm2Img,
    alt: "Farm 2",
    subtitle: "Welcome To TenTwenty Farms",
    title: "We Help Your Farms Grow",
  },
  {
    src: Farm3Img,
    alt: "Farm 3",
    subtitle: "Welcome To TenTwenty Farms",
    title: "Improve Your Farms Yield",
  },
  {
    src: Farm4Img,
    alt: "Farm 4",
    subtitle: "Welcome To TenTwenty Farms",
    title: "Our Products Never Disappoint",
  },
];

/**
 * App component
 */
export default function App() {
  return (
    <MainLayout>
      <section className="hero">
        <SassyCarousel items={carouselItems} />
      </section>

      <section className="testimonials">
        <div className="section-title-box">
          <h2 className="title">Quality Products</h2>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </section>
    </MainLayout>
  );
}
