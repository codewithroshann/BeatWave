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
  // You might want to add this property as well
}

const initialState = {
  cartItems:storedProduct||[] as CartItem[], // Define the type of cartItems
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log(action.payload,"action.payload");
      const { id, title, price, image, producer, file = "MP3" } = action.payload;
      state.cartItems.push({ id, title, price, image, producer, file });
      saveToLocalStorage(JSON.parse(JSON.stringify(state.cartItems)));     
    },
    removeFromCart: (state, action) => {

    },
    updateQuantity: (state, action) => {

    },
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
