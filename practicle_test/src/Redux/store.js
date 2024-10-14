import { configureStore ,combineReducers}  from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import userReducer from './UserSlice'
const persistConfig = {
    key: 'secretkey',
    storage,
    whitelist: ['user']
}
const rootReducer = combineReducers({
    user: userReducer,
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