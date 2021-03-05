import { createStore } from "redux";
import rootReducer from "../reducer/index";
import { persistStore } from "redux-persist";

export const store: any = createStore(rootReducer);
export const persistor = persistStore(store);
