import React from 'react';
import icon1 from '../../assets/icons/contact/calender.png';
import icon2 from '../../assets/icons/contact/phone.png';
import icon3 from '../../assets/icons/contact/location.png';

const Contact = () => {
   return (
      <div id='contact'>
         <div className='py-10' data-aos="zoom-in" data-aos-duration="2000">
            <div className='lg:flex flex-row-reverse justify-around bg-black py-20 text-white rounded-lg'>
               <div className='flex items-center justify-center'>
                  <div><img src={icon1} alt="" className='mr-4 h-14 animate__animated animate__pulse animate__infinite animate__slow' /></div>
                  <div className='text-left'>
                     <h5 className='text-lg'>We are open monday-friday</h5>
                     <h2 className='text-3xl'>7:00 am - 9:00 pm</h2>
                  </div>
               </div>
               <div className='flex items-center justify-center my-10 lg:my-0'>
                  <div><img src={icon2} alt="" className='mr-4 h-14 animate__animated animate__pulse animate__infinite animate__slow' /></div>
                  <div className='text-left'>
                     <h5 className='text-lg'>Have a question?</h5>
                     <h2 className='text-3xl'>+88 01919 51 66 36</h2>
                  </div>
               </div>
               <div className='flex items-center justify-center'>
                  <div><img src={icon3} alt="" className='mr-4 h-14 animate__animated animate__pulse animate__infinite animate__slow' /></div>
                  <div className='text-left'>
                     <h5 className='text-lg'>Need information? our address</h5>
                     <h2 className='text-3xl'>Barishal, Bangladesh</h2>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Contact;