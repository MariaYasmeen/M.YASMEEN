import { configureStore } from '@reduxjs/toolkit';
import CartSlice from './CartSlice';
import WishListSlice from './WishlistSlice';

const store = configureStore({
    reducer: {
        cart: CartSlice,
        wishlist: WishListSlice,
    },
});

export default store;