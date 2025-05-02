import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/redux/slices/cartReducer'
import alertReducer from '@/redux/slices/AlertReducer'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    alert:alertReducer
  },
})

