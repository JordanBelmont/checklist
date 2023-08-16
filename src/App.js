import React, { useState } from 'react';
import './App.css';
// Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {

   // States
   const [inputText, setInputText] = useState("");

   return (
      <div className="App">
         <header>
            <h1>Checklist</h1>
         </header>
         <Form setInputText={setInputText} />
         <TodoList />
      </div>
   );
}

export default App;
