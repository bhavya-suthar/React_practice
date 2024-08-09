import { configureStore }  from "@reduxjs/toolkit";
import TodoReducer from "../Feature/TodoSlice";
import PostReducer from '../Feature/PostSlice'


export const store = configureStore({
    reducer: {
        todo:TodoReducer,
        Post:PostReducer
    }
})