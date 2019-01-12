import React, { Component } from "react";
import PropTypes from "prop-types";
import logo from "./logo.svg";
import "./App.css";

import { TodoForm, TodoList, Footer } from "./components/todo";
import {
  addTodo,
  generateId,
  findById,
  toggleTodo,
  updateTodo,
  removeTodo,
  filterTodos
} from "./lib/todoHelpers";

import { pipe, partial } from "./lib/util";
import { loadTodos, createTodo, saveTodo } from "./lib/todoService";

class App extends Component {
  state = {
    todos: [],
    currentTodo: ""
  };

  static contextTypes = {
    route: PropTypes.string
  };

  componentDidMount() {
    loadTodos().then(todos => this.setState({ todos }));
  }

  handleRemove = (id, evt) => {
    evt.preventDefault();
    const updatedTodos = removeTodo(this.state.todos, id);
    this.setState({ todos: updatedTodos });
  };

  handleToggle = id => {
    const getToggleTodo = pipe(findById, toggleTodo);
    const updated = getToggleTodo(id, this.state.todos);
    const getUpdateTodos = partial(updateTodo, this.state.todos);
    const updatedTodos = getUpdateTodos(updated);
    this.setState({ todos: updatedTodos });
    saveTodo(updated)
      .then(() => this.showTempMessgae("Todo Updated"))
  };

  handleSubmit = evt => {
    evt.preventDefault();
    const newId = generateId();
    const newTodo = {
      id: newId,
      name: this.state.currentTodo,
      isComplete: false
    };
    const updatedTodos = addTodo(this.state.todos, newTodo);
    this.setState({
      todos: updatedTodos,
      currentTodo: "",
      errorMessage: ""
    });

    createTodo(newTodo).then(() => this.showTempMessgae("Todo added"));
  };

  showTempMessgae = msg => {
    this.setState({ message: msg });
    setTimeout(() => this.setState({ message: "" }), 2500);
  };

  handleEmptySubmit = evt => {
    evt.preventDefault();
    this.setState({
      errorMessage: "Please supply a todo name"
    });
  };

  handleInputChange = evt => {
    this.setState({
      currentTodo: evt.target.value
    });
  };

  render() {
    const submitHandler = this.state.currentTodo
      ? this.handleSubmit
      : this.handleEmptySubmit;

    const displayTodos = filterTodos(this.state.todos, this.context.route);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Todos
          </a>
        </header>
        <div className="Todo-App">
          {this.state.errorMessage && (
            <span className="error">{this.state.errorMessage}</span>
          )}
          {this.state.message && (
            <span className="success">{this.state.message}</span>
          )}
          <TodoForm
            handleInputChange={this.handleInputChange}
            handleSubmit={submitHandler}
          />
          <TodoList
            handleToggle={this.handleToggle}
            todos={displayTodos}
            handleRemove={this.handleRemove}
          />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
