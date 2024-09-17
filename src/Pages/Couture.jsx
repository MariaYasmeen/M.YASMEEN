// src/components/Pages.jsx

import React from "react";
import fecthCollData from "../Utils/fetchCollData";
import { ProductCard } from "../Components/ProductCard";
import { Navbar } from "../Navbar/Navbar";
import {Footer} from "../Components/Footer"
import LoaderSc from "../Components/LoaderSc";
import { Helmet } from "react-helmet-async"; 
import Filter from "../Components/Filter";

const Couture = () => {
  const { data: products, loading, error } = fecthCollData("Couture");

  if (loading) {
    return <LoaderSc />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <Helmet>
        <title>Couture - M.Yasmeen</title> {/* Set dynamic title */}
        <meta name="description" content={`Explore new Handmade Collection .`} /> {/* Add meta description */}
      </Helmet>
    <Navbar />
    
  
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          image1={product.image1 || "No image"}
          image2={product.image2 || "No image"}
          title={product.title || "No Name"}
          code={product.code || "No Code"}
          price={product.price || "No Price"}
          collectionName="Couture" // Pass the collection name
        />
      ))}
    </div>
    <Footer />
    </>
  );
};

export default Couture;
