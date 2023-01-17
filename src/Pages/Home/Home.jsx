import React from 'react';
import About from './About';
import Article1 from './Article1';
import Banner from './Banner';
import CardGroup from './CardGroup';
import Contact from './Contact';
import PopularProducts from './PopularProducts';
import Services from './Services';

const Home = () => {
   return (
      <div className='lg:px-20'>
         <Banner></Banner>
         <CardGroup/>
         <Services></Services>
         <PopularProducts />
         <About></About>
         <Contact></Contact>
         <Article1/>
      </div>
   );
};

export default Home;