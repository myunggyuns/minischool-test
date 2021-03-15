import { combineReducers } from "redux";
import { searchReducer } from "./SearchReducer";

export const rootReducer = combineReducers({ searchReducer });
