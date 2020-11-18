import { TRecord } from "@ts/record";

export type TSetRecordsAction = {
  type: "SET";
  payload: TRecord[];
};

export function setRecords(payload: TRecord[]): TSetRecordsAction {
  return {
    type: "SET",
    payload,
  };
}
