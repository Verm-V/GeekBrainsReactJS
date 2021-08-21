import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MessagesScreen from "./MessagesScreen";
import InputScreen from "./InputScreen";

const useStyles = makeStyles(() => ({
  app: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  mainWindow: {
    width: "640px",
    height: "600px",
    border: "2px solid",
    display: "flex",
    flexDirection: "column",
  },
}));

function App() {
  const classes = useStyles();

  /** Имена пользователей в чате */
  const usersNames = {
    USER: "Пользователь",
    BOT: "Бот",
  };

  /** Фиксированное сообщение для бота */
  const botMessage = "Сообщение принято";

  /** Сообщение в поле ввода */
  const [inputText, setInputText] = useState("");
  /** Массив объектов - сообщений */
  const [messagesList, setMessagesList] = useState([]);
  /** Указатель на того кто последним оставил сообщение */
  const [lastName, setLastName] = useState();

  /** Записывает сообщение в список и устанавливает указатель автора последнего сообщения */
  const storeMessageToList = (text, name) => {
    setMessagesList((prev) => [
      ...prev,
      {
        text: text,
        author: name,
      },
    ]);
    setLastName(name);
  };

  /** Принимает сообщение от пользователя для занесения его в список */
  const onSendMessage = (name) => {
    storeMessageToList(inputText, name);
    setInputText("");
  };

  /** Ответ бота на сообщение пользователя с задержкой*/
  useEffect(() => {
    if (!!lastName && lastName !== usersNames.BOT) {
      setTimeout(() => {
        storeMessageToList(botMessage, usersNames.BOT);
      }, 1000);
    }
  }, [lastName]);

  /** */
  return (
    <div className={classes.app}>
      <div className={classes.mainWindow}>
        <MessagesScreen messages={messagesList} />
        <InputScreen
          value={inputText}
          onChange={setInputText}
          onSendMessage={onSendMessage}
          name={usersNames.USER}
        />
      </div>
    </div>
  );
}

export default App;
