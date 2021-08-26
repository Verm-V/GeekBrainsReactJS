import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  chatsScreen: {
    flex: 1,
    border: "0px solid",
    display: "flex",
    alignItems: "left",
    justifyContent: "space-between",
    background: "lightblue",
  },
  chatId: {
    color: "red",
    fontSize: "120%",
  },
  chatName: {
    color: "blue",
    fontSize: "120%",
  },
}));

function ChatsScreen(props) {
  const classes = useStyles();

  const listItems = props.chats.map((chat, i) => (
    <ListItem key={i}>
      <ListItemText>
        <span className={classes.chatId}>
          {"[ "}
          {chat.id}
          {" ] "}
        </span>
        <span className={classes.chatName}>{chat.name}</span>
      </ListItemText>
    </ListItem>
  ));

  return (
    <div className={classes.chatsScreen}>
      <div>
        <List dense={true} disablePadding={true}>{listItems}</List>
      </div>
    </div>
  );
}

export default ChatsScreen;
