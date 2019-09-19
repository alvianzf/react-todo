import React, { Component } from 'react'

class AddTodo extends Component {

    state = {
        todo:'',
        description: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        this.props.addTodo(this.state)

        this.setState({
            todo: '',
            description: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo</label>
                    <input type="text" name="todo" placeholder="title" onChange={this.handleChange.bind(this.state.todo)} value={this.state.todo}/>
                    <input placeholder="description" type="text" name="description" onChange={this.handleChange.bind(this.state.description)} value={this.state.description}/>
                    <button type="submit" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}

export default AddTodo