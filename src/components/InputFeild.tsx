
import React, { useRef, useEffect } from 'react';
import "../styles.css"

interface props{
    todo: string
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    handelAdd : (e: React.FormEvent) => void
}

const InputFeild:React.FC<props> = ({todo,setTodo ,handelAdd}) => {

  const inputRef = useRef<HTMLInputElement>(null);
    // Auto focus the input field when the component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return ( 
    <form className='input-cntr' onSubmit={handelAdd}> 
       <input 
         ref={inputRef} //  the ref to the input element for auto focus
       type='input' 
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