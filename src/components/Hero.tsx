import React from "react";
import Image from "next/image";
import wave from "../../public/images/test.webp";
import arrow from "../../public/icons/arrow.svg";

const Hero = () => {
  return (
    <div className="relative left-0 top-0 flex herobg  h-screen w-full flex-col items-center justify-center text-center text-white">
      <div className="absolute left-0 top-0  h-full w-full bg-black opacity-[35%]"></div>

      <Image
        src={wave}
        alt="Hero"
        fill={true}
        priority
        className=" hero-animate lg:hidden -z-20 object-cover"
      />

      <div className="z-50">
        <div className="text-base font-medium uppercase tracking-[1.6px] xl:font-semibold xl:text-lg">
          now open
        </div>

        <h1 className="mt-[26px] text-[41px] font-light leading-[42px] tracking-[-1.065px] md:text-[53px] md:leading-[53px] xl:text-[80px] xl:leading-[80px]">
          Kaoru Mitoma
        </h1>
        <h2 className="mt-2 text-[29px] font-light italic leading-8 tracking-[-0.75px] md:text-[40px] md:leading-[40px] xl:text-[50px]">
          Woodblock
        </h2>
        <h3 className="mt-6 text-[17px] font-normal leading-6 md:font-semibold md:text-lg xl:text-2xl">
          21 November - 11 December 2023
        </h3>
        <h4 className="text-[17.3px] font-medium leading-[26px] md:font-semibold md:text-lg xl:text-2xl">Lisbon</h4>
        <button className="mt-6 flex w-full gap-2 items-center justify-center">
        <Image
        src={arrow}
        alt="Arrow"
        width={24}
        height={24}
        className=" brightness-[0] invert-[1] -rotate-90"
      />
         <div className="text-[13.2px] font-medium leading-5 md:text-[15px] xl:font-bold xl:text-[16px]">Visit Exhibition</div> 
        </button>
      </div>

      <Image
        src={arrow}
        alt="Arrow"
        width={28}
        height={28}
        className="absolute bottom-[16px] lg:bottom-10 brightness-[0] invert-[1]"
      />
    </div>
  );
};

export default Hero;
