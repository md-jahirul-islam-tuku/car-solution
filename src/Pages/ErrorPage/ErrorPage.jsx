import React from 'react';
import Error from '../../assets/icons/404.png'
import Header from '../Shared/Header';

const ErrorPage = () => {
   return (
      <div>
         <Header/>
         <img className='mx-auto pt-44' src={Error} alt="" />
         <h1 className='text-5xl text-red-600 font-bold'>Page Not Found</h1>
      </div>
   );
};

export default ErrorPage;