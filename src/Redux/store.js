import { reducer as app } from "./app/reducer";
import { reducer as auth } from "./auth/reducer";
import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({ app, auth });

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
