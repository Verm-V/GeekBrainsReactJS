import React from "react";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/SendTwoTone";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  inputScreen: {
    flex: 1,
    border: "2px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "lightgray"
  },
  inputLine: {
    flex: 1
    //width: "80%",
    //fontSize: "100%",
  },
}));

function InputScreen(props) {
  const classes = useStyles();

  return (
    <div className={classes.inputScreen}>
      <TextField
        variant="filled"
        size="small"
        label="Введите текст сообщения"
        className={classes.inputLine}
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            props.onSendMessage(props.name);
          }
        }}
      />
      <Button
        color="default"
        size="large"
        variant="contained"
        endIcon={<SendIcon />}
        className="sendButton"
        onClick={() => props.onSendMessage(props.name)}
      >
        Отправить
      </Button>
    </div>
  );
}

export default InputScreen;
