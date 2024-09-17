import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useDispatch, useSelector } from "react-redux"; 
import { addToWishlist, delFromWishlist } from "../Redux/WishlistSlice";
import useFetchCollection from "../Utils/useFetchCollection";
import { AddInWishList } from "../Functions/AddInWishList";
import { useTitle } from "../Context/TitleContext";
import ButtonFlip from "../Animations/ButtonFlip";
import ImageLoader from "./ImageLoader"; // Import the ImageLoader component
import "./Components.css";

export const ProductCard = ({
  id,
  image1,
  image2,
  title,
  code,
  price,
  collectionName,
}) => {
  const slug = title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const wishlist = useSelector((state) => state.wishlist);
  const isInWishlist = wishlist.some((item) => item.id === id);
  const { data: products } = useFetchCollection(collectionName);
  const item = products.find((prod) => prod.id === id);
  const { setTitle } = useTitle();

  useEffect(() => {
    setTitle(`${title} - M.Yasmeen`);
  }, [title, setTitle]);

  const toggleWishlist = () => {
    if (isInWishlist) {
      dispatch(delFromWishlist(item));
    } else {
      dispatch(addToWishlist(item));
    }
    AddInWishList(item, wishlist, dispatch);
  };

  const handleQuickView = () => {
    navigate(`/product/${slug}`, { state: { collectionName } });
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Determine which image to show based on hover state and availability of image2
  const displayImage = isHovered && image2 ? image2 : image1;

  return (
    <>
      <Helmet>
        <meta name="description" content={`See new Collection for Men.`} />
      </Helmet>
      <div
        className={`product-card ${imageLoaded ? "loaded" : "loading"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="product-image">
          <ImageLoader isLoading={!imageLoaded} /> {/* Use the ImageLoader component */}
          <Link to={`/product/${slug}`} state={{ collectionName }}>
            <img
              src={displayImage}
              alt={title}
              onLoad={handleImageLoad}
              style={{ display: imageLoaded ? "block" : "none" }}
            />
            {image2 && isHovered && (
              <ButtonFlip
                frontText="Customer Favorite"
                backText="Quick View"
                className="buy-button"
                onClick={handleQuickView}
              />
            )}
          </Link>

          <button className="wishlist-button" onClick={toggleWishlist}>
            <i
              className={`fa-heart icon-top-right ${
                isInWishlist ? "fa-solid" : "fa-regular"
              }`}
            ></i>
          </button>

          <span className="badge-top-left">NEW</span>
        </div>
        <div className="product-details">
          <h2>{title}</h2>
          <div className="product-info">
            <p>{code}</p>
            <p className="price">PKR {price}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
