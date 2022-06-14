import { combineReducers } from "redux";
import { reducer as testReducer } from "../slices/test.slice";

export const rootReducer = combineReducers({
	test: testReducer,
});
