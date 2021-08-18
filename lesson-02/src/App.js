import React, { useState, useEffect } from "react";
import "./App.css";
import InputComponent from "./InputLine";
import MessagesScreen from "./MessagesScreen";

function App() {

  /** Имена пользователей в чате */
  const usersNames = {
    USER: "Пользователь",
    BOT: "Бот",
  }

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
    setMessagesList((prev) => [...prev, {
      text: text,
      author: name
    }]);
    setLastName(name);
  }

  /** Принимает сообщение от пользователя для занесения его в список */
  const onSendMessage = (name) => {
    storeMessageToList(inputText, name);
    setInputText("");
  };

  /** Ответ бота на сообщение пользователя */
  useEffect(() => {
    if (!!lastName && lastName !== usersNames.BOT) {
      storeMessageToList(botMessage, usersNames.BOT);
    }
  }, [lastName]);

  /** */
  return (
    <div className="mainWindow">
      <MessagesScreen messages={messagesList} />

      <div className="inputWindow">
        <InputComponent
          value={inputText}
          onChange={setInputText}
          onSendMessage={onSendMessage}
          name={usersNames.USER}  
        />
        <button
          className="sendButton"
          onClick={() => onSendMessage(usersNames.USER)}>Отправить
        </button>
      </div>

    </div>
  );
}

export default App;
