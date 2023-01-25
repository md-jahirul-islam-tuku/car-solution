import React, { useEffect, useState } from 'react';
import Product from './Products';

const PopularProducts = () => {
   const [products, setProducts] = useState([])
   useEffect(() => {
      fetch('https://car-solution-server.vercel.app/products')
         .then(res => res.json())
         .then(data => setProducts(data))
   }, [])
   return (
      <div id='products'>
         <div className='py-10'>
            <h5 className='font-bold text-error text-lg'>Popular Products</h5>
            <h1 className="text-5xl font-bold">Browse Our Products</h1>
            <p className='text-xl'>The majority have suffered alteration in some form, by injected humour, or randomized <br /> words which don't look even slightly believable. </p>
         </div>
         <div className='grid lg:grid-cols-3 gap-10'>
            {
               products.map(product => <Product
                  key={product._id}
                  product={product}
               />)
            }
         </div>
         <a href='/' className="btn btn-outline btn-error my-10">More Products</a>
      </div>
   );
};

export default PopularProducts;