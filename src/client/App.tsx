import React from "react";

import useStyles from "./utils/globalStyles";

export const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.app}>
      <div className={classes.header}>Шагомер на тестовое задание</div>
      <div className={classes.container}>
        <div className={classes.window}>
          <div className={classes.window_title}>Дата</div>
        </div>
      </div>
    </div>
  );
};
