import { createSlice } from "@reduxjs/toolkit";

interface CartState {
  cart: string[];
}

const saveToLocalStorage = (state: string[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(state));
  }
};

const getCartFromLocalStorage: string[] =
  typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("cart") ?? "[]")
    : [];

const CartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: getCartFromLocalStorage,
  } as CartState,
  reducers: {
    addToCart: (state, action) => {
      const payload = action.payload;

      // Ensure payload is always treated as an array
      const idsToAdd = Array.isArray(payload) ? payload : [payload];

      idsToAdd.forEach((beatId: string) => {
        if (!state.cart.includes(beatId)) {
          state.cart.push(beatId);
        }
      });

      saveToLocalStorage(state.cart);
    },
    deleteFromCart: (state, action) => {
      const beatId = action.payload;
      state.cart = state.cart.filter((id) => id !== beatId);
      saveToLocalStorage(state.cart);
    },
    clearCart:(state)=>{
      state.cart=[]
      saveToLocalStorage(state.cart)

    }
  },
});

export const { addToCart, deleteFromCart,clearCart } = CartSlice.actions;
export default CartSlice.reducer;
