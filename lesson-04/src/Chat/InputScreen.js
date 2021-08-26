import React, { useRef } from "react";
import Button from "@material-ui/core/Button";
import SendIcon from "@material-ui/icons/SendTwoTone";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  inputScreen: {
    flex: 1,
    border: "0px solid",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    background: "lightgray",
  },
  inputLine: {
    flex: 1,
  },
}));

function InputScreen(props) {
  const classes = useStyles();
  const inputField = useRef();

  /** Установка фокуса на поле ввода */
  const focus = () => {
    inputField.current.focus();
  };

  return (
    <div className={classes.inputScreen}>
      <TextField
        inputRef={inputField}
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
        autoFocus
      />
      <Button
        color="default"
        size="large"
        variant="contained"
        endIcon={<SendIcon />}
        className="sendButton"
        onClick={() => {
          props.onSendMessage(props.name);
          focus();
        }}
      >
        Отправить
      </Button>
    </div>
  );
}

export default InputScreen;
