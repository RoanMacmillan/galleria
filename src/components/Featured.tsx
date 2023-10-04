import React from "react";
import arrow from "../../public/icons/arrow.svg";
import Image from "next/image";
import featured from "../../public/images/featured.webp";
const Featured = () => {
  return (
    <div className="mt-14">
      <div className="relative h-[275px] w-full overflow-hidden ">
        <Image alt="News" src={featured} fill className="object-cover scale-[125%] origin-top" />
      </div>

      <div className="bg-[#F2F2F2] px-8 py-[56px]">
        <p className="text-[12.6px] font-bold uppercase leading-[18.96px] tracking-[1.264px]">
          featured publication
        </p>
        <h2 className="mt-[11px] text-2xl">Julie Mehretu 'Liminal Squared' (2020)</h2>
        <div className="mt-[24px] text-base font-semibold">£150</div>
        <p className="mt-[24px] text-base font-normal leading-[21px] ">
          With large colour plates, full-bleed details and four gatefold pages,
          ‘Liminal Squared’ provides an exacting and thorough overview of
          Mehretu’s intricate use of painterly surface. Featuring paintings
          created across the joint exhibitions, the publication places emphasis
          on the artist’s negotiation of political demonstration, architectural
          language and geographical space.
        </p>

        <button className="mt-[24px] flex items-center gap-4">
          <Image
            src={arrow}
            alt="arrow"
            width={22}
            height={22}
            className="-rotate-90"
          />

          <p className="text-sm font-bold">Purchase</p>
        </button>
      </div>
    </div>
  );
};

export default Featured;
