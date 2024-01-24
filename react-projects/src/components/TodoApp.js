import React, { useState, useEffect } from "react";
import TodoForm from "./todo/TodoForm";
import TodoList from "./todo/TodoList";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storedTodosString = localStorage.getItem("todos");
    const storedTodos = storedTodosString ? JSON.parse(storedTodosString) : [];
    setTodos(storedTodos);
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const addTodo = (newTodo) => {
    setTodos([...todos, { ...newTodo }]);
  };
  const toggleTodo = (id) => {
    setTodos((prevTodos) => {
      prevTodos.map((todo) => {
        return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
      });
    });
  };
  const removeTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <h1>Todo's App</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} removeTodo={removeTodo} />
    </>
  );
};
export default TodoApp;
