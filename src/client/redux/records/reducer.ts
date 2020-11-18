import { TRecord } from "@ts/record";
import { TRecordsAction } from "./utils";

const initial: TRecordsState = [];

export function recordsReducer(state = initial, action: TRecordsAction) {
  switch (action.type) {
    case "SET":
      return action.payload;

    case "ADD":
      return [...state, action.payload];

    default:
      return state;
  }
}

export type TRecordsState = TRecord[];
