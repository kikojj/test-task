import React from "react";
import useStyles from "./styles";

export type TRecordProps = {
  className?: string;
  date: number;
  distance: number;
};
export const Record: React.FC<TRecordProps> = ({ className, date, distance }) => {
  const classes = useStyles();
  return (
    <div className={className}>
      <div className={classes.col_1}>{new Date(date).toLocaleDateString("ru")}</div>
      <div className={classes.col_2}>{distance}</div>
    </div>
  );
};
