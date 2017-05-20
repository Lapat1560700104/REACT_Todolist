import React, { Component } from "react";
import Todoitem from "./Todoitem";
import './App.css';

//Todo item 
class Todopopup extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
                <div className="todopopup">
                <h2>Task Editer</h2>
                <hr/>
                    <p>What do you need to do? : <input type="text" value={this.state.title} onChange={(e)=>this.setState({title: e.target.value})} /></p>
                    <br/>
                    <p>What date to record you task? : 
                        <DatePicker
                            selected={this.state.date}
                            onChange={this.handleChange}
                        />
                    </p>
                    <br/>
                    <p>Task Description :<textarea type="text" value={this.state.desc} onChange={(e)=>this.setState({desc: e.target.value})}/></p>
                    <button onClick={this.addClicked} className="btn_sum" >SUBMIT</button>
                </div>  
        )        
    }
}

export default Todolists