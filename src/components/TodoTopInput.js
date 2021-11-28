import React from "react";
import "../App.css";

const TodoTopInput = ({handleAddingTodo, handleTodoList, addingTodo}) => {

  function handleChange(e) {
    handleAddingTodo(e.target.value);
  }

  return (
    <div className="inputContainer">
      <input
        placeholder="add something.."
        value={addingTodo}
        onChange={handleChange}
      />
      <button onClick={handleTodoList}>Add</button>
    </div>
  );
};

export default TodoTopInput;
