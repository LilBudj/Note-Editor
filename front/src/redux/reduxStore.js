import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./appReducer";

const store = createStore(appReducer, applyMiddleware(thunkMiddleware));

export default store