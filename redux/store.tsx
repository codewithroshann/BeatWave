import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '@/redux/slices/cartReducer'
import alertReducer from '@/redux/slices/AlertReducer'
import musicPlayerReducer from '@/redux/slices/musicPlayerReducer'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    alert:alertReducer,
    musicPlayer:musicPlayerReducer
  },
})

