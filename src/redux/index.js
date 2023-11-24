import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart/reducer'
import productReducer from './products/reducer'

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
})