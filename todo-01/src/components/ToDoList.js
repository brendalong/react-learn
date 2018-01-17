import React from 'react';

const ToDoList = ({todos, remove}) => {
    
    const todoNode = todos.map((todo) => {
        return(<Todo todo={todo} key={todo.id} remove={remove} />)
    });
    return(
        <ul>{todoNode}</ul>
        
    );
}

const Todo = ({todo, remove}) => {
    // Each Todo
    return (<li onClick={() => {remove(todo.id)}}>{todo.text}</li>)
  }

export default ToDoList;