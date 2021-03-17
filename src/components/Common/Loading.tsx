import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import Dialog from "@material-ui/core/Dialog";
import { makeStyles, createStyles } from "@material-ui/core/styles";

type Props = {
  open: boolean;
};

const useStyles = makeStyles(() =>
  createStyles({
    dialogPaper: {
      overflow: "hidden",
    },
    progress: {
      margin: "2rem",
    },
  })
);

const Loading = ({ open }: Props) => {
  const classes = useStyles();

  return (
    <Dialog classes={{ paperScrollPaper: classes.dialogPaper }} open={open}>
      <CircularProgress className={classes.progress} size={50} />
    </Dialog>
  );
};

export default Loading;
