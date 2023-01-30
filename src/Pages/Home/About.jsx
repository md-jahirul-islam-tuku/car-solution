import React from 'react';
import AboutImage1 from '../../assets/images/banner/1.jpg';
import AboutImage2 from '../../assets/images/about_us/parts.jpg';

const About = () => {
   return (
      <div id='about' className="hero">
         <div className="hero-content flex-col lg:flex-row">
            <div className='lg:w-1/2 relative' data-aos="fade-right" data-aos-duration="2000">
               <img alt='...' src={AboutImage1} className="rounded-lg w-4/6 lg:w-5/6 mb-16" />
               <img alt='...' src={AboutImage2} className="absolute rounded-lg lg:w-3/5 lg:left-48 top-24 left-40 w-3/5 border-base-100 border-[7px] lg:top-44" />
            </div>
            <div className='lg:w-1/2 lg:text-left lg:py-20' data-aos="fade-left" data-aos-duration="2000">
               <p className='font-bold text-error text-lg lg:text-left'>About Us</p>
               <h1 className="text-5xl font-bold hidden lg:block">We are qualified <br />& of experience <br />in this field</h1>
               <h1 className="text-3xl font-bold lg:hidden">We are qualified & of experience in this field</h1>
               <p className="py-3 text-xl text-justify">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
               <p className="pb-3 text-xl text-justify">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
               <button className="btn btn-error">Get More Info</button>
            </div>
         </div>
      </div>
   );
};

export default About;