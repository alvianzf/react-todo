import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        content: ''
    }

    handleChange = (e) => {
        this.setState({
            description: e.target.value
        })

        console.log(e.target.value)
    }

    handleSubmit = (e) => {
        e.preventDefault()

        // this.props.addTodo(this.state)

        // this.setState({
        //     description: ''
        // })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo</label>
                    <input type="text" name="todo" placeholder="title" />
                    <input placeholder="description" type="text" name="description" onChange={this.handleChange} value={this.state.description}/>
                </form>
            </div>
        )
    }
}

export default AddTodo