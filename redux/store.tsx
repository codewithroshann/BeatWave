import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/redux/slices/cartReducer'

export const store = configureStore({
  reducer: {
    cart: cartReducer
  },
})

