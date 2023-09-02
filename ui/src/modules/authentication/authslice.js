import {createSlice} from '@reduxjs/toolkit'
import {UserLogin} from "./services.js";

const initialState = {
    token: null,
    user: null,
    loading: false,
    isError: false,
    isSuccess: false,
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
      } else {
        state.isSuccess = true
        state.token = action.payload.data?.access_token
      }
    })
    builder.addCase(UserLogin.rejected, (state, action) => {
      state.loading = false
      state.isError = true
    })
  },
})

export default authSlice.reducer
