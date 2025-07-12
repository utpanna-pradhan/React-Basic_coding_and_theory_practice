import React from 'react';
import { useState } from 'react';

export default function Counter() {
    const[count,setCount] = useState(0);
    function handleIncrement(){
        setCount(count+1);
    }
    function handleDecrement(){
        setCount(count-1);
    }
    function reset(){
        setCount(0)
    }
  return (
    <>
    <h3 className='text-center'>Counter App</h3>
     <div className='d-flex justify-content-center bg-light w-50 border rounded mx-auto p-4'>
      <button onClick={handleDecrement} className='btn btn-primary'>-</button>
      <div className='ps-4 pe-4'>Counter {count}</div>
      <button onClick={handleIncrement} className='btn btn-primary'>+</button>
     
      
     
    </div>
    <div className='d-flex justify-content-center bg-light w-50 border rounded mx-auto p-4'>
        <button onClick={reset} className='btn btn-warning  ' >reset</button>
    </div>
    </>
   
  )
}
 