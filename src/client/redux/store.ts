import thunk from "redux-thunk";
import { applyMiddleware, createStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { TRecordsState } from "./records/reducer";

export type TState = {
  records: TRecordsState;
};
export const store = createStore(rootReducer, applyMiddleware(thunk));
