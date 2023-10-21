import {
  combineReducers,
  configureStore,
  type PreloadedState,
} from "@reduxjs/toolkit";
import { CurriedGetDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import loggerMiddleware from "redux-logger";

import { userReducer } from "./reducers/user_slice";
import { errorReducer } from "./reducers/error_slice";

export const rootReducer = combineReducers({
  user: userReducer,
  error: errorReducer,
});

export const rootMiddleware = (
  getDefaultMiddleware: CurriedGetDefaultMiddleware
) => getDefaultMiddleware().concat(loggerMiddleware);

export type RootState = ReturnType<typeof rootReducer>;

const storeInit = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    middleware: rootMiddleware,
    preloadedState,
  });

export const reduxStore = storeInit();

export type AppStore = ReturnType<typeof storeInit>;
export type AppDispatch = AppStore["dispatch"];
