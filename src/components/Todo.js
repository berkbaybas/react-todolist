import React, { useState } from "react";

import { FiEdit } from "react-icons/fi";
import { AiOutlineDelete } from "react-icons/ai";
import { TiTickOutline } from "react-icons/ti";

function Todo({ index, todo, handleTodoEdit, handleTodoDelete }) {
  const [editable, setEditable] = useState(false);
  const [content, setContent] = useState(todo.content);

  return (
    <div className="todoContainer">
      {editable ? (
        <input
          type="text"
          className="editableInput"
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        ></input>
      ) : (
        <p className="todoText">
          ({index + 1}) {todo.content}
        </p>
      )}
      <div className="todoButtonsContainer">
        {editable ? (
          <button
            onClick={() => {
              handleTodoEdit(todo.id, content);
              setContent("");
              setEditable(false);
            }}
          >
            <TiTickOutline fill="white"></TiTickOutline>
          </button>
        ) : (
          <button
            onClick={() => {
              setEditable(true);
              setContent(todo.content);
            }}
          >
            <FiEdit color="#265183"></FiEdit>
          </button>
        )}

        <button onClick={() => handleTodoDelete(todo.id)}>
          <AiOutlineDelete fill="#265183"></AiOutlineDelete>
        </button>
      </div>
    </div>
  );
}

export default Todo;
