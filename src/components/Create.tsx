import React from 'react'
import arrow from "../../public/icons/arrow.svg";
import Image from "next/image";
import banner from '../../public/images/create.webp'

const Create = () => {
  return (
    <div className='relative mt-14'>

        <div className='relative h-[273px]'>

<Image
            src={banner}
            alt="banner"
           fill
            className="object-cover"
          />


</div>

<div  className='absolute top-[0] py-16 px-8'>

      <h2 className='text-3xl'>Create an Account</h2>

      <p className='text-lg mt-[24px] '>To view and purchase available works.</p>

      <button className="mt-[24px] flex items-center gap-4 px-4 py-2 bg-black ">
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
  )
}

export default Create
