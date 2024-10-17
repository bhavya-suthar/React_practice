import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import todoReducer from './TodoSlice'
import { persistReducer, persistStore } from "redux-persist";

const persistConfig ={
    key : 'secretkey',
    storage,
    whitelist:['todos']
}

const rootReducer = combineReducers({
    todos:todoReducer
})

const persistedReducer =persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: ['persist/PERSIST','persist/REHYDRATE'],
            }
        })
})

export const persistor =persistStore(store);