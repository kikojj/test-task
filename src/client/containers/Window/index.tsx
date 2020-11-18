import React from "react";
import { useSelector } from "react-redux";
import { Record } from "@client/components";
import { TState } from "@client/redux/utils";

import { CreateRecord } from "../CreateRecord";
import IconSort from "./svgs/IconSort.svg";
import useStyles from "./styles";

export const Window: React.FC = () => {
  const classes = useStyles();
  let records = useSelector((state: TState) => state.records);

  const [showCreateWindow, setShowCreateWindow] = React.useState<boolean>(false);
  const [sort, setSort] = React.useState<"none" | "date_htl" | "date_lth" | "dist_htl" | "dist_lth">("date_htl");

  if (sort === "date_htl") {
    records = records.sort((r1, r2) => r2.date - r1.date);
  } else if (sort === "date_lth") {
    records = records.sort((r1, r2) => r1.date - r2.date);
  }

  if (sort === "dist_htl") {
    records = records.sort((r1, r2) => r2.distance - r1.distance);
  } else if (sort === "dist_lth") {
    records = records.sort((r1, r2) => r1.distance - r2.distance);
  }

  return (
    <React.Fragment>
      <div className={classes.window}>
        <div className={classes.window_title}>
          <div
            className={
              `${classes.window_title_col} ${classes.window_title_col}-1` +
              (sort === "date_htl" || sort === "date_lth" ? ` ${classes.window_title_col}-active` : "") +
              (sort === "date_lth" ? ` ${classes.window_title_col}-revert` : "")
            }
            onClick={() => setSort(sort === "date_htl" ? "date_lth" : "date_htl")}
          >
            Дата
            <img src={IconSort} alt="sort" />
          </div>
          <div
            className={
              `${classes.window_title_col} ${classes.window_title_col}-2` +
              (sort === "dist_htl" || sort === "dist_lth" ? ` ${classes.window_title_col}-active` : "") +
              (sort === "dist_lth" ? ` ${classes.window_title_col}-revert` : "")
            }
            onClick={() => setSort(sort === "dist_htl" ? "dist_lth" : "dist_htl")}
          >
            Дистанция
            <img src={IconSort} alt="sort" />
          </div>
        </div>
        <div className={classes.window_content}>
          {records.map((record) => (
            <Record key={record.id} className={classes.window_row} date={record.date} distance={record.distance} />
          ))}
        </div>
        <div className={classes.window_action} onClick={() => setShowCreateWindow(true)}>
          Добавить запись
        </div>
      </div>
      {showCreateWindow ? <CreateRecord onClose={() => setShowCreateWindow(false)} /> : ""}
    </React.Fragment>
  );
};
