import { createSlice } from "@reduxjs/toolkit";

// Initialize cart state from localStorage or with an empty array
const initialState = JSON.parse(localStorage.getItem("cart")) ?? [];

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    // Action to add item to cart
    addToCart(state, action) {
      state.push(action.payload);
    },
    // Action to remove item from cart
    delFromCart(state, action) {
      return state.filter(item => item.id !== action.payload.id);
    },
    // Action to update the quantity of an item in the cart
    updateCartQuantity(state, action) {
      const { id, quantity } = action.payload;
      const existingItem = state.find(item => item.id === id);
      if (existingItem && quantity > 0) {
        existingItem.quantity = quantity;
      }
    },
    // New action to reset the cart
    resetCart(state) {
      return [];  
    }
  
    
  }
});

export const { addToCart, delFromCart, updateCartQuantity, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
