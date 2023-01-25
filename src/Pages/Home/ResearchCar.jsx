import React from 'react';
import car1 from '../../assets/icons/Car/convertibles.svg'
import car2 from '../../assets/icons/Car/coupes.svg'
import car3 from '../../assets/icons/Car/diesel-engines.svg'
import car4 from '../../assets/icons/Car/electric-vehicles.svg'
import car5 from '../../assets/icons/Car/hybrids.svg'
import car6 from '../../assets/icons/Car/luxury-vehicles.svg'
import car7 from '../../assets/icons/Car/sedans.svg'
import car8 from '../../assets/icons/Car/sports-cars.svg'
import car9 from '../../assets/icons/Car/minivans-and-vans.svg'
import car10 from '../../assets/icons/Car/pickup-trucks.svg'
import car11 from '../../assets/icons/Car/minivans-and-vans.svg'
import car12 from '../../assets/icons/Car/wagons.svg'

const ResearchCar = () => {
  return (
    <div className='mb-32'>
      <h1 className='text-4xl lg:text-5xl font-bold lg:text-left py-8'>Research your next car</h1>
      <h4 className='text-2xl font-bold lg:text-left pb-3'>Research by type</h4>
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
        <div className='cursor-pointer border border-gray-300 rounded-2xl pt-5 pb-7 pl-3'>
          <img className='h-16' src={car1} alt="" />
          <p className='text-left pl-2 pt-2 text-primary'>Convertibles</p>
        </div>
        <div className='border border-gray-300 rounded-2xl pt-5 pb-7 pl-3'>
          <img className='h-16' src={car2} alt="" />
          <p className='text-left pl-2 pt-2 text-primary'>Coupes</p>
        </div>
        <div className='border border-gray-300 rounded-2xl pt-5 pb-7 pl-3'>
          <img className='h-16' src={car3} alt="" />
          <p className='text-left pl-2 pt-2 text-primary'>Diesel Engines</p>
        </div>
        <div className='border border-gray-300 rounded-2xl pt-5 pb-7 pl-3'>
          <img className='h-16' src={car4} alt="" />
          <p className='text-left pl-2 pt-2 text-primary'>Electric Vehicles</p>
        </div>
        <div className='border border-gray-300 rounded-2xl pt-5 pb-7 pl-3'>
          <img className='h-16' src={car5} alt="" />
          <p className='text-left pl-2 pt-2 text-primary'>Hybrids</p>
        </div>
        <div className='border border-gray-300 rounded-2xl pt-5 pb-7 pl-3'>
          <img className='h-16' src={car6} alt="" />
          <p className='text-left pl-2 pt-2 text-primary'>Luxury Cars</p>
        </div>
        <div className='border border-gray-300 rounded-2xl pt-5 pb-7 pl-3'>
          <img className='h-16' src={car7} alt="" />
          <p className='text-left pl-2 pt-2 text-primary'>Sedans</p>
        </div>
        <div className='border border-gray-300 rounded-2xl pt-5 pb-7 pl-3'>
          <img className='h-16' src={car8} alt="" />
          <p className='text-left pl-2 pt-2 text-primary'>Sports Cars</p>
        </div>
        <div className='border border-gray-300 rounded-2xl pt-5 pb-7 pl-3'>
          <img className='h-16' src={car9} alt="" />
          <p className='text-left pl-2 pt-2 text-primary'>SUVs</p>
        </div>
        <div className='border border-gray-300 rounded-2xl pt-5 pb-7 pl-3'>
          <img className='h-16' src={car10} alt="" />
          <p className='text-left pl-2 pt-2 text-primary'>Trucks</p>
        </div>
        <div className='border border-gray-300 rounded-2xl pt-5 pb-7 pl-3'>
          <img className='h-16' src={car11} alt="" />
          <p className='text-left pl-2 pt-2 text-primary'>Vans</p>
        </div>
        <div className='border border-gray-300 rounded-2xl pt-5 pb-7 pl-3'>
          <img className='h-16' src={car12} alt="" />
          <p className='text-left pl-2 pt-2 text-primary'>Wagons</p>
        </div>
      </div>
    </div>
  );
};

export default ResearchCar;