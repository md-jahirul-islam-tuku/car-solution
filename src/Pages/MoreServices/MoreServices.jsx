import React, { useEffect, useState } from "react";
import ServicesCard from "../Home/ServicesCard";
import PageLoader from "../../Loader/PageLoader";
import ScrollToTop from "react-scroll-to-top";

const MoreServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // loading state

  useEffect(() => {
    fetch("http://localhost:5001/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
        setLoading(false); // loading off
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []); // ✅ fix here

  // ✅ Loader show
  if (loading) {
    return <PageLoader fullScreen />;
  }

  return (
    <div id="services" className="text-center">
      <ScrollToTop
        color="white"
        smooth={true}
        viewBox="0 0 150 280"
        style={{
          background: "linear-gradient(135deg, #e42daa, #6a11cb)",
          borderRadius: "50%",
        }}
      />
      <div className="py-10" data-aos="zoom-in-up" data-aos-duration="2000">
        <h4 className="font-bold text-error text-lg">Services</h4>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="text-xl">
          The majority have suffered alteration in some form, by injected
          humour, or Randomized <br /> words which don't look even slightly
          believable.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServicesCard key={service._id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default MoreServices;
