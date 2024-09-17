// src/components/Pages.jsx

import React from "react";
import fecthCollData from "../Utils/fetchCollData";
import { ProductCard } from "../Components/ProductCard";
import { Navbar } from "../Navbar/Navbar";
import {Footer} from "../Components/Footer"
import LoaderSc from "../Components/LoaderSc";
import { Helmet } from "react-helmet-async"; 
import Filter from "../Components/Filter";

const Unstitched = () => {
  const { data: products, loading, error } = fecthCollData("unstitched");

  if (loading) {
    return <LoaderSc />;
  }

  if (error) {
    return <div>{error}</div>;S
  }

  return (
    <>
      <Helmet>
        <title>Unstitched - M.Yasmeen</title> {/* Set dynamic title */}
        <meta name="description" content={`Explore new Unstitched Collection. Now Available Online and in Stores.`} /> {/* Add meta description */}
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
          collectionName="unstitched" // Pass the collection name
        />
      ))}
    </div>
    </>
  );
};

export default Unstitched;
