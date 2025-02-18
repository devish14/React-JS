import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./cartSlice"
const AppStore = configureStore({
    // this cartName will be accessible for the resucer CartSlice to access it
    reducer:  {
        cartName: CartSlice,
    }
});

export default AppStore;