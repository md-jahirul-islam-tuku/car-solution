import React from 'react';
import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import PopularProducts from './PopularProducts';
import Services from './Services';

const Home = () => {
   return (
      <div className='lg:px-20'>
         <Banner></Banner>
         <About></About>
         <Services></Services>
         <Contact></Contact>
         <PopularProducts />
      </div>
   );
};

export default Home;