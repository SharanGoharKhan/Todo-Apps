import React, { Component } from 'react';
import './App.css';
import TodoInput from './todo-input/todo-input'
import TodoList from './todo-list/todo-list'

class App extends Component {
  state = {
    todos: [],
    todo_input: {
      btn_disabled: true,
      input_text: ''
    }
  }
  onSaveTodo = () => {
    const current_text = this.state.todo_input.input_text
    let prev_todo = [...this.state.todos]
    prev_todo.push(current_text)
    this.setState({
      todos: prev_todo
    })
  }
  onInputChanged = (event) => {
    const current_text = event.target.value
    if (current_text === '') {
      const cur_input = {
        btn_disabled: true,
        input_text: event.target.value
      }
      this.setState({
        todo_input: cur_input
      })
    } else {
      const cur_input = {
        btn_disabled: false,
        input_text: event.target.value
      }
      this.setState({
        todo_input: cur_input
      })
    }
  }
  onDeleteTodo = (key) => {
    let prev_todo = [...this.state.todos]
    prev_todo.splice(key, 1);
    this.setState({
      todos: prev_todo
    })
  }
  render() {
    const todoList = this.state.todos.map((todo, i) => {
      return <TodoList 
      key={i} 
      value={todo} 
      deleteTodo={() => this.onDeleteTodo(i)} />
    })
    return (
      <div className="App">
        <div className="container--todo-header">
          <h1>Todo App ReactJS</h1>
        </div>
        <TodoInput
          disabled={this.state.todo_input.btn_disabled}
          clicked={this.onSaveTodo}
          changed={this.onInputChanged} />
        <hr></hr>
        {todoList}
      </div>
    );
  }
}

export default App;
