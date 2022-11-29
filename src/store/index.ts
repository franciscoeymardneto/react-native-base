import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from '@reduxjs/toolkit';
import { persistReducer } from "redux-persist";
import thunk from 'redux-thunk';

import rootReducer from "./reducers";

const persistConfig = {
  key: "root",
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})
