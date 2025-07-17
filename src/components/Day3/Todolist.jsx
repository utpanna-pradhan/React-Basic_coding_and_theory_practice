import React from 'react';
import { useState } from 'react';

function Todolist() {
    const [todo,settodo] = useState([]);
    const [inputValue , setInputValue] = useState("")
    const addTodo = () =>{
        if(inputValue.trim() !== ""){
            settodo([...todo,inputValue.trim()]);
            setInputValue("")
        }
    }
    const deleteTodo = (indexToDelete) => {
    settodo(todo.filter((_, index) => index !== indexToDelete));
  };
  return (
    <div className='bg-secondary text-white d-flex justify-content-center mx-auto align-items-center p-4 m-4 w-75 rounded gap-3'>
      <input type="text"  className='p-2 rounded' placeholder='Add a todo..' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
      <button className='btn btn-primary' onClick={addTodo}>Add Todo..</button>
      <ul>
       {
        todo.map((mytodo,index)=>(
            <li key={index}>{mytodo}
            <button onClick={() => deleteTodo(index)}>Delete</button></li>
            
        ))
       } 
      </ul>
    </div>
  )
}

export default Todolist
