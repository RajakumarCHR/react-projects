import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const TodoForm = ({ addTodo }) => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim !== "") {
      addTodo({ id: uuidv4(), task, completed: false });
    }
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add New task"
      />
      <button>Add</button>
    </form>
  );
};

export default TodoForm;
