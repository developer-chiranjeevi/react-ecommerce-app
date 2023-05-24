import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./cartSlice.js"
import authSlice from "./isAuth.js";

export const cartActions = cartSlice.actions;
export const authActions  = authSlice.actions; 
const store = configureStore({
    reducer:{
        cart:cartSlice.reducer,
        auth:authSlice.reducer
    }
})


export default store;