import { combineReducers } from "redux";
import TodoAppReducer from "./TodoAppReducer";
import OnlineShopReducer from "./OnlineShopReducer";

export default combineReducers({ TodoAppReducer, OnlineShopReducer });
