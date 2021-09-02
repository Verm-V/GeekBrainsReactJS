import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import MessagesScreen from "./MessagesScreen";
import InputScreen from "./InputScreen";
import ChatsScreen from "./ChatsScreen";
import { ThemeProvider, createTheme } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "./ChatSlice";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF00FF",
    },
    secondary: {
      main: "#FF00FF",
    },
  },
});

const useStyles = makeStyles(() => ({
  chat: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
  },
  mainWindow: {
    width: "520px",
    height: "600px",
    border: "0px solid",
    display: "flex",
    flexDirection: "column",
  },
  chatsListWindow: {
    width: "120px",
    height: "600px",
    border: "0px solid",
    display: "flex",
    flexDirection: "column",
  },
}));

function Chat() {
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
  /** Массив объектов - чатов */
  const [chatsList, setChatsList] = useState([]);
  /** Массив объектов - сообщений */
  const { messagesList } = useSelector((state) => state.chat);
  const dispatch = useDispatch();
  /** Указатель на того кто последним оставил сообщение */
  const [lastName, setLastName] = useState();

  /** Инициализация*/
  useEffect(() => {
    setChatsList((prev) => [
      ...prev,
      {
        id: "01",
        name: "Чат 1",
      },
    ]);
    setChatsList((prev) => [
      ...prev,
      {
        id: "02",
        name: "Чат 2",
      },
    ]);
  }, []);

  /** Записывает сообщение в список и устанавливает указатель автора последнего сообщения */
  const storeMessageToList = (text, name) => {
    dispatch(addMessage({ text: text, author: name }));
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
    <ThemeProvider theme={theme}>
      <div className={classes.chat}>
        <div className={classes.chatsListWindow}>
          <ChatsScreen chats={chatsList} />
        </div>
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
    </ThemeProvider>
  );
}

export default Chat;
