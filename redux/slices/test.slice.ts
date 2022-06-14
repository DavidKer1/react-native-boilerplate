import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store/index";

interface TestState {
	test: string;
}
const initialState: TestState = {
	test: "test",
};
const slice = createSlice({
	name: "test",
	initialState,
	reducers: {
		setTest: (state, action) => {
			state.test = action.payload;
		},
	},
});

export const { reducer } = slice;

export const getTest = (state: RootState) => state.test.test;
