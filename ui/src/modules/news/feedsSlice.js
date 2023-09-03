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
    }
  },
  extraReducers: (builder) => {
    builder.addCase(FetchNewsFeeds.pending, (state, action) => {
      console.log(FetchNewsFeeds())
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

export const  {updateSource, updateCategory, updateAuthor, updateDate} = feedsSlice.actions
export default feedsSlice.reducer
