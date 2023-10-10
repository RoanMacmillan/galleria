import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex w-full items-center absolute justify-center px-8 h-[85px] bg-transparent top-0 lg:px-20 lg:h-[150px] z-50">
      <nav className="md:flex items-center md:w-full gap-8 justify-between text-white lg:gap-16 lg:font-semibold max-w-[1700px] mx-auto text-base">

<Link href='/' className="hidden md:block">Artists</Link>
<Link href='/' className="hidden md:block mr-auto">Exhibitions</Link>


        <div className="uppercase text-[#fff] font-normal tracking-[7px] text-lg md:text-xl lg:text-2xl lg:tracking-[10px] lg:font-semibold">Galleria</div>

<Link href='/' className="hidden md:block ml-auto">Collect</Link>
<Link href='/' className="hidden md:block">Shop</Link>

      </nav>
    </header>
  );
};

export default Header;
