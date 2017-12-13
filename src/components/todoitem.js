import React from 'react';
import './todoitem.css';

export class TodoItem extends React.Component{
    constructor(props){
        super(props);        
        this.removeTodo = this.removeTodo.bind(this);
    }
    
    removeTodo(item){
        this.props.removeTodo(item);
    }

    render(){

        return (
            <div className="todoWrapper">
                <button className="removeTodo" onClick={(e)=>this.removeTodo(this.props.id)} >Remove</button>
                {this.props.todo.text}
            </div>
        );
    }
}