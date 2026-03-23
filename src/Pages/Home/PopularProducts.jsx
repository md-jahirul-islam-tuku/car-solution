import React, { useEffect, useState } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5001/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div id="products" className="text-center">
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
        {products.slice(0, 3).map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <Link to={"/more-products"} className="btn btn-outline btn-error mt-20 mb-20 lg:mb-0">
        More Products
      </Link>
    </div>
  );
};

export default PopularProducts;
