import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  messagesScreen: {
    height: "90%",
    border: "2px solid",
    background: "teal",
  },
  msgAuthor: {
    color: "pink",
    fontSize: "120%",
  },
  msgText: {
    color: "cyan",
    fontSize: "120%",
  },
}));

/** Экран вывода сообщений */
function MessagesScreen(props) {
  const classes = useStyles();

  const listItems = props.messages.map((message, i) => (
    <ListItem key={i}>
      <ListItemText>
        <span className={classes.msgAuthor}>
          {"[ "}
          {message.author}
          {" ] "}
        </span>
        <span className={classes.msgText}>{message.text}</span>
      </ListItemText>
    </ListItem>
  ));

  return (
    <div className={classes.messagesScreen}>
      <List dense="true">{listItems}</List>
    </div>
  );
}

export default MessagesScreen;
