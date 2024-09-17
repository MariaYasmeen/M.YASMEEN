import React, { useState, useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Home from "./Pages/Home";
import Menswear from "./Pages/Menswear";
import Jewelry from "./Pages/Jewelry";
import { Product } from "./Components/Product";
import Register from "./Register/Register";
import { AdminDashboard } from "./Admin/AdminDashboard";
import SignIn from "./Register/SignIn";
import AddNewCollection from "./FBDatabase/AddNewCollection";
import Kidswear from "./Pages/Kidswear";
import './App.css';
import { UserAuthProvider } from "./Context/UserAuthContext";
import UpdateCollection from "./FBDatabase/UpdateCollection";
import { Cart } from "./Pages/Cart";
import Account from "./Register/Account";
import { TitleProvider } from "./Context/TitleContext";
import { MyWishList } from "./Pages/MyWishList";
import SearchPage from "./Search/SearchPage";
import Couture from "./Pages/Couture";
import ReadyToWear from "./Pages/ReadyToWear";
import Unstitched from "./Pages/Unstitched";
import DeleteCollection from "./FBDatabase/DeleteCollection";
import ShopedItems from "./Pages/ShopedItems";
import RTWHomePg from "./Pages/RTWHomePg";
import JHomePg from "./Pages/JHomePg";

const App = () => {
  const [showMessage, setShowMessage] = useState(true);

  useEffect(() => {
    // Hide the message after 3 seconds
    const timer = setTimeout(() => {
      setShowMessage(false);
    }, 4000);

    // Cleanup the timer if the component is unmounted
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <TitleProvider>
        <UserAuthProvider>
          {/* Dialog Box */}
          {showMessage && (
            <div style={dialogBoxStyle} className="text-center">
              <h4>NOTE:</h4>
              <p>All of the material and images used in this Clothing Store are taken from MARIA.B official website, and are not owned by the creator of this website.</p>
            </div>
          )}

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/kidswear" element={<Kidswear />} />
            <Route path="/unstitched" element={<Unstitched />} />
            <Route path="/couture" element={<Couture />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/account/*" element={<Account />} />
            <Route path="/register" element={<Register />} />
            <Route path="/readytowear" element={<RTWHomePg />} />
            <Route path="/jewelry" element={<JHomePg />} />
            <Route path="/bag" element={<Cart />} />
            <Route path="/:category" element={<ReadyToWear />} />
            <Route path="/:category" element={<Jewelry />} />
            <Route path="/account/signin" element={<SignIn />} />
            <Route path="/shopeditems" element={<ShopedItems />} />
            <Route path="/mywishlist" element={<MyWishList />} />
            <Route path="/admindashboard/deletecollection" element={<DeleteCollection />} />
            <Route path="/admindashboard/addnewcollection" element={<AddNewCollection />} />
            <Route path="/admindashboard/updatecollection" element={
              <AdminRoute>
                <UpdateCollection />
              </AdminRoute>
            } />
            <Route path="/admindashboard" element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            } />
            <Route path="/cart" element={
              <UserRoute>
                <Cart />
              </UserRoute>
            } />
            <Route path="/menswear" element={<Menswear />} />
            <Route path="/product/:title" element={<Product />} />
          </Routes>
        </UserAuthProvider>
      </TitleProvider>
    </BrowserRouter>
  );
};

export default App;

// Styles for the dialog box
const dialogBoxStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#f8f9fa',
  padding: '30px',
  boxShadow: '0 4px 8px rgba(0,0,0,0.2)', 
  zIndex: 1000,
  textAlign: 'center',
  maxWidth: '80%',
};

// UserRoute component
export const UserRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
}

// AdminRoute component
export const AdminRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.email === "mariyayasmeen000@gmail.com") {
    return children;
  } else {
    return <Navigate to="/signin" />;
  }
}
