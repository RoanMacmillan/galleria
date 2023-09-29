import React from "react";
import Image from "next/image";
import wave from "../../public/images/hero5.jpeg";
import arrow from "../../public/icons/arrow.svg";

const Hero = () => {
  return (
    <div className="relative left-0 top-0 flex  h-screen w-full flex-col items-center justify-center text-center text-white">
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-black opacity-[35%]"></div>

      <Image
        src={wave}
        alt="Hero"
        fill={true}
        priority
        className=" hero-animate -z-20 object-cover"
      />

      <div className="z-50">
        <div className="text-base font-medium uppercase tracking-[1.6px]">
          now open
        </div>

        <h1 className="mt-[26px] text-[41px] font-light leading-[42px] tracking-[-1.065px]">
          Kaoru Mitoma
        </h1>
        <h2 className="mt-2 text-[29px] font-light italic leading-8 tracking-[-0.75px]">
          Woodblock
        </h2>
        <h3 className="mt-6 text-[17px] font-normal leading-6">
          21 November - 11 December 2023
        </h3>
        <h4 className="text-[17.3px] font-medium leading-[26px]">Lisbon</h4>
        <button className="mt-6 text-[13.2px] font-medium leading-5">
          Visit Exhibition
        </button>
      </div>

      <Image
        src={arrow}
        alt="Arrow"
        width={28}
        height={28}
        className="absolute bottom-[16px] brightness-[0] invert-[1]"
      />
    </div>
  );
};

export default Hero;
