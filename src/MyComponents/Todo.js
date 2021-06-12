import React from 'react'
import TodoItems from './TodoItems'

const Todo = (props) => {
    let todoStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={todoStyle}>
            <h2 className="my-3" >Todos List</h2>
            {   props.todos.length === 0 ? "No todos to display":
            
                props.todos.map((todo) => {
                    return (
                        <TodoItems key={todo.sno} todo={todo} onDelete={props.onDelete} />
                    )
                })
            }
        </div>
    )
}

export default Todo
