import Image from "next/image";
import React from "react";
import { GooeyTextDemo } from "../parts/GooeyTextDemo";

const Hero = () => {
  return (
    <div className="h-screen border flex justify-center items-center relative w-full">
      {/* <h1 className="text-[250px] font-bold geist-font">Abu Saleh</h1> */}
            <GooeyTextDemo />
      <h1 className="text-[250px] font-bold geist-font text-transparent [-webkit-text-stroke:2px_#f0f0f0] absolute top-108.75 tracking-[8px] -translate-y-1/2 z-1">
        ABU SALEH
      </h1>
      {/* <Image
        src="/akio.png"
        alt="abu saleh"
        className=" shrink-0 absolute bottom-0 left-1/2 -translate-x-1/2"
        width={400}
        height={800}
      /> */}
    </div>
  );
};

export default Hero;
