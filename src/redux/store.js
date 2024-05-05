import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '@/redux/reducer/themeSlice'

export const store = configureStore({
  reducer: {
    theme:themeReducer,
  },
})