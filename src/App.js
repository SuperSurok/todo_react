import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import {TodoForm, TodoList} from "./components/todo";


class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {id: 1, name: 'Learn JSX', isComplete: true},
                {id: 2, name: 'Build an Awesome App', isComplete: false},
                {id: 3, name: 'Ship It!', isComplete: false}
            ],
            currentTodo: ''
        };
        this.handleInputChange = this.handleInputChange.bind(this)
    };

    handleInputChange(evt) {
        this.setState({
            currentTodo: evt.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
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
                    <TodoForm
                        handleInputChange={this.handleInputChange}
                    />
                    <TodoList todos={this.state.todos}/>
                </div>
            </div>
        );
    }
}

export default App;
