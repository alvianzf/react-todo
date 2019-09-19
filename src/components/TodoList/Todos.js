import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo._id}>
                    <h6 className="red-text">{todo.todo}</h6>
                    <span>{todo.description}</span> <button className="red btn-small right" onClick={() => {deleteTodo(todo._id)}}><i className="material-icons">delete</i></button>
                </div>
            )
        })
    ) : (
        <p className="center">You have no Todos left!</p>
    )

    return (
        <div className="todos collection">
            {todoList}
        </div>
    )
}

export default Todos