import React from 'react';

const ToDoForm = ({addToDo}) => {
    console.log("ToDoForm component");
    let input;

    return(
        <div>
            <h2>ToDo Form</h2>
            <input ref={node => {
                input = node;
            }} />
        <button onClick={() => {
            addToDo(input.value);
            input.value = '';
        }}>+</button>
        </div>
    );
}

export default ToDoForm;