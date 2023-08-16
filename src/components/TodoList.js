import React from 'react';
// Import Components
import Todo from './Todo';

// Props
const TodoList = ({ todos, setTodos }) => {

   return (
      <div className="todo-container">
         <ul className="todo-list">
            {todos.map(todo => (
               <Todo
                  text={todo.text}
                  key={todo.id}
                  todo={todo}
                  todos={todos}
                  setTodos={setTodos}
               />
            ))}
         </ul>
      </div>
   );
};

export default TodoList;