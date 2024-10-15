import { configureStore, combineReducers } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { persistReducer, persistStore } from 'redux-persist';
import userReducer from './UserSlice';

// Persist Config
const persistConfig = {
    key: 'root', // Or a more descriptive key
    storage,
    // whitelist: ['user'] // Only persist the 'user' slice
};

// Combine Reducers
const rootReducer = combineReducers({
    user: userReducer
});

// Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store Configuration
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoreActions: ['persist/PERSIST','persist/REHYDRATE'],
            }
        })
});

// Persistor
export const persistor = persistStore(store);
