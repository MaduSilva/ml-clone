import { configureStore, createSlice } from "@reduxjs/toolkit";
import productMock from './productMock.json'

const productsSlice = createSlice({
    name: "products",
    initialState: {
      productsData: productMock,
      searchText: "Apple",
    },
    reducers: {},
  });
  
  const filtersSlice = createSlice({
    name: "filters",
    initialState: {
      sortBy: "revelance",
      filterSelected: "",
      filterId: "",
    },
    reducers: {},
  });
  
export const mockStore = configureStore({
    reducer: {
      products: productsSlice.reducer,
      filters: filtersSlice.reducer,
    },
  });