import { combineReducers, configureStore } from '@reduxjs/toolkit'
import TableReducer from './TableSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key:"table_key",
    storage,
}

const rootReducer = combineReducers({
    table:TableReducer
})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: ['persist/PERSIST','persist/REHYDRATE'],
            }
        })
})

export const persistor = persistStore(store)