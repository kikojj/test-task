import React from "react";
import { useDispatch } from "react-redux";
import { editAsyncRecord, deleteAsyncRecord } from "@client/redux/records/actions";
import useStyles from "./styles";
import { TRecord } from "@ts/record";

export type TEditRecordProps = {
  record: TRecord;
  onClose: () => void;
};
export const EditRecord: React.FC<TEditRecordProps> = ({ record, onClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [date, setDate] = React.useState<number>(record.date);
  const [distance, setDistance] = React.useState<string>(record.distance.toString());

  function changeDistance(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    if ((newValue[newValue.length - 1] >= "0" && newValue[newValue.length - 1] <= "9") || newValue === "") {
      setDistance(newValue);
    }
  }

  function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (distance === "") {
      return;
    }
    dispatch(editAsyncRecord({ ...record, date, distance: +distance }));
    onClose();
  }

  function deleteHandler() {
    dispatch(deleteAsyncRecord(record));
    onClose();
  }

  return (
    <div className={classes.container} onClick={onClose}>
      <div className={classes.window} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={submitHandler}>
          <input
            className={classes.window_input_date}
            type="date"
            value={new Date(date).toLocaleDateString("ru").split(".").reverse().join("-")}
            onChange={(e) => setDate(new Date(e.target.value).getTime())}
          />
          <input className={classes.window_input_distance} type="text" placeholder="Дистанция" value={distance} onChange={changeDistance} />
          <div className={classes.window_actions}>
            <button className={classes.window_btn} type="submit">
              Сохранить
            </button>
            <button className={classes.window_btn} onClick={deleteHandler}>
              Удалить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
