import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Navbar } from "../Navbar/Navbar";

const ShopedItems = () => {
    const [checkedOutItems, setCheckedOutItems] = useState([]);
    const [checkoutDate, setCheckoutDate] = useState(null);
  
    useEffect(() => {
        // Retrieve checked-out items from local storage
        const data = JSON.parse(localStorage.getItem("checkedOutItems")) || {};
    
        // Set the items and date in the state
        setCheckedOutItems(data.items || []);
        setCheckoutDate(data.date || null);
      }, []);
  return (
    <>
        <Helmet>
        <title>Shoped Items | User Cart M.Yasmeen</title>
      </Helmet>
      <Navbar />
    <div>
      <h2 className="text-center py-4 " style={{fontSize:"18px"}}>Checked-Out Items</h2>
    
      <div className="card">
        <div className="row">
          <div className="col-md-8 cart">
      {checkedOutItems.length === 0 ? (
        <p>No items have been checked out yet.</p>
      ) : (
        <div>
             {checkoutDate && <p><strong>Checkout Date:</strong> {checkoutDate}</p>}

          {checkedOutItems.map((item, index) => (
            <div key={index} className="checked-out-item" style={{display:"flex", margin:"10px"}}>
              <img  src={item.image1} alt={item.title} style={{ width: '140px' }} />
          <div className="px-4"  >
             <p>{item.title}</p>
               <p> PKR {item.price}</p>
               <p>Quantity: {item.quantity > 1 ? item.quantity : 1}</p>
               <hr />
          </div>
             
              <hr />
            </div>
          
          ))}
             <hr />
        </div>
      )}
    </div>
    </div>
    </div>
    </div>
    </>
  );
};

export default ShopedItems;
