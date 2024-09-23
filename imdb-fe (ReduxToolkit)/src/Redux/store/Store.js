import {combineReducers, configureStore}  from "@reduxjs/toolkit";
import movieReducer from '../slices/MovieSlice'
import TVReducer from "../slices/TVSlice";
// import storage from "redux-persist/lib/storage";



export const Store = configureStore({
    reducer:{
        movie:movieReducer,
        tv:TVReducer,
    }
})