import { combineReducers } from "@reduxjs/toolkit";
import { recordsReducer } from "./records/reducer";

export const rootReducer = combineReducers({
  records: recordsReducer,
});
