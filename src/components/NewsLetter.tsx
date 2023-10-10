import React from "react";
import arrow from "../../public/icons/arrow.svg";
import Image from "next/image";
import news from "../../public/images/news.webp";

const NewsLetter = () => {
  return (
    <div className="mt-14 lg:mt-24 px-8 md:flex flex-row-reverse max-w-[1764px] mx-auto">
      <div className="relative h-[125px] sm:h-[175px] md:h-[275px] w-full ">
        <Image alt="News" src={news} fill className="object-cover" />
      </div>

      <div className="bg-[#F2F2F2] p-8 lg:p-16">
        <p className="text-[12.6px] font-bold uppercase leading-[18.96px] tracking-[1.264px]">
          Newsletter
        </p>
        <p className="mt-4 text-lg lg:text-2xl">
          Be the first to know about our events, exhibitions, artists and much
          more.
        </p>

        <button className="mt-5 flex items-center gap-4 border border-black px-4 py-2">
          <Image
            src={arrow}
            alt="arrow"
            width={22}
            height={22}
            className="-rotate-90"
          />

          <p className="text-sm font-bold">Subscribe</p>
        </button>
      </div>
    </div>
  );
};

export default NewsLetter;
