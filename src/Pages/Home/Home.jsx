import React from 'react';
import ScrollToTop from 'react-scroll-to-top';
import About from './About';
import Article1 from './Article1';
import Article2 from './Article2';
import Banner from './Banner';
import CardGroup from './CardGroup';
import Contact from './Contact';
import ContactForm from './ContactForm';
import PopularProducts from './PopularProducts';
import ResearchCar from './ResearchCar';
import Services from './Services';
import UsedCar from './UsedCar';
import { ReactComponent as MySVG } from "../../assets/icons/double-arrow-top-icon (1).svg";

const Home = () => {
   return (
      <div className='lg:w-[1024px] xl:w-[1280px] mx-auto overflow-hidden lg:px-0 px-6'>
         <ScrollToTop component={<MySVG />} smooth="true" viewBox='0 0 150 280' style={{ backgroundColor: 'lightgray', padding: '5px'}} />
         <Banner />
         <CardGroup />
         <Services></Services>
         <PopularProducts />
         <About />
         <Article1 />
         <UsedCar/>
         <Article2/>
         <ResearchCar/>
         <Contact />
         <ContactForm />
      </div>
   );
};

export default Home;