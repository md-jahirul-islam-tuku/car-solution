import React from 'react';
import AboutImage1 from '../../assets/images/about_us/person.jpg';
import AboutImage2 from '../../assets/images/about_us/parts.jpg';

const About = () => {
   return (
      <div className="hero">
         <div className="hero-content flex-col lg:flex-row">
            <div className='w-1/2 relative'>
               <img alt='...' src={AboutImage1} className="rounded-lg w-5/6 mb-16" />
               <img alt='...' src={AboutImage2} className="absolute rounded-lg w-3/5 left-48 border-base-100 border-[7px] top-44" />
            </div>
            <div className='w-1/2 text-left lg:py-20'>
               <p className='font-bold text-error text-lg'>About Us</p>
               <h1 className="text-5xl font-bold">We are qualified <br />& of experience <br />in this field</h1>
               <p className="py-3 text-xl">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
               <p className="pb-3 text-xl">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
               <button className="btn btn-error">Get More Info</button>
            </div>
         </div>
      </div>
   );
};

export default About;