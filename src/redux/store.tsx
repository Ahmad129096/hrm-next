"use client";

import {
  Action,
  ThunkAction,
  configureStore,
  combineReducers,
  Store,
} from "@reduxjs/toolkit";

import {
  persistReducer,
  FLUSH,
  PAUSE,
  PERSIST,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "reduxjs-toolkit-persist";
import statusReducer from "./slices/statusSlice";
import drawerReducer from "./slices/drawerSlice";
import snackbarReducer from "./slices/snackbarSlice";
import authenticationReducer from "./slices/authSlice";
import storage from "reduxjs-toolkit-persist/lib/storage";
import permissionsReducer from "./slices/permissionsSlice";
import counterSlice from "./slices/counterSlice";
import { createWrapper } from "next-redux-wrapper";

const reducers = combineReducers({
  status: statusReducer,
  toggle: drawerReducer,
  snackbar: snackbarReducer,
  auth: authenticationReducer,
  permissions: permissionsReducer,
  counter: counterSlice,
});

const persistConfig = {
  storage,
  key: "root123",
  whitelist: ["auth", "status", "permissions"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store: Store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        // Ignore these field paths in all actions
        ignoredActionPaths: [
          "meta.arg",
          "payload.timestamp",
          "meta.baseQueryMeta.request",
          "meta.baseQueryMeta.response",
        ],
        // Ignore these paths in the state
        // ignoredPaths: ["items.dates"],
      },
    }),
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  unknown,
  RootState,
  ReturnType,
  Action<string>
>;
