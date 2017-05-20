import React, { Component } from "react";
import { DateField } from 'react-date-picker';
import DatePicker from 'react-datepicker';
import uuid from 'uuid'
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import 'react-date-picker/index.css';
import './App.css';
//Todo item 

class Todoinput extends Component{

    constructor(props){
        super(props)
        this.state = {
            id: '0',
            title: '',
            date: '',
            desc: ''
        }
        this.addClicked = this.addClicked.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentWillReceiveProps (nextProps, nextState){
        console.log(nextProps)
        if (nextProps.editTodo) {
            this.setState({
                id: nextProps.editTodo.id,
                title: nextProps.editTodo.title,
                date: moment(nextProps.editTodo.date),
                desc: nextProps.editTodo.desc
            })
        }
    }

    addClicked() {
        let {onAddTodo} = this.props
        let todo = {
            id: this.state.id,
            title: this.state.title,
            date: this.state.date,
            desc: this.state.desc
        }
        onAddTodo(todo)
         this.setState({
             id: '0',
             title: '',
            date: '',
            desc: ''
         })
    }

    handleChange(date) {
        this.setState({
            date: date
        })
    }

    render(){
        return(
            <div className="crtask">
                <h2>Task Create</h2>
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

export default Todoinput