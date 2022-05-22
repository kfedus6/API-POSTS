import { combineReducers } from "redux";
import { postReducer } from "./postReducer";

export const rootReducers = combineReducers({
   post: postReducer
});

export type RootState = ReturnType<typeof rootReducers>; 