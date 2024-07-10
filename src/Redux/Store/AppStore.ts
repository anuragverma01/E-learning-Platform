import {
  configureStore,
  applyMiddleware,
  combineReducers,
} from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import UserAuthReducer from "../Slices/userSlice";
import CourseReducer from "../Slices/courseSlice";
import AdminReducer from "../Slices/adminSlice";
import rootSaga from "../../Saga/AuthSaga/authSaga";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  userAuth: UserAuthReducer,
  course: CourseReducer,
  admin: AdminReducer,
});
const persistConfig = {
  key: "root",
  storage,
  blacklist:["course"]
  // whitelist: ["course"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Configure store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, // Add this if you face issues with non-serializable values in actions
    }).concat(sagaMiddleware),
});

// Persistor
export const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);
// Types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
