import React from 'react';
import './UsedCar.css';
import car1 from '../../assets/images/UsedCar/acura.jpg'
import car2 from '../../assets/images/UsedCar/audi.jpg'
import car3 from '../../assets/images/UsedCar/bmw.jpg'
import car4 from '../../assets/images/UsedCar/buick.jpg'
import car5 from '../../assets/images/UsedCar/cadillac.jpg'
import car6 from '../../assets/images/UsedCar/chevy.jpg'
import car7 from '../../assets/images/UsedCar/chrysler.jpg'
import car8 from '../../assets/images/UsedCar/dodge.jpg'
import car9 from '../../assets/images/UsedCar/fiat.jpg'
import car10 from '../../assets/images/UsedCar/ford.jpg'
import car11 from '../../assets/images/UsedCar/honda.jpg'
import car12 from '../../assets/images/UsedCar/hyundai.jpg'
import car13 from '../../assets/images/UsedCar/jeep.jpg'
import car14 from '../../assets/images/UsedCar/lexus.jpg'
import car15 from '../../assets/images/UsedCar/mercedes.jpg'
import car16 from '../../assets/images/UsedCar/nissan.jpg'
import car17 from '../../assets/images/UsedCar/toyota.jpg'
import car18 from '../../assets/images/UsedCar/genesis.jpg'

const UsedCar = () => {
  return (
    <section id='usedCar'>
      <div className='py-10' data-aos="zoom-in-up" data-aos-duration="2000">
        <h5 className='font-bold text-error text-lg'>Big Car Bazar</h5>
        <h1 className="text-5xl font-bold pb-4">Shop Used Car</h1>
        <p className='text-xl'>18 Best Hight MPG Used Cars for 2023: Reviews, Photos, and More details information.<br />Ask the Experts: If you have any question to know.</p>
      </div>
      <div className='slider' data-aos="zoom-in-up" data-aos-duration="2000">
        <div className='slide-track'>
          <div className="slide">
            <img src={car1} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Acura</h1>
          </div>
          <div className="slide">
            <img src={car2} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Audi</h1>
          </div>
          <div className="slide">
            <img src={car3} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>BMW</h1>
          </div>
          <div className="slide">
            <img src={car4} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Buick</h1>
          </div>
          <div className="slide">
            <img src={car5} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Cadillac</h1>
          </div>
          <div className="slide">
            <img src={car6} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Chevy</h1>
          </div>
          <div className="slide">
            <img src={car7} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Chrysler</h1>
          </div>
          <div className="slide">
            <img src={car8} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Dodge</h1>
          </div>
          <div className="slide">
            <img src={car9} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Fiat</h1>
          </div>
          <div className="slide">
            <img src={car10} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Ford</h1>
          </div>
          <div className="slide">
            <img src={car11} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Honda</h1>
          </div>
          <div className="slide">
            <img src={car12} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Hyundai</h1>
          </div>
          <div className="slide">
            <img src={car13} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Jeep</h1>
          </div>
          <div className="slide">
            <img src={car14} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Lexus</h1>
          </div>
          <div className="slide">
            <img src={car15} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Mercedes</h1>
          </div>
          <div className="slide">
            <img src={car16} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Nissan</h1>
          </div>
          <div className="slide">
            <img src={car17} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>Toyota</h1>
          </div>
          <div className="slide">
            <img src={car18} alt="img-1" />
            <h1 className='text-3xl top-5 left-7 absolute font-bold text-primary'>genesis</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UsedCar;