import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    items: ["pizza","burger", "KFC"],
  },
  reducers: {
    addItem: (state, action) => {
     // mutating the state directly 
        state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop();
    },
    clearCart: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const {addItem,removeItem,clearCart} = CartSlice.actions;

export default CartSlice.reducer;
