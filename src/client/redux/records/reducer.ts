import { TRecord } from "@ts/record";
import { TRecordsAction } from "./actions";

const initial: TRecordsState = [];
export function recordsReducer(state = initial, action: TRecordsAction) {
  switch (action.type) {
    case "SET":
      return action.payload;

    case "ADD":
      return [...state, action.payload];

    case "EDIT":
      return state.map((r) => (r.id === action.payload.id ? action.payload : r));

    case "DELETE":
      return state.filter((r) => r.id !== action.payload.id);

    default:
      return state;
  }
}

export type TRecordsState = TRecord[];
