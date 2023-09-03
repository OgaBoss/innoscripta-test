import {createSlice} from "@reduxjs/toolkit";
import {FetchNewsFeeds} from "./services.js";

const initialState = {
  feeds: [],
  source: null,
  category: null,
  keyword: null,
  page: 1,
  lastPage: 1,
  total: 0,
  limit: 12,
  date: null,
  author: null,
  loading: false,
  isSuccess: false
}

export const feedsSlice = createSlice({
  name: "Newsfeeds",
  initialState,
  reducers: {
    updateSource: (state, action) => {
      state.source = action.payload
    },
    updateCategory: (state, action) => {
      state.category = action.payload
    },
    updateAuthor: (state, action) => {
      state.author = action.payload
    },
    updateDate: (state, action) => {
      state.date = action.payload
    },
    updatePage: (state, action) => {
      state.page = action.payload
    },
    resetFilters: (state) => {
      state.source = null
      state.category = null
      state.author = null
      state.page = 1

    }
  },
  extraReducers: (builder) => {
    builder.addCase(FetchNewsFeeds.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(FetchNewsFeeds.fulfilled, (state, action) => {
      state.feeds = action.payload?.data?.data
      state.lastPage = action.payload?.data.meta.last_page
      state.total = action.payload?.data.meta.total
      state.loading = false
      state.isSuccess = true
    })
  },
})

export const  {updateSource, updateCategory, updateAuthor, updateDate, resetFilters, updatePage} = feedsSlice.actions
export default feedsSlice.reducer
