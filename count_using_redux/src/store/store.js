import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "../feature/CountSlice"

const store = configureStore({
    reducer:{counter: CountReducer}
})

export default store