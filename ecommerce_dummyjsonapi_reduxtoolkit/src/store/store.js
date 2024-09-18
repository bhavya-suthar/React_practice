import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from './SidebarSlice'
import CategoryReducer from './CategorySlice'
import ProductReducer from './ProductSlice'
import CartReducer from "./CartSlice";
import SearchReducer from "./SearchSlice";

export const store = configureStore({
    reducer:{
        sidebar:SidebarReducer,
        category:CategoryReducer,
        product:ProductReducer,
        cart:CartReducer,
        search:SearchReducer
    }
})