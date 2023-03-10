import React from 'react';

const Article1 = () => {
  return (
    <div className='lg:grid grid-cols-3 gap-10 py-14'>
      <div className='col-span-1 lg:text-right pb-7 font-thin border-b-8 lg:border-b-0 lg:border-r-8 lg:pr-10 border-primary py-3' data-aos="fade-right" data-aos-duration="2000">
        <h1 className='text-6xl text-gray-500'>High quality prestige vehicle sales in Bengal since 1998</h1>
      </div>
      <div className='col-span-2 text-lg font-light text-justify my-auto' data-aos="fade-left" data-aos-duration="2000">
        <p>Car Solution is a family run business that has been providing a range of high quality vehicle services in Bengal since 1998. Our experienced team takes great pride in ensuring that you get an exceptional service, whether it is a great deal on a luxurious vehicle or whether it is to ensure your car receives the quality care that it deserves.</p>
        <p className='my-3'>You will be able to choose from a range of 4x4 and prestigious car marques including Toyota, Porsche, Land Rover, Mercedes and BMW. We also provide <a href='/' className='text-primary'>car servicing, insurance repairs and body repairs.</a></p>
        <p><a href='/' className='text-primary'>Visit or call us today</a> and we will help you fulfil all your automotive needs.</p>
      </div>
    </div>
  );
};

export default Article1;