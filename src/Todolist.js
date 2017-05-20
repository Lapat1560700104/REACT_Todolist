import React, { Component } from "react";
import Todoitem from "./Todoitem";
import './App.css';

//Todo item 
class Todolists extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
                <div className="listtask">
                    <h2>Task List</h2>
                    <hr/>
                        <ul>
                            {
                                this.props.items.map( (todo) => 
                                    <li key={todo.id}>
                                        <Todoitem todo={todo} onDeleteTodo={this.props.onDeleteTodo} onEdit={this.props.onEdit}/>
                                    </li>
                                    )
                            }
                        </ul>
                </div>  
        )        
    }
}

export default Todolists