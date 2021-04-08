import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../Redux/Actions/Actions";
import "../../css/todo.css";

class AddTodo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }

  updateInputText = (input) => {
    this.setState({ input });
  };

  addTodoHandler = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    return (
      <div className="center asgn3">
        <div className="form">
          <header className="header">
            <h1>
              <u>My Todo List</u>
            </h1>
          </header>
          <div>
            <input
              className="todo-input"
              id="todo"
              type="text"
              placeholder="Title..."
              onChange={(event) => this.updateInputText(event.target.value)}
              value={this.state.input}
            />
            <button className="todo-button" onClick={this.addTodoHandler}>
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, { addTodo })(AddTodo);
