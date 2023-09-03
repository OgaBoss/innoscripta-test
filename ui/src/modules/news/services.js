import {createAsyncThunk} from "@reduxjs/toolkit";
import {HTTP} from "../../api.js"

export const FetchNewsFeeds = createAsyncThunk(
  'feeds/feeds',
  async (params, thunkAPI) => {
    // const CancelToken = HTTP.CancelToken;
    // const source = CancelToken.source();

    try {
      return await HTTP.get('news', {
        params,
        // cancelToken: source.token
      })
    } catch (e) {
      // if (HTTP.isCancel(e)) {
      //   console.log('Request canceled', e.message);
      // } else {
      //   // handle error
      // }
      thunkAPI.rejectWithValue(e)
    } finally {
     // source.cancel('Operation canceled by the user.');
    }

  }
)
