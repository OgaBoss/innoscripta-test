import {configureStore} from "@reduxjs/toolkit";
import authReducer from './modules/authentication/authslice'

export const store = configureStore({
  reducer: {
    auth: authReducer
  }
})