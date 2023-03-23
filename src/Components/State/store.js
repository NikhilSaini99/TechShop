import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './Features/cartSlice'
import loginSlice from "./Features/loginSlice";

export const store = configureStore({
    reducer:{
        cart : cartReducer,
        loginCheck :loginSlice
    }
})