// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';
//storing cart productsin local storage
const saveToLocalStorage = (state: object) => {
  localStorage.setItem('cartProducts', JSON.stringify(state));
};
//retrieving cart products from local storage
let storedProduct: CartItem[] = [];
if (typeof window !== 'undefined') {
  storedProduct = JSON.parse(localStorage.getItem('cartProducts') || '[]');
}
// const storedProduct = JSON.parse(localStorage.getItem('cartProducts') || '[]');
interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  producer: string;
  file: string;
  count: number
  // You might want to add this property as well
}

const initialState = {
  cartItems: storedProduct || [] as CartItem[], // Define the type of cartItems
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, title, price, image, producer, file = "MP3", count = 1 } = action.payload;
      const beat = state.cartItems.find((item) => item.id === id);
      if (beat) {
        beat.count += 1
      } else {
        state.cartItems.push({ id, title, price, image, producer, file, count });
      }
      saveToLocalStorage(JSON.parse(JSON.stringify(state.cartItems)));


    },
    removeFromCart: (state, action) => {
      const { id } = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== id);
      saveToLocalStorage(JSON.parse(JSON.stringify(state.cartItems)));
    },
        clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
