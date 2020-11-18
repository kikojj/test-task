import { ThunkDispatch } from "redux-thunk";
import { useHttp } from "@client/hooks/http.hook";
import { TRecordsState } from "../reducer";
import { TAddRecordInput, TAddRecordResponse } from "@ts/requests/addRecord";
import { addRecord } from "./addRecord";
import { TRecord } from "@ts/record";

export function addAsyncRecord(record: TRecord) {
  return (dispatch: ThunkDispatch<TRecordsState, any, any>) => {
    return useHttp("/walking")
      .post<TAddRecordInput, TAddRecordResponse>(record)
      .then((res) => {
        if (res) {
          return dispatch(addRecord(res));
        }
      });
  };
}
