// src/Functions/AddInWishList.js

export const AddInWishList = (item, wishlist, setWishlist, dispatch, addToWishlist, delFromWishlist) => {
    let updatedWishlist;
  
    if (wishlist.some((product) => product.id === item.id)) {
      // Remove item from wishlist
      updatedWishlist = wishlist.filter((product) => product.id !== item.id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      dispatch(delFromWishlist(item)); // Update Redux store
    } else {
      // Add item to wishlist
      updatedWishlist = [...wishlist, item];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      dispatch(addToWishlist(item)); // Update Redux store
    }
  
    setWishlist(updatedWishlist); // Update local state
  };
  