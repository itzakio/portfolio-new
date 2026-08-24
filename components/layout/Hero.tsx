import Image from "next/image";
import { GooeyTextDemo } from "../parts/GooeyTextDemo";

const Hero = () => {
  return (
    <div className="h-screen flex justify-center items-center relative w-full ">
      {/* <h1 className="text-[250px] font-bold geist-font">Abu Saleh</h1> */}
      <GooeyTextDemo
        text={["ABU SALEH", "WEB DEV.", "FRONT DEV.", "MERN DEV."]}
        textClassName="text-white text-[50px] md:text-[100px] lg:text-[120px] xl:text-[200px] hidden md:block"
      />
      <div className=" text-[250px] font-bold geist-font h-2/6 md:min-h-screen absolute top-0 w-full flex justify-center items-end md:items-center z-20">
        <div>
        <GooeyTextDemo
          text={["ABU SALEH", "WEB DEV.", "FRONT DEV.", "MERN DEV."]}
          className="md:opacity-50"
        textClassName="text-white text-[50px] md:text-[100px] lg:text-[120px] xl:text-[200px] "
        />
        </div>
      </div>

      <Image
        src="/akio.png"
        alt="abu saleh"
        className="shrink-0 absolute bottom-0 left-1/2 -translate-x-1/2 h-2/3 w-auto md:h-4/5 "
        width={400}
        height={800}
      />
    </div>
  );
};

export default Hero;
