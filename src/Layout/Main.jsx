import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Header from "../Pages/Shared/Header";
import ScrollToTop from "react-scroll-to-top";

const Main = () => {
  return (
    <div>
      <ScrollToTop
        color="white"
        smooth={true}
        viewBox="0 0 150 280"
        style={{
          background: "linear-gradient(135deg, #FF3811, purple)",
          borderRadius: "50%",
        }}
      />
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
