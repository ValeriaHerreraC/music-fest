import { configureStore } from '@reduxjs/toolkit'
import artistasReducer from "../features/artistsSlice";

export const store = configureStore({
  reducer: {
    artists: artistasReducer
  },
})