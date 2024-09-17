export const AddInWishList = (item, wishlist, dispatch, addToWishlist, delFromWishlist) => {
  let updatedWishlist;

  if (wishlist.some((product) => product.id === item.id)) {
      // Remove item from wishlist
      updatedWishlist = wishlist.filter((product) => product.id !== item.id);
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      dispatch(delFromWishlist(item)); // Ensure this dispatches a plain object action
  } else {
      // Add item to wishlist
      updatedWishlist = [...wishlist, item];
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      dispatch(addToWishlist(item)); // Ensure this dispatches a plain object action
  }
};
