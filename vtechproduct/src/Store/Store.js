import { configureStore } from '@reduxjs/toolkit'
import AuthenticationSlice from './Reducers/AuthenticationSlice'
export const store = configureStore({
  reducer: {
    auth:AuthenticationSlice
  },
})