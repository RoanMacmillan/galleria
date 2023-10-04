import React from "react";
import { projects } from "../data/projects";
import Image from "next/image";
import arrow from "../../public/icons/arrow.svg";
const GalleryIndex = () => {
  return (
    <div className="mt-14 px-8">
      {projects.map((project) => (
        <div key={project.id}>
          <div className="relative mt-12  h-[250px] w-full">
            <Image
              src={project.thumbnail}
              alt={project.name}
              fill
              className="object-cover"
            />
          </div>

            <p className="mt-6 text-[12.6px] font-bold uppercase leading-[18.96px] tracking-[1.264px]">
              gallery exhibition
            </p>
          <h2 className="mt-3 text-[22px] font-normal leading-5 tracking-[-0.568px]">
            {project.name}
          </h2>
          <p className="mt-2 text-[17.5px] italic leading-5">
            {project.description}
          </p>
          <p className="mt-3 text-sm font-bold">{project.date}</p>
          <p className="text-sm font-bold">{project.location}</p>

            <div className="mt-6 flex items-center gap-4">

          <Image src={arrow} alt="arrow" width={22} height={22} className="-rotate-90" />

          <button className="text-sm font-bold">Visit Exhibition</button>

          </div>

            {/* <div className="h-[1px] bg-gray-200 w-full mt-6"></div> */}

        </div>
      ))}
    </div>
  );
};

export default GalleryIndex;
