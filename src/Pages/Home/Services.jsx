import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
   const [services, setServices] = useState([])
   useEffect(() => {
      fetch('http://localhost:5001/services')
         .then(res => res.json())
         .then(data => setServices(data))
   }, [services])
   return (
      <div className='mb-10'>
         <div className='py-10'>
            <h4 className='font-bold text-error text-lg'>Services</h4>
            <h1 className="text-5xl font-bold">Our Service Area</h1>
            <p className='text-xl'>The majority have suffered alteration in some form, by injected humour, or Randomized <br /> words which don't look even slightly believable. </p>
         </div>
         <div className='grid grid-cols-3 gap-10'>
            {
               services.map(service => <ServicesCard
                  key={service._id}
                  service={service}
               ></ServicesCard>)
            }
         </div>
         <button className="btn btn-outline btn-error mt-10">More Services</button>
      </div>
   );
};

export default Services;