import React from "react";
import { connect } from "react-redux";
import { getTodos } from "../Redux/Selectors";
import { completedTodo, removeTodo } from "../Redux/Actions/Actions";
import "../../css/todo.css";

const mapStateToProps = (state) => {
  const todos = getTodos(state);
  return { todos };
};

const TodoList = ({ todos, completedTodo, removeTodo }) => (
  <div>
    {todos.map((todo, index) => {
      return (
        <div className="center todo-container" key={`todo-${todo.id}`}>
          <ul className="todo-list">
            <div className="todo">
              <button
                className="complete-btn"
                onClick={() => completedTodo(todo.id)}
              >
                <i className="fa fa-check"></i>
              </button>
              <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
                {todo.content}
              </li>
              <button
                className="delete-btn"
                onClick={() => removeTodo(todo.id)}
              >
                <i className="fa fa-close"></i>
              </button>
            </div>
          </ul>
        </div>
      );
    })}
  </div>
);

export default connect(mapStateToProps, { completedTodo, removeTodo })(
  TodoList
);
