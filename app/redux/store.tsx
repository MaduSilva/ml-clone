import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products/productsSlice";
import filtersReducer from "./filters/filtersSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    filters: filtersReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
