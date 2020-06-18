import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from "./reducers" // it will select 'index.js'

const initialState= {}
const componseEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||  compose
export default createStore(
  rootReducer,
  initialState,
  componseEnhancer(applyMiddleware(thunk))
);