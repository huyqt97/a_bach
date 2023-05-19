import React, { Component } from "react";

export default class Todolist extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: "",
      editingIndex: -1,
      editingText: "",
    };
  }
  handleChange = (e) => {
    this.setState({ newTodo: e.target.value });
    console.log(this.state.newTodo);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { text: this.state.newTodo, complete: false };
    this.setState({ todos: [...this.state.todos, newTodo], newTodo: "" });
    console.log(this.state.todos);
  };
  handleDelete = (index) => {
    const todos = [...this.state.todos];
    todos.splice(index, 1);
    this.setState({ todos });
  };
  handleComlete = (index) => {
    const todos = [...this.state.todos];
    todos[index].complete = !todos[index].complete;
    this.setState({ todos });
  };

  //edit
  handleEdit = (index) => {
    this.setState({
      editingIndex: index,
      editingText: this.state.todos[index].text,
    });
  };

  handleUpdate = (e) => {
    e.preventDefault();
    const todos = [...this.state.todos];
    todos[this.state.editingIndex].text = this.state.editingText;
    this.setState({ todos, editingText: -1, editingText: "" });
  };
  handleCamcel = () => {
    this.setState({ editingIndex: -1, editingText: "" });
  };
  render() {
    return (
      <div>
        <h1>Todolisst</h1>
        {this.state.editingIndex > -1 ? (
          <form onSubmit={this.handleUpdate}>
            <input
              type="text"
              onChange={(e) => this.setState({ editingText: e.target.value })}
              value={this.state.editingText}
              placeholder="Update Todo ..."
            />
            <br />
            <button type="submit">Update</button>
            <button onClick={this.handleCamcel}>Cancel</button>
          </form>
        ) : (
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.newTodo}
              placeholder="New Todo ..."
            />
            <br />
            <button type="submit">add</button>
          </form>
        )}
        <ul>
          {this.state.todos.map((element, index) => (
            <li key={index}>
              <input
                type="checkbox"
                checked={element.complete}
                onChange={() => this.handleComlete(index)}
              />
              <span
                style={{
                  textDecoration: element.complete ? "line-through" : "none",
                }}
              >
                {element.text}
              </span>
              <button onClick={() => this.handleDelete(index)}>Delete</button>
              <button onClick={() => this.handleEdit(index)}>Edit</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
