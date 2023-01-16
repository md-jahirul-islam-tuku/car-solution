import React from 'react';
import icon1 from '../../assets/icons/contact/calender.png';
import icon2 from '../../assets/icons/contact/phone.png';
import icon3 from '../../assets/icons/contact/location.png';

const Contact = () => {
   return (
      <div className='flex justify-around bg-black py-20 text-white rounded-lg my-20'>
         <div className='flex items-center'>
            <div><img src={icon1} alt="" className='mr-4 h-14' /></div>
            <div className='text-left'>
               <h5 className='text-lg'>We are open monday-friday</h5>
               <h2 className='text-3xl'>7:00 am - 9:00 pm</h2>
            </div>
         </div>
         <div className='flex items-center'>
            <div><img src={icon2} alt="" className='mr-4 h-14' /></div>
            <div className='text-left'>
               <h5 className='text-lg'>Have a question?</h5>
               <h2 className='text-3xl'>+2546 251 2658</h2>
            </div>
         </div>
         <div className='flex items-center'>
            <div><img src={icon3} alt="" className='mr-4 h-14' /></div>
            <div className='text-left'>
               <h5 className='text-lg'>Need a repair? our address</h5>
               <h2 className='text-3xl'>Liza Street, New York</h2>
            </div>
         </div>
      </div>
   );
};

export default Contact;