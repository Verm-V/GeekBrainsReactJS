import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import { PropTypes } from "prop-types";

const useStyles = makeStyles((theme) => ({
  messagesScreen: {
    height: "90%",
    border: "0px solid",
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
const MessagesScreen = ({ messages }) => {
  const classes = useStyles();

  const listItems = messages.map((message, i) => (
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
      <List dense={true} disablePadding={true}>{listItems}</List>
    </div>
  );
}

export default MessagesScreen;
