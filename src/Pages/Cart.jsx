import React, { useEffect, useMemo, useState } from "react";
import { Navbar } from "../Navbar/Navbar";
import { Footer } from "../Components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { delFromCart, updateCartQuantity, resetCart } from "../Redux/CartSlice"; // Import the clearCart action
import { Helmet } from "react-helmet-async";
import { createSlug } from "../Functions/createSlug";

export const Cart = () => { 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [checkoutMessage, setCheckoutMessage] = useState("");

  // Access cart items from Redux store
  const cartItems = useSelector((state) => state.cart);

  const totalAmount = useMemo(() => {
    return cartItems.reduce((acc, cartItem) => {
      const itemPrice = parseFloat(cartItem.price.replace(/,/g, '')) || 0;
      const itemQuantity = parseInt(cartItem.quantity, 10) || 1;
      return acc + itemPrice * itemQuantity;
    }, 0);
  }, [cartItems]); // This recalculates when 'cartItems' changes
  
  // Format number with commas
  const formatNumber = (number) => number.toLocaleString();

  const shipping = 100; // Shipping cost
  const grandTotal = shipping + totalAmount;

  // Store cart items in local storage whenever they change
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity < 1) return; // Prevent setting quantity to less than 1
  
    dispatch(updateCartQuantity({ id: item.id, quantity: newQuantity })); // Corrected to pass 'quantity'
  };
  

  const handleBackToShop = () => {
    navigate(-1);
  };

  
  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }
  
    // Get the current cart items
    const checkedOutItems = [...cartItems];
  
    // Capture the current date and time
    const checkoutDate = new Date().toLocaleString();
  
    // Save checked-out items and the date in local storage
    localStorage.setItem("checkedOutItems", JSON.stringify({
      items: checkedOutItems,
      date: checkoutDate
    }));
  
    // Clear the cart
    dispatch(resetCart());
    localStorage.removeItem("cart");
  
    // Alert message and navigate to the ShopedItems page
    alert("All items are checked out. Happy Shopping!");
    navigate("/shopeditems");
  };
  
  

  return (
    <>
      <Helmet>
        <title>Cart | M.Yasmeen</title>
      </Helmet>
      <Navbar />
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
            <div className="title">
              <div className="row">
                <div className="col">
                  <h4><b>Shopping Cart</b></h4>
                </div>
                <div className="col align-self-center text-right text-muted">
                  {cartItems.length} items
                </div>
              </div>
            </div>

            {cartItems.length === 0 && <p>Your cart is empty.</p>}
            {checkoutMessage && <p>{checkoutMessage}</p>}

            {cartItems.map((item, index) => {
              const { title, price, code, image1, quantity = 1 } = item;
              const slug = createSlug(title);

              return (
                <div className="row border-top border-bottom" key={index}>
                  <div className="row main align-items-center">
                    <div className="col-2">
                      <Link to={`/product/${slug}`}>
                        <img className="img-fluid" src={image1} alt={title} />
                      </Link>
                    </div>
                    <div className=" col" >
                      <Link to={`/product/${slug}`}>
                        <div className="row text-muted">{title}</div>
                      </Link>
                      <div className="col">{code}</div>
                      <div className="row">PKR {price}</div>
                    </div>
                  <div className="col">
  <button
    className="quantity-button"
    onClick={() => handleQuantityChange(item, quantity - 1)}
  >
    -
  </button>
  <span className="quantity">{quantity}</span>
  <button
    className="quantity-button"
    onClick={() => handleQuantityChange(item, quantity + 1)}
  >
    +
  </button>
</div>

                    <div className="col">
                      <button
                        onClick={() => dispatch(delFromCart(item))}
                        className="del-icon"
                      >
                        <i className="fa-solid fa-x"></i>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="back-to-shop">
              <button
                onClick={handleBackToShop}
                style={{ border: "none", background: "none", cursor: "pointer" }}
              >
                <i className="fa-solid fa-arrow-left"></i> Back to shop
              </button>
            </div>
          </div>
          <div className="col-md-4 summary">
            <div>
              <h5><b>Summary</b></h5>
            </div>
            <hr />
            <div className="row">
              <div className="col">ITEMS {cartItems.length}</div>
              <div className="col text-right">PKR {formatNumber(totalAmount)}</div>
            </div>
            <form>
              <p>SHIPPING</p>
              <select>
                <option className="text-muted">
                  Standard Delivery - PKR {formatNumber(shipping)}
                </option>
              </select>
            </form>
            <div
              className="row"
              style={{ borderTop: "1px solid rgba(0,0,0,.1)", padding: "2vh 0" }}
            >
              <div className="col">TOTAL PRICE</div>
              <div className="col text-right">PKR {formatNumber(grandTotal)}</div>
            </div>
            <button onClick={handleCheckout} className="btn  ">
CHECKOUT</button>
    <Link to="/shopeditems">See Shoped Items</Link>
   
            </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;
