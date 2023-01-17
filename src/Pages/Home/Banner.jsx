import React from 'react';
import img5 from '../../assets/images/banner/0.jpg';
import './Banner.css';

const Banner = () => {
  return (
    <div id="slide1" className="carousel-item relative w-full bg-gradient-to-r from-black rounded-xl">
      <img alt="..." src={img5} className="w-full" />
      <div className='absolute top-28 left-20'>
        <div className="">
          <h1 className='text-5xl text-white font-bold text-left'>
            Affordable <br />
            Price For Car <br />
            Servicing
          </h1>
        </div>
        <div className="flex gap-2 my-3">
          <h1 className='text-xl text-white text-left'>
            There are many variations of passages of  available, but <br /> the majority have suffered alteration in some form
          </h1>
        </div>
        <div className="flex gap-2">
          <button className="btn btn-error font-bold">Discover More</button>
          <button className="btn btn-outline btn-error font-bold">Latest Project</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;