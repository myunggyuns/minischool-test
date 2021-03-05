import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { searchReducer } from "./SearchReducer";

const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({ searchReducer });

export default persistReducer(persistConfig, rootReducer);
