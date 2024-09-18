import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

const initialState = {
  categories: [],
  categoriesStatus: STATUS.IDLE,
  categoryProducts: [],
  categoryProductsStatus: STATUS.IDLE,
};

const CategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncCategories.pending, (state, action) => {
        state.categoriesStatus = STATUS.LOADING;
      })
      .addCase(fetchAsyncCategories.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.categoriesStatus = STATUS.SUCCEEDED;
      })
      .addCase(fetchAsyncCategories.rejected, (state, action) => {
        state.categoriesStatus = STATUS.FAILED;
      })
      .addCase(fetchAsyncProductsCategory.pending, (state, action) => {
        state.categoryProductsStatus = STATUS.LOADING;
      })
      .addCase(fetchAsyncProductsCategory.fulfilled, (state, action) => {
        state.categoryProducts = action.payload;
        state.categoryProductsStatus = STATUS.SUCCEEDED;
      })
      .addCase(fetchAsyncProductsCategory.rejected, (state, action) => {
        state.categoryProductsStatus = STATUS.FAILED;
      });
  },
});

export const fetchAsyncProductsCategory = createAsyncThunk(
  "category-products/fetch",
  async (category) => {
    const response = await fetch(`${BASE_URL}products/category/${category}`);
    const data = await response.json();
    return data.products;
  }
);

export const fetchAsyncCategories = createAsyncThunk(
  "categories/fetch",
  async () => {
    const response = await fetch(`${BASE_URL}products/category-list`);
    const data = await response.json();
    return data;
  }
);

export const getCategoryProductStatus = (state) =>state.category.categoryProductsStatus
export const getAllProductCategory = (state) => state.category.categoryProducts
export const getAllCategories = (state) => state.category.categories;
export default CategorySlice.reducer;
