import React, { useState } from 'react'
import './App.css';
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList';
import { Todo } from './model'

const App: React.FC = () => {

  const[todo,SetTodo] = useState<string>("")
  const[Todos,setTodos] = useState<Todo[]>([])

     //  Fuction to add task in array
     const handelAdd = (e : React.FormEvent) => {
        e.preventDefault ();

        if(todo){
          setTodos([...Todos,{id:Date.now(), todo, isDone:false}])
          SetTodo ("");
        }
     }
     console.log(Todos);
     
  return (

    <div className='App'>
      <span className='heading'>Personal Task Tracker</span>
      <InputFeild  todo={todo} setTodo= {SetTodo} handelAdd = {handelAdd} />
      <TodoList Todos={Todos} setTodos={setTodos} />

      
    </div>
    
     
  )
}

export default App


/* to check the values are stored in array */
       /* {Todos.map((t) =>(
        <li> {t.todo} </li>
       ))} */