import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
   const [services, setServices] = useState([])
   useEffect(() => {
      fetch('https://car-solution-server.vercel.app/services')
         .then(res => res.json())
         .then(data => setServices(data))
   }, [services])
   return (
      <div id='services'>
         <div className='py-10' data-aos="zoom-in-up" data-aos-duration="2000">
            <h4 className='font-bold text-error text-lg'>Services</h4>
            <h1 className="text-5xl font-bold">Our Service Area</h1>
            <p className='text-xl'>The majority have suffered alteration in some form, by injected humour, or Randomized <br /> words which don't look even slightly believable. </p>
         </div>
         <div className='grid lg:grid-cols-3'>
            {
               services.map(service => <ServicesCard
                  key={service._id}
                  service={service}
               ></ServicesCard>)
            }
         </div>
         <button className="btn btn-outline btn-error">More Services</button>
      </div>
   );
};

export default Services;