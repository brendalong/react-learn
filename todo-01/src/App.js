import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ToDoForm from './components/ToDoForm.js';
import ToDoList from './components/ToDoList';

window.id = 0;
class App extends Component {
  constructor(props){
    super();
    this.state = {
      data: []
    }
  }

  addToDo(val){
    const todo = {text: val, id: window.id++};
    this.state.data.push(todo);
    this.setState({data: this.state.data});
  }

  handleRemove(id){
    const remainder = this.state.data.filter((todo) => {
      if(todo.id !== id) return todo;
    });
    this.setState({data: remainder});
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <ToDoForm tagline="let it be" addToDo={this.addToDo.bind(this)}><h2>Hello</h2></ToDoForm>
        <ToDoList todos={this.state.data} remove={this.handleRemove.bind(this)}></ToDoList>
      </div>
     
    );
  }
}

export default App;
