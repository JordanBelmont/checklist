import React, { useState } from 'react';
import './App.css';
// Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {

   // States
   const [inputText, setInputText] = useState("");
   const [todos, setTodos] = useState([]);
   const [status, setStatus] = useState("all");

   return (
      <div className="App">
         <header>
            <h1>Checklist</h1>
         </header>
         <Form
            setStatus={setStatus}
            setInputText={setInputText}
            todos={todos}
            setTodos={setTodos}
            inputText={inputText}
         />
         <TodoList
            todos={todos}
            setTodos={setTodos}
         />
      </div>
   );
}

export default App;
