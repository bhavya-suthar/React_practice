// import { legacy_createStore as createStore , applyMiddleware} from "redux";
// import newsReducer from './newsReducer'

// export const store = createStore(newsReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),applyMiddleware(thunk)
// )



import { legacy_createStore as createStore, applyMiddleware, compose } from "/node_modules/.vite/deps/redux.js?v=a47720fb";
// import thunk from "/node_modules/.vite/deps/redux-thunk.js?v=a47720fb";
import {thunk} from 'redux-thunk'
import newsReducer from "/src/Redux/newsReducer.js";

// Use compose to combine middleware and Redux DevTools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  newsReducer,
  composeEnhancers(applyMiddleware(thunk))
);
