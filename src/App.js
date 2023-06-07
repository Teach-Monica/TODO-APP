import { useState, useEffect} from 'react';
import './App.css';
import {Footer} from './Components/Footer';
import {Header} from './Components/Header';
import {Todos} from './Components/Todos';
import {AddTodo} from './Components/AddTodo';

function App() {
  let initTodo;
  if(localStorage.getItem("todos") === null){
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo)=>{
    console.log('delete', todo);
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) =>{
    console.log('add todo', title, desc);
    let id;
    if(todos.length===0){
      id = 0;
    }
    else{
      id = todos[todos.length-1].id+1;
    }

    const myTodo = {
      id: id,
      title: title,
      desc:desc
    }
    setTodos([...todos, myTodo])
    console.log(myTodo)
    
  }

const [todos, setTodos] = useState(initTodo)

useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos));
}, [todos])

  return (
    <div>
    <Header title="My ToDo List" searchBar={false}/>
    <AddTodo addTodo={addTodo}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer />
      
    </div>
  );
}

export default App;
