import { TRecord } from "@ts/record";

export type TAddRecordAction = {
  type: "ADD";
  payload: TRecord;
};

export function addRecord(payload: TRecord): TAddRecordAction {
  return {
    type: "ADD",
    payload,
  };
}
