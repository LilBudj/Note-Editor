import {createStore} from "redux";
import Middleware from "redux-thunk";
import {appReducer} from "./appReducer";

const store = createStore(appReducer);

export default store