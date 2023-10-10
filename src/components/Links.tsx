import React from 'react';

const Links = () => {
  return (
    <div className='px-8 py-10 lg:py-20 lg:gap-20 max-w-[1764px] mx-auto relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8'>
        <div className='absolute w-full h-[1px] bg-gray-200 top-0 left-0'></div>
      <div className="mb-4">
        <h3 className="font-medium text-xl mb-5">About</h3>
        <ul className='flex flex-col gap-3 lg:gap-5  text-[15px]'>
          <li><a href="#">Locations</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Sustainability</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Artists</a></li>
        </ul>
      </div>

      <div className="mb-4">
  <h3 className="font-medium text-xl mb-5">Artists</h3>
  <ul className='flex flex-col gap-3 lg:gap-5 text-[15px]'>
    <li><a href="#">Lucas Thompson</a></li>
    <li><a href="#">Elena Rodriguez</a></li>
    <li><a href="#">David Anderson</a></li>
    <li><a href="#">Sophia Martinez</a></li>
    <li><a href="#">Oliver Davis</a></li>
  </ul>
</div>



      <div className="mb-4">
        <h3 className="font-medium text-xl mb-5">Collect</h3>
        <ul className='flex flex-col gap-3 lg:gap-5 text-[15px]'>
          <li><a href="#">Create Account</a></li>
          <li><a href="#">Available Artworks</a></li>
          <li><a href="#">Consignments</a></li>
          <li><a href="#">Art Fairs</a></li>
          <li><a href="#">Salon</a></li>
          <li><a href="#">Artworks FAQs</a></li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-medium text-xl mb-5">Exhibitions</h3>
        <ul className='flex flex-col gap-3 lg:gap-5 text-[15px]'>
          <li><a href="#">London</a></li>
          <li><a href="#">Hong Kong</a></li>
          <li><a href="#">New York</a></li>
          <li><a href="#">West Palm Beach</a></li>
          <li><a href="#">Paris</a></li>
          <li><a href="#">Seoul</a></li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-medium text-xl mb-5">News</h3>
        <ul className='flex flex-col gap-3 lg:gap-5 text-[15px]'>
          <li><a href="#">Press Releases</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Museum Exhibitions</a></li>
        </ul>
      </div>
      <div className="mb-4">
        <h3 className="font-medium text-xl mb-5">Shop</h3>
        <ul className='flex flex-col gap-3 lg:gap-5 text-[15px]'>
          <li><a href="#">Publications</a></li>
          <li><a href="#">Editions</a></li>
          <li><a href="#">Everything Else</a></li>
          <li><a href="#">Online Terms of Sale</a></li>
          <li><a href="#">Shop FAQs</a></li>
        </ul>
      </div>
      

    </div>
  );
};

export default Links;
