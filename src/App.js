import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            todos: [
                {id: 1, name: 'Learn JSX', isComplete: true},
                {id: 2, name: 'Build an Awesome App', isComplete: false},
                {id: 3, name: 'Ship It!', isComplete: false}
            ]
        }
    };

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
                        Learn React
                    </a>
                </header>
                <div className="Todo-App">
                    <form>
                        <input type="text"/>
                    </form>
                    <div className="Todo-List">
                        <ul>
                            {this.state.todos.map(todo => <li key={todo.id}>
                                <input type="checkbox" defaultChecked={todo.isComplete}/>{todo.name}
                            </li>)}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
