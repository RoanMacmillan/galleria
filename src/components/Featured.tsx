import React from "react";
import arrow from "../../public/icons/arrow.svg";
import Image from "next/image";
import featured from "../../public/images/featured.webp";
const Featured = () => {
  return (
    <div className="mt-14 lg:flex md:mt-20 lg:mt-24">
      <div className="relative h-[275px] w-full overflow-hidden sm:h-[550px] lg:h-[750px] xl:h-[900px] ">
        <Image alt="News" src={featured} fill className="object-cover scale-[125%] origin-top" />
      </div>

      <div className="bg-[#F2F2F2] px-8 py-[56px] lg:w-[75%] xl:w-[50%] lg:px-20 lg:py-[100px]">
        <p className="text-[12.6px] font-bold uppercase leading-[18.96px] tracking-[1.264px]">
          featured publication
        </p>
        <h2 className="mt-[11px] text-2xl lg:text-4xl lg:mt-[22px]">Julie Mehretu 'Liminal Squared' (2020)</h2>
        <div className="mt-[24px] text-base font-bold lg:mt-[32px]">£150</div>
        <p className="mt-[24px] text-base font-normal leading-[21px] max-w-[550px] lg:mt-[32px] ">
          With large colour plates, full-bleed details and four gatefold pages,
          ‘Liminal Squared’ provides an exacting and thorough overview of
          Mehretu’s intricate use of painterly surface. Featuring paintings
          created across the joint exhibitions, the publication places emphasis
          on the artist’s negotiation of political demonstration, architectural
          language and geographical space.
        </p>

        <button className="mt-[24px] flex items-center gap-4 lg:mt-[32px]">
          <Image
            src={arrow}
            alt="arrow"
            width={22}
            height={22}
            className="-rotate-90"
          />

          <p className="text-sm lg:text-base font-bold">Purchase</p>
        </button>
      </div>
    </div>
  );
};

export default Featured;
