import {configureStore}  from "@reduxjs/toolkit";
import movieReducer from '../slices/MovieSlice'

export const Store = configureStore({
    reducer:{
        movie:movieReducer,
    }
})