import {createAsyncThunk} from "@reduxjs/toolkit";
import {HTTP} from "../../api.js"

export const UserLogin = createAsyncThunk(
  'auth/login',
  async (payload, thunkAPI) => {
    try {
      return await HTTP.post('login', payload)
    } catch (e) {
        thunkAPI.rejectWithValue(e)
    }
  }
)
