import { ThunkDispatch } from "redux-thunk";
import { useHttp } from "@client/hooks/http.hook";
import { TRecordsState } from "./reducer";
import { TAddRecordInput, TAddRecordResponse } from "@ts/requests/addRecord";
import { TRecord } from "@ts/record";
import { TGetRecordsResponse } from "@ts/requests/getRecords";

export function setRecords(payload: TRecord[]) {
  return {
    type: "SET" as "SET",
    payload,
  };
}

export function addRecord(payload: TRecord) {
  return {
    type: "ADD" as "ADD",
    payload,
  };
}

export function editRecord(payload: TRecord) {
  return {
    type: "EDIT" as "EDIT",
    payload,
  };
}

export function deleteRecord(payload: TRecord) {
  return {
    type: "DELETE" as "DELETE",
    payload,
  };
}

// ASYNC ACTION CREATORS

export function getAsyncRecords() {
  return (dispatch: ThunkDispatch<TRecordsState, any, TRecordsAction>) => {
    return useHttp("/walking")
      .get<TGetRecordsResponse>()
      .then((res) => {
        if (res) {
          return dispatch(setRecords(res));
        }
      });
  };
}

export function addAsyncRecord(record: TRecord) {
  return (dispatch: ThunkDispatch<TRecordsState, any, TRecordsAction>) => {
    return useHttp("/walking")
      .post<TAddRecordInput, TAddRecordResponse>(record)
      .then((res) => {
        if (res) {
          return dispatch(addRecord(res));
        }
      });
  };
}

export function editAsyncRecord(record: TRecord) {
  return (dispatch: ThunkDispatch<TRecordsState, any, TRecordsAction>) => {
    return useHttp(`/walking/${record.id}`)
      .put<TAddRecordInput, TAddRecordResponse>(record)
      .then((res) => {
        if (res) {
          return dispatch(editRecord(res));
        }
      });
  };
}

export function deleteAsyncRecord(record: TRecord) {
  return (dispatch: ThunkDispatch<TRecordsState, any, TRecordsAction>) => {
    return useHttp(`/walking/${record.id}`)
      .delete<any>()
      .then((res) => {
        if (res) {
          dispatch(deleteRecord(record));
        }
      });
  };
}

export type TRecordsAction = ReturnType<typeof setRecords> | ReturnType<typeof addRecord> | ReturnType<typeof deleteRecord> | ReturnType<typeof editRecord>;
