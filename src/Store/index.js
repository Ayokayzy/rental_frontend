import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userReducer";

// const config = {
//   key: "root",
//   version: 1,
//   storage,
// };

const reducer = combineReducers({
  user: userReducer,
});

// const persistedReducer = persistReducer(config, reducer);

// const store = configureStore({
//   reducer: persistedReducer,
// });

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

// const persistor = persistStore(store);

export {
  store,
  // persistor
};

// const persisted = persistReducer(config, reducer);

// const store = configureStore({
//   reducer: persisted,
// });

// export { persisted, store };
