import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import useFetchData from "../Utils/useFetchData";
import { ProductCard } from "../Components/ProductCard";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Components/Footer";
import LoaderSc from "../Components/LoaderSc";
import { Helmet } from "react-helmet-async";
import Filter from "../Components/Filter";

const ReadyToWear = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { data: products, loading, error, showLoader } = useFetchData(category);

  if (loading) {
    return <LoaderSc />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  // Function to handle category change and update URL
  const handleCategoryChange = (newCategory) => {
    navigate(`/${newCategory}`);
  };

  return (
    <div>
      <Helmet>
        <title>Ready To Wear - {category} - M.Yasmeen</title>
        <meta name="description" content={`Explore new Ready To Wear Collection. Now Available Online and in Stores`} />
      </Helmet>
      <Navbar onCategoryChange={handleCategoryChange} />
      <h5 className="text-center" styl={{paddding:"4px"}}>Ready to Wear - {category.replace(/-/g, ' ')}</h5>
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
            collectionName={category}
          />
        ))}
      </div>
    </div>
  );
};

export default ReadyToWear;
