import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Components/Footer";
import { createSlug } from "../Functions/createSlug";
import { Link, useNavigate } from "react-router-dom";
import { delFromWishlist } from "../Redux/WishlistSlice";
import { Helmet } from "react-helmet-async";

export const MyWishList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Access wishlist items from Redux store
  const wishlistItems = useSelector((state) => state.wishlist); // Ensure you're accessing the correct path

  const handleBackToShop = () => {
    navigate(-1);
  };

  // Update local storage whenever wishlist items change
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
  }, [wishlistItems]);

  const deleteWishList = (item) => {
    dispatch(delFromWishlist(item));
  };

  return (
    <>
      <Helmet>
      <title>{`Wishlist: ${wishlistItems.length} Items | M.Yasmeen`}</title>
    
      </Helmet>
      <Navbar />
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4>
                    <b>Wishlist</b>
                  </h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  {wishlistItems.length} items
                </div>
              </div>
            </div>

               {/* Handle empty wishlist */}
               {wishlistItems.length === 0 ? (
              <p>Your wishlist is empty.</p>
            ) : (
              wishlistItems.map((item, index) => {
                const { title, price, code, image1 , desc} = item;
                const slug = createSlug(title || "no-title"); // Safely create a slug

                return (
                  <div className=" border-top border-bottom" key={index}>
                    <div className="row main align-items-center">
                      <div className="col-5">
                        <img
                          className="img-fluid"
                          src={image1}
                          alt={title || "No title available"}
                        />
                      </div>
                      <div className="col">
                        <Link to={`/product/${slug}`} className="row text-muted">
                          {title || "No title available"}
                        </Link>
                        <div className="row">{code}</div>
                      </div>
                      
                      
                      <div className="col">
                        PKR {price} {/* Display item price */}
                        <button
                          onClick={() => deleteWishList(item)}
                          className="del-icon"
                        >
                          <i className="fa-solid fa-x"></i>
                        </button>
                      </div>
                    </div>
                  </div>
               
              );
              })
            )}

            <div className="back-to-shop">
              <button
                onClick={handleBackToShop}
                style={{ border: "none", background: "none", cursor: "pointer" }}
              >
                <i className="fa-solid fa-arrow-left"></i> Back to shop
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
