import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./Slices/AuthSlice"

export default configureStore({
  reducer: {
    auth : authReducer
  }
})