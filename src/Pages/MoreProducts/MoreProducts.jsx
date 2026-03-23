import React, { useEffect, useState } from "react";
import Product from "../Home/Product";
import PageLoader from "../../Loader/PageLoader";

const MoreProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false); // loading off
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);
  // ✅ Loader show
  if (loading) {
    return <PageLoader fullScreen />;
  }
  return (
    <div
      id="products"
      className="text-center mb-20 max-w-[1280px] mx-auto lg:px-0 px-6"
    >
      <div className="py-10" data-aos="zoom-in-up" data-aos-duration="2000">
        <h5 className="font-bold text-error text-lg">Popular Products</h5>
        <h1 className="text-5xl font-bold">Browse Our Products</h1>
        <p className="text-xl">
          The majority have suffered alteration in some form, by injected
          humour, or randomized <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 gap-10">
        {products.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MoreProducts;
