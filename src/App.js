// import './App.css';
// import HomePage from './Pages/HomePage'

// function App() {
//   return (
//     <div className="App">
//       < HomePage />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [editIndex, setEditIndex] = useState(-1);

  const addTodo = () => {
    if (newTodo.trim() == '') return;
    if (editIndex !== -1) {
      const newTodos = [...todos];
      newTodos[editIndex] = newTodo;
      setTodos(newTodos);
      setNewTodo('');
      setEditIndex(-1);
    } else {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);o
    setTodos(newTodos);
  };

  const editTodo = (index) => {
    setNewTodo(todos[index]);
    setEditIndex(index);
  };

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>{editIndex !== -1 ? 'Update' : 'Add'}</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => editTodo(index)}>Edit</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
