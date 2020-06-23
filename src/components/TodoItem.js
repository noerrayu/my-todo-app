import React, { Component } from "react";

class TodoItem extends React.Component {
  render() {
    const completedStyle = {
      fontStyle: "italic",
      color: "#a81d57",
      opacity: 0.4,
      textDecoration: "line-through",
    };

    const { completed, id, title } = this.props.todo;

    return (
      <div>
        <li className="todo-item">
          <input
            type="checkbox"
            checked={this.props.todo.completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)}>Delete</button>
          <span style={completed ? completedStyle : null}>{title}</span>
        </li>
      </div>
    );
  }
}

// function TodoItem(props) {
//   return <li>{props.todo.title}</li>;
// }

export default TodoItem;
