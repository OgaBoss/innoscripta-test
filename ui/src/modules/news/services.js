import {createAsyncThunk} from "@reduxjs/toolkit";
import {HTTP} from "../../api.js"

export const FetchNewsFeeds = createAsyncThunk(
  'feeds/feeds',
  async (params, thunkAPI) => {
    try {
      return await HTTP.get('news', {
        params,
      })
    } catch (e) {
      thunkAPI.rejectWithValue(e)
    }

  }
)


export const FetchNewsDetails = createAsyncThunk(
  'feeds/details',
  async (id, thunkAPI) => {
    try {
      return await HTTP.get(`news/${id}`)
    } catch (e) {
      thunkAPI.rejectWithValue(e)
    }

  }
)
