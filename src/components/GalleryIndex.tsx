import React from "react";
import { projects } from "../data/projects";
import Image from "next/image";
import arrow from "../../public/icons/arrow.svg";
const GalleryIndex = () => {
  return (
    <div className="mt-14 px-8 md:mt-20 lg:grid grid-cols-2 lg:gap-16 xl:gap-24 max-w-[1764px] mx-auto">
      {projects.map((project) => (
        <div key={project.id}>
          <div className="relative mt-12  h-[250px] md:h-[450px] lg:h-[300px] xl:h-[480px] w-full">
            <Image
              src={project.thumbnail}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>


          

            <p className="mt-6 md:mt-8 text-[12.6px] font-bold uppercase leading-[18.96px] tracking-[1.264px]">
              gallery exhibition
            </p>
            <div className="md:flex justify-between items-start">

            <div>
          <h2 className="mt-3 md:mt-[18px] text-[22px] md:text-[26px] md:leading-[25px]  font-normal leading-5 tracking-[-0.568px]">
            {project.name}
          </h2>
          <p className="mt-2 text-[17.5px] md:text-[19px] md:leading-[23px] italic leading-5">
            {project.title}
          </p>

          

        </div>

          <div className="">
          <p className="mt-3 text-sm font-semibold md:mt-5">{project.date}</p>
          <p className="text-sm font-bold">{project.location}</p>
          </div>

          </div>

          <p className="text-base md:block mt-6 font-normal hidden leading-[21px] max-w-[420px] ">
          {project.description}
        </p>

            <div className="mt-6 flex items-center gap-4">

          <Image src={arrow} alt="arrow" width={22} height={22} className="-rotate-90" />

          <button className="text-sm lg:text-base font-bold">Visit Exhibition</button>

          </div>

            {/* <div className="h-[1px] bg-gray-200 w-full mt-6"></div> */}

        </div>
      ))}
    </div>
  );
};

export default GalleryIndex;
