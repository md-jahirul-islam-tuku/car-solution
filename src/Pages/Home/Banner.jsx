import React from 'react';
import './Banner.css';
import Slider from './Slider';

const Banner = () => {
  return (
    <div id="slide1" className="lg:flex bg-black items-center lg:h-[70vh] pt-10 lg:pt-0">
      <div className='lg:pl-10 w-4/5 mx-auto'>
        <div className="">
          <h1 className='lg:text-5xl text-xl text-white font-bold text-left animate__animated animate__backInRight animate__slower'>
            Affordable <br />
            Price For Car <br />
            Servicing
          </h1>
        </div>
        <div className="flex gap-2 my-3 animate__animated animate__backInLeft animate__slower">
          <h1 className='lg:text-xl text-md text-white text-left'>
            There are many variations of passages of  available, but the majority have suffered alteration in some form
          </h1>
        </div>
        <div className="flex gap-2 animate__animated animate__backInRight animate__slower">
          <button className="btn btn-xs lg:btn-md btn-error font-bold">Discover More</button>
          <button className="btn btn-xs lg:btn-md btn-outline btn-error font-bold">Latest Project</button>
        </div>
      </div>
      <div>
        <Slider/>
      </div>
    </div>
  );
};

export default Banner;