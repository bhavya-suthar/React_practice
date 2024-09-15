import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { BASE_URL } from "../utils/apiURL";
import { STATUS } from "../utils/status";

const initialState = {
  products: [],
  productsStatus: STATUS.IDLE,
  productSingle: [],
  productSingleStatus: STATUS.IDLE,
};

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase()
  },
});

//for getting the products list with limited numbers
export const fetchAsyncProducts = createAsyncThunk('products/fetch',async(limit)=>{
 const response= await fetch(`${BASE_URL}products?limit=${limit}`);
 const data = await response.json();
 returndata.products
})

//getting a single product data also
export const fetchAsyncProductSingle = createAsyncThunk('product-single/fetch',async(id)=>{
    
})
