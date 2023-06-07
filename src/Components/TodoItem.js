import React from 'react';

export function TodoItem({todo, onDelete}) {
  return (
    <div>
      <h5>{todo.title}</h5>
      <p>{todo.desc}</p>
      <button className='btn btn-danger btn-sm' onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  );
}


