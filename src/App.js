import React, { Component } from 'react';
import './App.css';

import {Header} from './components/header';
import {TodoInput} from './components/todoinput';
import {TodoItem} from './components/todoitem';

class App extends Component {
  
  constructor(props){
    super(props);

    // default state of application
    this.state = {
      todos:[
        {text:"my first item",id:0},
        {text:"my second item",id:1},
        {text:"my third item",id:2},
        {text:"my fourth item",id:3},
        {text:"my fifth item",id:4},
      ],
      next:5
    }

    // events to add/remove item
    this.addTodo = this.addTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todoText){
    let todo = this.state.todos.slice();
    todo.push({id:this.state.next,text:todoText});
    this.setState({
      todos: todo,
      next: this.state.next +1
    });

    console.log("Todo added",todoText);
  }

  removeTodo(item){
    console.log("item removed",item);
    this.setState({
      todos: this.state.todos.filter((todo,index) => todo.id !== item) 
    });    
  }
  render() {
    return (
      <div className="App">
        <div className="todo-wrapper">
          <Header />
          <TodoInput todoText="" addTodo={this.addTodo} />
          <ul>{
            this.state.todos.map((todo)=>{
              return <TodoItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
            })
          }</ul>
        </div>
      </div>
    );
  }
}

export default App;
