import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, updateTodo } from "./todoSlice";

function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");

  const handleEditClick = (id, currentText) => {
    setEditId(id);
    setEditText(currentText);
  };

  const handleSaveClick = (id) => {
    if (editText.trim()) {
      dispatch(updateTodo({ id, newText: editText }));
      setEditId(null);
      setEditText("");
    }
  };

  const handleDelete = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo-item" key={todo.id}>
          {editId === todo.id ? (
            <>
              <input
                type="text"
                onChange={(e) => setEditText(e.target.value)}
                value={editText}
              ></input>
              <button onClick={() => handleSaveClick(todo.id)}>Save</button>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <button onClick={() => handleEditClick(todo.id, todo.text)}>
                Edit
              </button>
            </>
          )}

          <button onClick={() => handleDelete(todo.id)} className="delete-btn">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
