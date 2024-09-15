import { configureStore } from "@reduxjs/toolkit";
import SidebarReducer from './SidebarSlice'
import CategoryReducer from './CategorySlice'

export const store = configureStore({
    reducer:{
        sidebar:SidebarReducer,
        category:CategoryReducer
    }
})