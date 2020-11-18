import { TAddRecordAction } from "./actions/addRecord";
import { TSetRecordsAction } from "./actions/setRecords";

export type TRecordsAction = TSetRecordsAction | TAddRecordAction;
