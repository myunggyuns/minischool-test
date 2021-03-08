import { combineReducers } from "redux";
import { searchReducer } from "./SearchReducer";

const rootReducer = combineReducers({ searchReducer });

export default rootReducer;
