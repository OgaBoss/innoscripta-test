import {configureStore} from "@reduxjs/toolkit";
import authReducer from './modules/authentication/authslice'
import sharedSlice from './modules/shared/sharedSlice'
import feedsSlice from './modules/news/feedsSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'user']
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    shared: sharedSlice,
    feeds: feedsSlice
  }
})

export const persistor = persistStore(store)
