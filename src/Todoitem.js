import React, { Component } from "react";
import Todoinput from './Todoinput';
import './App.css';

//Todo item 
class Todoitem extends Component{

    constructor(props){
        super(props)
        this.state = {
            done: false
        }
       this.submittoggle = this.submittoggle.bind(this)
       this.onDelete = this.onDelete.bind(this)
       this.onEdit = this.onEdit.bind(this)
    }

    submittoggle () {
        this.setState({ done: !this.state.done })
    }
    onDelete () {
        this.props.onDeleteTodo(this.props.todo.id)
    }

    onEdit (){
        this.props.onEdit(this.props.todo.id)
    }
    render() {
        return(
            <div className="item">
                <h3> Task No. {this.props.todo.id} </h3>
               <hr/>

                <p>{this.state.done ? " Complete( ✔ )"+"Title :" + this.props.todo.title : "Title :"+this.props.todo.title}</p>
                <p> Date  :{this.props.todo.date.format('MMMM Do YYYY') }</p>
                <p> Task Description : {this.props.todo.desc}<br/></p>
                <br/>
                <section className="btn_bar">
                    <button 
                        value={this.state.done}
                        onClick={this.submittoggle} 
                        className="btn complete"
                    >Check</button>

                    <button 
                        className="btn edit"
                        onClick={this.onEdit}
                    >Edit</button>


                    <button 
                        className="btn delete" 
                        onClick={this.onDelete} 
                    >Delete</button>
                
                </section>    
            </div>
        )
    }
}

export default Todoitem