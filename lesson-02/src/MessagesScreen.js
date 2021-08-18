/** Экран вывода сообщений */
function MessagesScreen(props) {
    const listItems = props.messages.map((message, i) =>
        <div key={i}>
            <span className="msg-author">{"[ "}{message.author}{" ] "}</span>
            <span className="msg-text">{message.text}</span>
        </div>
    );

    return (
        <div className="messageScreen">
            {listItems}
        </div>
    );
}

export default MessagesScreen;