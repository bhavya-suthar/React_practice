import { configureStore ,combineReducers}  from "@reduxjs/toolkit";
import TodoReducer from "../Feature/TodoSlice";
// import PostReducer from '../Feature/PostSlice'
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
    key: 'secretkey',
    storage,
    whitelist: ['todo']
}
const rootReducer = combineReducers({
    todo: TodoReducer,
})


const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
        reducer: persistedReducer, 
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
                },
            }),
})

export const persistor = persistStore(store)