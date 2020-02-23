import {applyMiddleware, compose, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import {appReducer} from "./appReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(appReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store