import React from 'react';

const Todo = () => {

   return (
      <div className="todo">
         <li className='todo-item'>item</li>
         <button className="complete-btn">
            <i className="fas fa-laugh"></i>
         </button>
         <button className="delete-btn">
            <i className="fas fa-trash"></i>
         </button>
      </div>
   );
};

export default Todo;