import React from 'react';

const Article2 = () => {
  return (
    <div className='lg:grid grid-cols-3 gap-10 py-24'>
      <div className='col-span-1 lg:text-right pb-7 font-thin border-b-8 lg:border-b-0 lg:border-r-8 lg:pr-9 border-primary py-3' data-aos="fade-right" data-aos-duration="2000">
        <h1 className='text-6xl font-thin text-gray-500'>Importing cars globally for 25 years</h1>
      </div>
      <div className='col-span-2 text-lg font-light text-justify my-auto' data-aos="fade-left" data-aos-duration="2000">
        <p>Want to ensure your vehicle is exported safely and hassle free? Let Twinstar help you accomplish that with our Worldwide Vehicle Export Service.. You will benefit from competitive prices and a thorough service that ensures that all the aspects of exporting are covered. We will take care of all of the transportation, invoicing and documentation to ensure that you get the high quality and seamless service that you deserve.</p>
      </div>
    </div>
  );
};

export default Article2;