import React from 'react';
import { FaStar } from 'react-icons/fa';

const Product = ({product}) => {
   const {name, img, price} = product;
   return (
      <div className="card w-full shadow-xl bg-gray-100">
         <figure className="px-3 pt-3">
            <img src={img} alt="products" className="rounded-lg h-[28vh]" />
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