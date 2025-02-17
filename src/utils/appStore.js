import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartSlice"
const AppStore = configureStore({
    reducer:  {
        cart: CartSlice,
    }
});

export default AppStore;