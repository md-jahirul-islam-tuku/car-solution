import React from 'react';
import img5 from '../../assets/images/banner/0.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div id="slide1" className="carousel-item relative w-full bg-gradient-to-r from-black rounded-xl">
      <img alt="..." src={img5} className="w-full  animate__animated animate__fadeInRight animate__slow" />
      <div className='absolute lg:top-28 lg:left-20 left-8 top-4'>
        <div className="">
          <h1 className='lg:text-5xl text-white font-bold text-left animate__animated animate__backInRight animate__slower animate__delay-2s'>
            Affordable <br />
            Price For Car <br />
            Servicing
          </h1>
        </div>
        <div className="flex gap-2 my-3 animate__animated animate__backInLeft animate__slower animate__delay-2s">
          <h1 className='lg:text-xl text-xs text-white text-left'>
            There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form
          </h1>
        </div>
        <div className="flex gap-2 animate__animated animate__backInRight animate__slower animate__delay-2s">
          <button className="btn btn-xs lg:btn-md btn-error font-bold">Discover More</button>
          <button className="btn btn-xs lg:btn-md btn-outline btn-error font-bold">Latest Project</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;