// src/components/Pages.jsx

import React, { useState, useEffect } from "react";
import useFetchCollection from "../Utils/useFetchCollection";
import { Helmet } from "react-helmet-async";
import LoaderSc from "../Components/LoaderSc";

const Bridals = () => {
    const { data: products, loading, error } = useFetchCollection("Bridals");

    if (loading) {
      return <LoaderSc />;
    }
  
    if (error) {
      return <div>{error}</div>;
    }
  

  return (
    <>
    <Helmet>
        <title>Bridals | M.Yasmeen</title>
      </Helmet>
    <div className="container mt-4">
      <h2>Product List</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name || "No Name"}</h5>
                <p className="card-text"><strong>Description:</strong> {product.description || "No Description"}</p>
                <p className="card-text"><strong>Price:</strong> ${product.price || "No Price"}</p>
                <p className="card-text"><strong>Category:</strong> {product.category || "No Category"}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
};

export default Bridals;
