import Image from "next/image";
import React from "react";
import { GooeyTextDemo } from "../parts/GooeyTextDemo";

const Hero = () => {
  return (
    <div className="h-screen border flex justify-center items-center relative w-full">
      {/* <h1 className="text-[250px] font-bold geist-font">Abu Saleh</h1> */}
      <GooeyTextDemo
        text={["ABU SALEH", "WEB DEV.", "FRONTEND DEV.", "MERN DEV."]}
        textClassName="text-white text-[200px]"
      />
      <div className="text-[250px] font-bold geist-font absolute top-108.75 -translate-y-1/2 z-1">
        <GooeyTextDemo
          text={["ABU SALEH", "WEB DEV.", "FRONTEND DEV.", "MERN DEV."]}
          className="opacity-50 mt-10"
          textClassName="text-white text-[200px] "
        />
      </div>

      <Image
        src="/akio.png"
        alt="abu saleh"
        className="shrink-0 absolute bottom-0 left-1/2 -translate-x-1/2 h-1/2 w-auto md:h-2/3 lg:h-4/5"
        width={400}
        height={800}
      />
    </div>
  );
};

export default Hero;
