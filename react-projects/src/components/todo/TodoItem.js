import React from "react";

const TodoItem = ({ todo, toggleTodo, removeTodo }) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={todo?.completed}
        onChange={() => toggleTodo(todo.id)}
      />
      <span
        style={{ textDecoration: todo?.completed ? "line-through" : "none" }}
      >
        {todo?.task}
      </span>
      <button onClick={() => removeTodo(todo?.id)}>Delete</button>
    </li>
  );
};
export default TodoItem;
