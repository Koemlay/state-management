import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counterSlice/counterSlice"
import { productApi } from "./features/products/productApi";
import { API } from "./features/api/api";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice.reducer,
      [productApi.reducerPath]: productApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
      getDefaultMiddleware().concat(productApi.middleware)
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
