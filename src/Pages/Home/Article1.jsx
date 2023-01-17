import React from 'react';

const Article1 = () => {
  return (
    <div className='grid grid-cols-3 px-14 gap-10 py-14'>
      <div className='col-span-1 text-right font-thin border-r-8 pr-10 border-primary py-3'>
        <h1 className='text-6xl text-gray-500'>High quality prestige vehicle sales in Bengal since 1998</h1>
      </div>
      <div className='col-span-2 text-lg font-light text-justify my-auto'>
        <p>Car Solution is a family run business that has been providing a range of high quality vehicle services in Bengal since 1998. Our experienced team takes great pride in ensuring that you get an exceptional service, whether it is a great deal on a luxurious vehicle or whether it is to ensure your car receives the quality care that it deserves.</p>
        <p className='my-3'>You will be able to choose from a range of 4x4 and prestigious car marques including Toyota, Porsche, Land Rover, Mercedes and BMW. We also provide <a href='/' className='text-primary'>car servicing, insurance repairs and body repairs.</a></p>
        <p><a href='/' className='text-primary'>Visit or call us today</a> and we will help you fulfil all your automotive needs.</p>
      </div>
    </div>
  );
};

export default Article1;