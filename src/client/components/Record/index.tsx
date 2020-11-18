import React from "react";
import useStyles from "./styles";
import { getWeekDayName } from "@client/utils/getWeekDayName";
import { formatDistance } from "@client/utils/formatDistance";

export type TRecordProps = {
  className?: string;
  date: number;
  distance: number;
  onClick: () => void;
};
export const Record: React.FC<TRecordProps> = ({ className, date, distance, onClick }) => {
  const classes = useStyles();

  return (
    <div className={className} onClick={onClick}>
      <div className={classes.col_1}>
        <span className={classes.weekday}>{getWeekDayName(date)}</span>
        {new Date(date).toLocaleDateString("ru")}
      </div>
      <div className={classes.col_2}>{formatDistance(distance)}</div>
    </div>
  );
};
