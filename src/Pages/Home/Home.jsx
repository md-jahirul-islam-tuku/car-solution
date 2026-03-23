import React from "react";
import About from "./About";
import Article1 from "./Article1";
import Article2 from "./Article2";
import Banner from "./Banner";
import CardGroup from "./CardGroup";
import Contact from "./Contact";
import ContactForm from "./ContactForm";
import PopularProducts from "./PopularProducts";
import ResearchCar from "./ResearchCar";
import Services from "./Services";
import UsedCar from "./UsedCar";

const Home = () => {
  return (
    <div className="max-w-[1280px] mx-auto overflow-hidden lg:px-0 px-6">
      <Banner />
      <CardGroup />
      <Services />
      <PopularProducts />
      <About />
      <Article1 />
      <UsedCar />
      <Article2 />
      <ResearchCar />
      <Contact />
      <ContactForm />
    </div>
  );
};

export default Home;
