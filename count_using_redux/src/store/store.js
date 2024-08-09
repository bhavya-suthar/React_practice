import { configureStore } from "@reduxjs/toolkit";
import CountReducer from "../feature/CountSlice"

const store = configureStore({
    reducer:{counter: CountReducer}
})
console.log(store)

export default store