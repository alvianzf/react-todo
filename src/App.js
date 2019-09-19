import React, { Component } from 'react';
import Todos from  './components/Todos'
import AddTodo from './components/AddForm'
import axios from 'axios'

const url = "https://be-todo.herokuapp.com/api/todo"

class App extends Component {


  state = {
    todos: []
  }

  componentDidMount() {
    axios.get(url).then(res => {
      const todos = res.data.todos
      this.setState({todos})
      console.log(res.data.todos)
    })
  }


  deleteTodo = (id) => {
    axios.delete(`${url}/${id}`, {_id: id}).then( (res) => {

      const todos = this.state.todos.filter(todo => {
        return todo._id !==  id
      })
  
      this.setState({
        todos
      })

    }).catch(err => console.log(err.message))
  }

  addTodo = (todo) => {
    axios.post(url, todo).then(res => {
      let todos = [...this.state.todos, res.data.todo]
  
      this.setState({
        todos
      })
    }).catch(err => console.log(err.message))
  }

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={ this.state.todos } deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={ this.addTodo }/>
      </div>
    );
  }
}

export default App;
