import React, { Component } from 'react';
import Todolists from './Todolist';
import Todoinput from './Todoinput';
import Footer from './Footer';
import logo from './logo.svg';
import './App.css';


class App extends Component {

constructor(props){
  super(props)
  this.state = {
    todoitem: [],
    editId: '0'
  }
  this.addTodo = this.addTodo.bind(this)
  this.deleteTodo = this.deleteTodo.bind(this)
  this.editTodo = this.editTodo.bind(this)
}

addTodo(newtodo) {
  if (newtodo.id === '0') {
    newtodo.id = 'TASK-00' + (this.state.todoitem.length + 1)
    this.setState({
        todoitem: this.state.todoitem.concat([newtodo])
    })
  } else {
    this.setState({
        todoitem: this.state.todoitem.map(item => {
          if (item.id === newtodo.id) {
            item.title = newtodo.title,
            item.date = newtodo.date,
            item.desc = newtodo.desc
          }
          
          return item
        })
    })
    this.setState({
      editId: '0'
    })
  }
}

deleteTodo(todoId) {
  this.setState({
      todoitem: this.state.todoitem.filter(item => item.id !== todoId)
  })
}


editTodo(todoId){
  this.setState({
      editId: todoId
  })
}

  render() {
    return (
      <div className="App">
        
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to My First React Application</h1>
          <h2>- Todo List Application -</h2>
          <hr/>
          <h3>Created By Mr.Lapat Tammakajorn</h3>
        </div>
          <p>To get started, edit <code>src/App.js</code> and save to reload.</p>
          
          <Todoinput onAddTodo={this.addTodo}
                      editTodo={this.state.editId === '0' ? undefined : this.state.todoitem.find(item => item.id === this.state.editId)}/>
          <Todolists items={this.state.todoitem} onDeleteTodo={this.deleteTodo} onEdit={this.editTodo}/>
  
        <Footer/>

      </div>
    );
  }
}

export default App;
