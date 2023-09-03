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

export const UserRegister = createAsyncThunk(
  'auth/register',
  async (payload, thunkAPI) => {
    try {
      return await HTTP.post('register', payload)
    } catch (e) {
      thunkAPI.rejectWithValue(e)
    }
  }
)

export const FetchMe = createAsyncThunk(
  'auth/me',
  async (_, thunkAPI) => {
    try {
      return await HTTP.get('me')
    } catch (e) {
      thunkAPI.rejectWithValue(e)
    }
  }
)
