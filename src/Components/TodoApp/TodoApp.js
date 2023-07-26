import './Todo.css'
import { useState } from 'react'

export default function TodoApp() {
  const [InputText, setInputText] = useState("");

  const inputData = (e) => {
    setInputText(e.target.value);
    console.log(InputText);
  };
  


  return (
    <div>
      <center>
        <h1>Todo App</h1>
        <input type="text" onChange={inputData} />
        <button >Add</button>
        <p>{InputText}</p>
      </center>
    </div>
  );
}
