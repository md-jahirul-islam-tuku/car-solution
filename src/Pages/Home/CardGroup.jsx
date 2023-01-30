import React from 'react';
import './CardGroup.css'
import img1 from '../../assets/images/CardGroup/img5.jpg';
import img2 from '../../assets/images/CardGroup/img9.jpg';
import img3 from '../../assets/images/CardGroup/image1.jpg';
import img4 from '../../assets/images/CardGroup/image2.jpg';
import img5 from '../../assets/images/CardGroup/image3.jpg';
import img6 from '../../assets/images/CardGroup/image4.jpg';

const CardGroup = () => {
  return (
    <div className='my-10'>
      <div className='grid lg:grid-cols-2 gap-1 mb-1'>
        <div className='overflow-hidden relative photo'>
          <img src={img1} alt="" className='h-80 w-full' />
          <h1 className='absolute cursor-pointer top-32 left-[32%] text-6xl font-thin text-white uppercase'>Services</h1>
        </div>
        <div className='overflow-hidden relative photo'>
          <img src={img2} alt="" className='h-80 w-full' />
          <h1 className='absolute cursor-pointer top-32 left-[29%] text-6xl font-thin text-white uppercase'>Workshop</h1>
        </div>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-1'>
        <div className='overflow-hidden relative photo'>
          <img src={img3} alt="" className='h-80 w-full' />
          <h1 className='absolute cursor-pointer top-32 left-[15%] text-3xl lg:text-5xl font-thin text-white uppercase'>Products</h1>
        </div>
        <div className='overflow-hidden relative photo'>
          <img src={img4} alt="" className='h-80 w-full' />
          <h1 className='absolute cursor-pointer top-32 left-[15%] text-3xl lg:text-5xl font-thin text-white uppercase'>Used car</h1>
        </div>
        <div className='overflow-hidden relative photo'>
          <img src={img5} alt="" className='h-80 w-full' />
          <h1 className='absolute cursor-pointer top-32 left-[27%] text-3xl lg:text-5xl font-thin text-white uppercase'>About</h1>
        </div>
        <div className='overflow-hidden relative photo'>
          <img src={img6} alt="" className='h-80 w-full' />
          <h1 className='absolute cursor-pointer top-32 left-[17%] text-3xl lg:text-5xl font-thin text-white uppercase'>Contact</h1>
        </div>
      </div>
    </div>
  );
};

export default CardGroup;