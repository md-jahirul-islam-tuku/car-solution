import React, { useContext } from 'react';
import { RiArrowGoForwardLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/userContext';
import './ServicesCard.css'

const ServicesCard = ({ service }) => {
  const {user} = useContext(AuthContext)
  const { title, img, price, _id } = service;
  return (
    <div className='cardContainer flex items-center'>
      <div className="card1 bg-gray-100">
        <figure className="imgBox">
          <img src={img} alt="service" className='h-[22vh] animate__animated animate__pulse animate__infinite animate__slower' />
        </figure>
        <div className="content">
          <h2 className="text-xl font-bold text-left">{title}</h2>
          <div className='flex justify-between items-center text-error'>
            <div className='font-bold text-lg'>Price: ${price}</div>
            <Link to={`/checkout/${_id}`} ><button className='hover:bg-gray-300 p-2 rounded-full'><RiArrowGoForwardLine /></button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;