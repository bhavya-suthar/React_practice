import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from './SidebarSlice'
import CategoryReducer from './CategorySlice'
import ProductReducer from './ProductSlice'

export const store = configureStore({
    reducer:{
        sidebar:SidebarReducer,
        category:CategoryReducer,
        product:ProductReducer
    }
})