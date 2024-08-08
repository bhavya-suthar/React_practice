import { configureStore }  from "@reduxjs/toolkit";
import TodoReducer from "../Feature/TodoSlice";

export const store = configureStore({
    reducer: TodoReducer
})