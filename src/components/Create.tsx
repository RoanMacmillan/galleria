import React from 'react'
import arrow from "../../public/icons/arrow.svg";
import Image from "next/image";
import banner from '../../public/images/create.webp'

const Create = () => {
  return (
    <div className='relative mt-14 lg:mt-24'>

        <div className='relative h-[273px] md:h-[325px] lg:h-[560px]'>

<Image
            src={banner}
            alt="banner"
           fill
            className="object-cover"
          />


</div>

<div className='max-w-[1764px] mx-auto'>

<div  className='absolute top-[0] h-full flex flex-col justify-center items-start px-8'>

      <h2 className='text-3xl lg:text-4xl'>Create an Account</h2>

      <p className='text-lg mt-[24px] lg:text-xl '>To view and purchase available works.</p>

      <button className="mt-[24px] lg:mt-[32px] flex items-center gap-4 px-4 py-2 bg-black ">
          <Image
            src={arrow}
            alt="arrow"
            width={22}
            height={22}
            className="-rotate-90 brightness-0 invert-[1]"
          />

          <p className="text-sm font-bold text-white">Create Account</p>
        </button>

        </div>

        </div>
    </div>
  )
}

export default Create
