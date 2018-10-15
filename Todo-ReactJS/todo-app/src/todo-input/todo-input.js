import React from 'react'
import './todo-input.css'

const todoInput = (props) => {

    return (
        <div className="container">
            <input
                type="text"
                placeholder="Enter Todo"
                className="todo--input"
                value={props.value}
                onChange={props.changed} />

            <button
                type="button"
                className="btn save"
                onClick={props.clicked}
                disabled={props.disabled}>
                Save Todo!</button>
        </div>
    )

}



export default todoInput;