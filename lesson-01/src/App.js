import { useState } from 'react';
import './App.css';
import Message from "./Message";

function App() {

  const [inputText, setInputText] = useState('')

  return (
    <div className="App">
      <div>Hello, humans!</div>
      <button onClick={(e) => setInputText("All your base are belong to us!")}>Press the button</button>
      <Message textToShow={inputText}/>
    </div>
  );
}

export default App;
