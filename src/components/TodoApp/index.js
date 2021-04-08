import React from "react";

import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import "../../css/todo.css";

const Todo = () => {
  return (
    <div>
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Todo;
