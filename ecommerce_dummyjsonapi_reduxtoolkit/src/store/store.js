import { combineReducers, configureStore } from "@reduxjs/toolkit";
import SidebarReducer from './SidebarSlice'
import CategoryReducer from './CategorySlice'
import ProductReducer from './ProductSlice'
import CartReducer from "./CartSlice";
import SearchReducer from "./SearchSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import persistStore from "redux-persist/es/persistStore";

const persistConfig ={
    key : "secrate",
    storage,
}

const rootReducer = combineReducers({ 
    sidebar:SidebarReducer,
    category:CategoryReducer,
    product:ProductReducer,
    cart:CartReducer,
    search:SearchReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer:persistedReducer
})

export const persistor = persistStore(store)