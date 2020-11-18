import React from "react";
import { useDispatch } from "react-redux";
import { addAsyncRecord } from "@client/redux/records/actions";
import useStyles from "./styles";

export type TCreateRecordProps = {
  onClose: () => void;
};
export const CreateRecord: React.FC<TCreateRecordProps> = ({ onClose }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [date, setDate] = React.useState<number>(Date.now());
  const [distance, setDistance] = React.useState<string>("");

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
    dispatch(addAsyncRecord({ id: date, date, distance: +distance }));
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
          <button className={classes.window_btn} type="submit">
            Создать
          </button>
        </form>
      </div>
    </div>
  );
};
