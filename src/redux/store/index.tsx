import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../reducer/index";
import ReduxThunk from "redux-thunk";
import { persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);

export const store: any = createStore(
  enhancedReducer,
  applyMiddleware(ReduxThunk)
);
export const persistor = persistStore(store);
