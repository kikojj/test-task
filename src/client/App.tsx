import React from "react";
import { useDispatch } from "react-redux";
import { Window } from "./containers";
import { getAsyncRecords } from "./redux/records/actions";

import useStyles from "./utils/globalStyles";

export const App: React.FC = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getAsyncRecords());
  }, []);

  return (
    <div className={classes.app}>
      <div className={classes.header}>Шагомер на тестовое задание</div>
      <div className={classes.container}>
        <Window />
      </div>
    </div>
  );
};
