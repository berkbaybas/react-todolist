import React from "react";
import "../App.css";

import Todo from "./Todo";

const TodoList = ({ todoList, handleTodoEdit, handleTodoDelete }) => {
  if (todoList.length == 0) {
    return <div>There are no waiting todo.</div>;
  }

  return todoList.map((todo, index) => {
    return (
      <div key={index}>
        <Todo
          index={index}
          todo={todo}
          handleTodoEdit={handleTodoEdit}
          handleTodoDelete={handleTodoDelete}
        />
      </div>
    );
  });
};

export default TodoList;
