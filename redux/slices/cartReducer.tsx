import { createSlice } from "@reduxjs/toolkit";

const CartState = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    cartState: (state, action) => {
      return action.payload;
    },

  },
});

export const { cartState } = CartState.actions;
export default CartState.reducer;