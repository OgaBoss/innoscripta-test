import {configureStore} from "@reduxjs/toolkit";
import authReducer from './modules/authentication/authSlice.js'

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
})