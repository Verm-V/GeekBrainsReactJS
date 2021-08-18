/** Компонент для ввода текста сообщения */
function InputLine(props) {
    return (
        <input className="inputLine"
            value={props.value}
            onChange={e => props.onChange(e.target.value)}
            onKeyDown={({ key }) => {
                if (key === "Enter") {
                    props.onSendMessage(props.name);
                }
            }}
        />
    );
}

export default InputLine;