import { useHttp } from "@client/hooks/http.hook";
import { TGetRecordsResponse } from "@ts/requests/getRecords";
import { setRecords } from "./setRecords";
import { ThunkDispatch } from "redux-thunk";
import { TRecordsState } from "../reducer";

export function getAsyncRecords() {
  return (dispatch: ThunkDispatch<TRecordsState, any, any>) => {
    return useHttp("/walking")
      .get<TGetRecordsResponse>()
      .then((res) => {
        if (res) {
          return dispatch(setRecords(res));
        }
      });
  };
}
