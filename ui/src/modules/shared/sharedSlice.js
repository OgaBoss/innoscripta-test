import {createSlice} from '@reduxjs/toolkit'
import {FetchAllSources, FetchAuthorsBySources, FetchCategoriesBySources, SaveUserPreference} from "./services.js";

const initialState = {
  sources: [],
  categories: [],
  authors: [],
  loading: false,
  isSuccess: false,
  filter: false,
  errorMessage: null
}

export const sharedSlice = createSlice({
  name: "Shared",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter =  action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(FetchAllSources.fulfilled, (state, action) => {
      state.sources = action.payload.data
    })
    builder.addCase(FetchCategoriesBySources.fulfilled, (state, action) => {
      state.categories = action.payload.data
    })
    builder.addCase(FetchAuthorsBySources.fulfilled, (state, action) => {
      state.authors = action.payload.data
    })
    builder.addCase(SaveUserPreference.pending, (state) => {
      state.loading = true
    })

    builder.addCase(SaveUserPreference.fulfilled, (state, action) => {
      state.loading = false
      state.isSuccess = true

      if (action.payload.status === 'error') {
        state.errorMessage = action.payload.message
      } else {
        state.isSuccess = true
      }
    })
  },
})

export const {setFilter} = sharedSlice.actions

export default sharedSlice.reducer
