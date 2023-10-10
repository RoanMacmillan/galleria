import React from "react";

const Privacy = () => {
  return (
    <div className="relative bg-[#f2f2f2]  px-8 py-10 md:py-6">
<div className='absolute w-full h-[1px] bg-gray-200 top-0 left-0'></div>

<div className="md:flex items-center justify-between max-w-[1700px] mx-auto">

      <ul className="flex flex-col md:flex-row md:gap-10  gap-4">
        <li>
          <a className="text-[13px] font-semibold uppercase">privacy policy</a>
        </li>

        <li>
          <a className="text-[13px] font-semibold uppercase">cookie policy</a>
        </li>

        <li>
          <a className="text-[13px] font-semibold uppercase">terms of use</a>
        </li>

        <li>
          <a className="text-[13px] font-semibold uppercase">accessibility</a>
        </li>

        <li>
          <a className="text-[13px] font-semibold uppercase">visitor guidelines</a>
        </li>
      </ul>

      <p className="uppercase font-semibold text-[13px] md:mt-0 mt-8">&copy; 2023 Galleria</p>
      </div>
    </div>
  );
};

export default Privacy;
