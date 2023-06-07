import React from 'react';
import {TodoItem} from './TodoItem';

export function Todos(props) {
  const myStyle = {
    minHeight:"70vh",
    margine:"40px auto"
  }
  return (
    <div className='container' style={myStyle}>
    <h4 className='my-3'>Todos List</h4>
    {props.todos.length === 0 ? "No Todos Available" :
    props.todos.map((todo)=>{
    return (
      <>
    <TodoItem todo={todo} key={todo.id} onDelete={props.onDelete}/>
    <hr/>
    </>
    )
    })
    }
    </div>
  );
}


