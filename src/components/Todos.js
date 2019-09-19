import React from 'react'

const Todos = ({todos, deleteTodo}) => {

    const todoList = todos.length ? (
        todos.map(todo => {
            return (
                <div className="collection-item" key={todo._id}>
                    <span onClick={() => {deleteTodo(todo._id)}}>{todo.description}</span>
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