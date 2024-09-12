import React, { useState } from 'react'
import './App.css';
import InputFeild from './components/InputFeild';

const App: React.FC = () => {

  const[todo,SetTodo] = useState<string>("")
     console.log(todo);
     
  return (
    <div className='App'>
      <span className='heading'>Personal Task Tracker</span>
      <InputFeild  todo={todo} setTodo= {SetTodo} />
    </div>
    
     
  )
}

export default App
