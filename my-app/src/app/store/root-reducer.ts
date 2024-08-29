import { combineReducers } from "redux";
import toDoReducer from "./to-do/slice";

export const rootReducer = combineReducers({ toDoReducer })
