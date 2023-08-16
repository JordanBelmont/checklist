import React from 'react';

const Todo = () => {

   return (
      <div className="todo">
         <li className='todo-item'>item</li>
         <button className="complete-btn">
            <i className="fa-solid fa-check"></i>
         </button>
         <button className="delete-btn">
            <i className="fa-solid fa-trash"></i>
         </button>
      </div>
   );
};

export default Todo;