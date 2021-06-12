import React from 'react'

const TodoItems = ({todo, onDelete}) => {
    return (
        <>
        <div>
            <h4 className="my-2">{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-danger btn-sm" onClick={() => {onDelete(todo)}} >Delete</button>
        </div>
        <hr />
        </>
    )
}

export default TodoItems
