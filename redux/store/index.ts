import { configureStore } from "@reduxjs/toolkit";
import {
	useSelector as useReduxSelector,
	useDispatch as useReduxDispatch,
} from "react-redux";

import type { ThunkAction } from "redux-thunk";
import type { Action } from "@reduxjs/toolkit";
import type { TypedUseSelectorHook } from "react-redux";

import { rootReducer } from "./root-reducer";

export const store = configureStore({
	reducer: rootReducer,
	devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();
