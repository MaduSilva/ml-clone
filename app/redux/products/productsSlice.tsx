import Product from "@/interfaces/productsInterface";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import FetchProductsParams from "@/interfaces/fetchProductsParamsInterface";
import { getProducts } from "../../pages/api/getProducts";

export interface ProductState {
  productsData: Product[];
  searchText: string;
}

const initialState: ProductState = {
  productsData: [],
  searchText: "Samsung",
};

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (
    params: FetchProductsParams & { filterSelected: string },
    { dispatch }
  ) => {
    const { searchText, sortBy, filterId, filterSelected } = params;
    try {
      if (searchText) {
        const products: Product[] = await getProducts(
          searchText,
          sortBy,
          filterId,
          filterSelected
        );
        dispatch(getProductsReducer(products));
        return products;
      }
    } catch (error) {
      console.error("fetchProducts error:", error);
      throw error;
    }
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getProductsReducer: (state, action: PayloadAction<Product[]>) => {
      return {
        ...state,
        productsData: action.payload,
      };
    },
    setSearchText: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        searchText: action.payload,
      };
    },
  },
});

export const { getProductsReducer, setSearchText } = productsSlice.actions;

export default productsSlice.reducer;
