import {createAsyncThunk} from "@reduxjs/toolkit";
import {HTTP} from "../../api.js"

export const FetchAllSources = createAsyncThunk(
  'shared/sources',
  async (_, thunkAPI) => {
    try {
      return await HTTP.get('sources')
    } catch (e) {
      thunkAPI.rejectWithValue(e)
    }
  }
)

export const FetchCategoriesBySources = createAsyncThunk(
  'shared/categories',
  async (id, thunkAPI) => {
    try {
      return await HTTP.get(`sources/${id}/categories`)
    } catch (e) {
      thunkAPI.rejectWithValue(e)
    }
  }
)

export const FetchAuthorsBySources = createAsyncThunk(
  'shared/authors',
  async (id, thunkAPI) => {
    try {
      return await HTTP.get( `sources/${id}/authors`)
    } catch (e) {
      thunkAPI.rejectWithValue(e)
    }
  }
)

export const SaveUserPreference = createAsyncThunk(
  'shared/preference',
  async (payload, thunkAPI) => {
    try {
      return await HTTP.post( 'preferences', payload)
    } catch (e) {
      thunkAPI.rejectWithValue(e)
    }
  }
)
