import {
  combineReducers,
  configureStore,
  type PreloadedState,
} from "@reduxjs/toolkit";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import loggerMiddleware from "redux-logger";

import { userReducer } from "./reducers/user_slice";
import { errorReducer } from "./reducers/error_slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage"; // or another storage engine

export const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
});

export const rootMiddleware = (
  getDefaultMiddleware: CurriedGetDefaultMiddleware
) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(loggerMiddleware);

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

const storeInit = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: persistedReducer,
    middleware: rootMiddleware,
    preloadedState,
  });
const store = storeInit();

const persistedStore = persistStore(store);

export const reduxStore = persistedStore;

export { persistedStore, store };

export type AppStore = ReturnType<typeof storeInit>;
export type AppDispatch = AppStore["dispatch"];
