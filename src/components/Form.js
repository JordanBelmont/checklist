import React from 'react';


const Form = () => {
   return (
      <form className="form">
         <input
            type="text"
            className="todo-input"
         />
         <button
            type="submit"
            className="todo-button"
         >
            <i className="fas fa-plus"></i>
         </button>
         <div className="select">
            <select
               name="todos"
               className="todo-select"
            >
               <option value="all">All</option>
               <option value="completed">Completed</option>
               <option value="uncompleted">Uncompleted</option>
            </select>
         </div>
      </form>
   );
};

export default Form;