import {createSlice} from '@reduxjs/toolkit'
import {FetchMe, UserLogin, UserRegister} from "./services.js";
import { toast } from 'react-toastify';

const initialState = {
    token: null,
    user: null,
    errorMessage: null,
    loading: false,
    isError: false,
    isSuccess: false,
    isLoginSuccess: false,
  }

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(UserLogin.pending, (state) => {
      state.loading = true
      state.isError = false
    })
    builder.addCase(UserLogin.fulfilled, (state, action) => {
      state.loading = false
      if (action.payload.status === 'error') {
        state.isError = true
        state.errorMessage = action.payload?.message
      } else {
        state.isLoginSuccess = true
        state.token = action.payload.data?.token
        state.user = action.payload.data?.user
        localStorage.setItem('token', action.payload.data?.token)
        toast.success("Welcome back");
      }
    })
    builder.addCase(UserLogin.rejected, (state) => {
      state.loading = false
      state.isError = true
    })
    builder.addCase(UserRegister.pending, (state) => {
      state.loading = true
      state.isError = false
    })
    builder.addCase(UserRegister.fulfilled, (state, action) => {
      state.loading = false
      if (action.payload.status === 'error') {
        state.isError = true
        state.errorMessage = action.payload?.message
      } else {
        state.isSuccess = true
        toast.success("Registration was successful, now you can login");
      }
    })
    builder.addCase(UserRegister.rejected, (state) => {
      state.loading = false
      state.isError = true
    })
    builder.addCase(FetchMe.fulfilled, (state, action) => {
      state.user = action.payload?.data
    })
  },
})

export default authSlice.reducer
