import React from 'react'
import "../styles.css"

interface props{
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputFeild:React.FC<props> = ({todo,setTodo}) => {
  return ( 
    <form className='input-cntr'> 
       <input type='input' 
        value={todo}
        onChange={
            (e)=>setTodo(e.target.value)
        }
       className='input-box'  
       placeholder='Enter your task' ></input> 
       <button className='btn' type="submit">Add</button>
    </form>
  )
}

export default InputFeild;