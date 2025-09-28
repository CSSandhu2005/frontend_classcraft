"use client";
import React from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import productImage from "@/assets/product-image.png" ; 

export function TabUi() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                ClassCraft AI
              </span>
            </h1>
          </>
        }
      >
        <img
          src={productImage.src}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full w-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
