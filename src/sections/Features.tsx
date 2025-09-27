"use client";
import { DotLottiePlayer } from "@dotlottie/react-player";
import ProductImage from "@/assets/product-image.png";
import Image from "next/image";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

export const Features = () => {
  return (
    <section className="py-28 md:py-24">
      <div className="container">
        <h2 className="text-5xl md:text-6xl font-smeibold text-center tracking-tighter">
          Elevate Your Teaching Style.
        </h2>
        <p className="text-white/70 text-center text-lg md:text-xl max-w-2xl mx-auto mt-5">
          From small schools to Large Institutions, Our AI-Driven tool is
          revolutionizing the way Teachers approach teaching.
        </p>
        <div className="mt-5 flex flex-col gap-4 mb-4">
          {tabs.map((tabData) => {
            return (
              <div
                key={tabData.title}
                className="border border-white/15 rounded-lg flex gap-2.5 p-2.5 items-center"
              >
                <div className="h-12 w-12 inline-flex border border-white/15 items-center justify-center rounded-lg">
                  <DotLottiePlayer
                    src={tabData.icon}
                    className="h-9 w-auto"
                    autoplay
                  />
                </div>
                <div className="font-medium">{tabData.title}</div>
                {tabData.isNew && (
                  <div className="text-xs rounded-full px-2 py-0.5 bg-[#8c44ff] text-black">
                    new
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="border border-white/20 p-2.5 rounded-lg">
          <div className="aspect-video bg-cover border border-white/20 rounded-lg" style={{
            backgroundImage: `url(${ProductImage.src})`
          }}></div>
        </div>
      </div>
    </section>
  );
};
