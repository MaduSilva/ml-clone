import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import FetchProductsParams from "@/interfaces/FetchProductsParams";
import { getFilters } from "../../services/api/getFilters";
import Filter from "@/interfaces/Filter";

export interface FiltersState {
  filtersData: Filter[];
  sortBy: string;
  filterId: string;
  filterSelected: string;
  filterMinPrice: string;
  filterMaxPrice: string;
}

const initialState: FiltersState = {
  filtersData: [],
  sortBy: "relevance",
  filterId: "price",
  filterSelected: "",
  filterMinPrice: "",
  filterMaxPrice: "",
};

export const fetchFilters = createAsyncThunk(
  "filters/fetchFilters",
  async (
    params: FetchProductsParams & { searchText: string },
    { dispatch }
  ) => {
    const { searchText, sortBy, filterId, filterSelected } = params;
    try {
      const filters: Filter[] = await getFilters(
        searchText,
        sortBy,
        filterId,
        filterSelected
      );
      dispatch(getFiltersReducer(filters));
      return filters;
    } catch (error) {
      console.error("fetchFilters error:", error);
      throw error;
    }
  }
);

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    getFiltersReducer: (state, action: PayloadAction<Filter[]>) => {
      return {
        ...state,
        filtersData: action.payload,
      };
    },
    setFilterMinPrice(state, action: PayloadAction<string>) {
      return {
        ...state,
        filterMinPrice: action.payload,
      };
    },
    setFilterMaxPrice(state, action: PayloadAction<string>) {
      return {
        ...state,
        filterMaxPrice: action.payload,
      };
    },
    setFilterSelected(state, action: PayloadAction<string>) {
      return {
        ...state,
        filterSelected: action.payload,
      };
    },
    setSortBy(state, action: PayloadAction<string>) {
      return {
        ...state,
        sortBy: action.payload,
      };
    },
  },
});

export const {
  getFiltersReducer,
  setFilterMinPrice,
  setFilterMaxPrice,
  setFilterSelected,
  setSortBy,
} = filtersSlice.actions;

export default filtersSlice.reducer;
