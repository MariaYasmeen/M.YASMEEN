import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('wishlist')) ?? [];

const wishlistSlice = createSlice({
    name: 'wishlist',
    initialState,
    reducers: {
        addToWishlist(state, action) {
            const newItem = action.payload;
            state.push(newItem); // Direct mutation is fine with Redux Toolkit
        },
        delFromWishlist(state, action) {
            return state.filter(item => item.id !== action.payload.id);
        },
    }
});

export const { addToWishlist, delFromWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
