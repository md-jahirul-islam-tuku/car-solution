import React from 'react';
import { FaStar } from 'react-icons/fa';

const Product = ({product}) => {
   const {name, img, price} = product;
   return (
      <div className="cursor-pointer card w-full rounded-none shadow-xl bg-gray-100" data-aos="zoom-in-up" data-aos-duration="2000">
         <figure className="px-3 pt-3">
            <img src={img} alt="products" className="h-[28vh] animate__animated animate__pulse animate__infinite animate__slower" />
         </figure>
         <div className="card-body items-center text-center">
            <div className='flex text-lg gap-1'>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            <FaStar className='text-yellow-500'/>
            </div>
            <h2 className="card-title text-2xl font-bold">{name}</h2>
            <h2 className="card-title text-xl font-bold text-orange-600">Price: ${price}</h2>
         </div>
      </div>
   );
};

export default Product;