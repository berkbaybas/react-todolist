import React, { useState } from "react";
import "./App.css";

import TodoTopInput from "./components/TodoTopInput";
import TodoList from "./components/TodoList";

function App() {
  const [addingTodo, setAddingTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  function handleAddingTodo(value) {
    setAddingTodo(value);
  }

  function handleTodoList() {
    if (addingTodo.length == 0) {
      return;
    }
    const newTodoList = {
      id: Math.floor(Math.random() * 41234153),
      content: addingTodo,
      IsActive: true,
    };
    setTodoList([...todoList, newTodoList]);
    setAddingTodo("");
  }

  function handleTodoEdit(id, content) {
    const handleTodoList = todoList.map((todoInList) => {
      if (todoInList.id !== id) {
        return todoInList;
      }
      
      return {
        id,
        content,
        IsActive: true,
      };
    });
    setTodoList(handleTodoList);
  }

  function handleTodoDelete(id) {
    setTodoList([...todoList].filter((todo) => todo.id !== id));
  }

  return (
    <div className="App">
      <h2 className="title">TODO's</h2>
      <TodoTopInput
        addingTodo={addingTodo}
        handleAddingTodo={handleAddingTodo}
        handleTodoList={handleTodoList}
      />
      <TodoList
        todoList={todoList}
        handleTodoEdit={handleTodoEdit}
        handleTodoDelete={handleTodoDelete}
      />
    </div>
  );
}

export default App;
