import React from 'react';
import arrow from "../../public/icons/arrow.svg";
import Image from 'next/image';

const Connect = () => {
  return (
    <div className='px-8 py-10 relative'>

<div className='absolute w-full h-[1px] bg-gray-200 top-0 left-0'></div>

<h2 className='text-xl font-medium'>Newsletter</h2>

        <p className=" mt-4 text-base font-normal leading-[21px] ">
          Be the first to know about our events, exhibitions, artists and much
          more.
        </p>

        <button className="mt-6 flex items-center gap-4">
          <Image
            src={arrow}
            alt="arrow"
            width={22}
            height={22}
            className="-rotate-90"
          />

          <p className="text-sm font-bold">Subscribe</p>
        </button>



<h2 className='text-xl mt-[40px] font-medium'>Connect</h2>

      <ul className="flex mt-4 gap-6 flex-wrap">
        <li className='w-[140px]'>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className='text-[13px] font-semibold uppercase'
          >
            Twitter
          </a>
        </li>
        <li className='w-[140px]'>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className='text-[13px] font-semibold uppercase'

          >
            Facebook
          </a>
        </li>
        <li className='w-[140px]'>
          <a
            href="https://tiktok.com"
            target="_blank"
            rel="noopener noreferrer"
            className='text-[13px] font-semibold uppercase'

          >
            TikTok
          </a>
        </li>
        <li className='w-[140px]'>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className='text-[13px] font-semibold uppercase'

          >
            Instagram
          </a>
        </li>
        <li className='w-[140px]'>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className='text-[13px] font-semibold uppercase'

          >
            YouTube
          </a>
        </li>
        <li className='w-[140px]'>
          <a
            href="https://artsy.net"
            target="_blank"
            rel="noopener noreferrer"
            className='text-[13px] font-semibold uppercase'

          >
            Artsy
          </a>
        </li>
        <li className='w-[140px]'>
          <a
            href="https://artnet.com"
            target="_blank"
            rel="noopener noreferrer"
            className='text-[13px] font-semibold uppercase'

          >
            Artnet
          </a>
        </li>
        <li className='w-[140px]'>
          <a
            href="https://wechat.com"
            target="_blank"
            rel="noopener noreferrer"
            className='text-[13px] font-semibold uppercase'

          >
            WeChat
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Connect;
