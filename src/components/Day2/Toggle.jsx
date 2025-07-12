import React from 'react';
import { useState } from 'react';

function Toggle() {
    const [isVisible,setisVisible]=useState(false);
    function handleToggle(){
        setisVisible(!isVisible)
    }
  return (
    <>
    <h3 className='text-center'>Toggle to show/hide</h3>
     <div className='bg-light m-4 w-50 mx-auto d-flex justify-content-center flex-column p-4'>
      <button onClick={handleToggle} className='btn btn-secondary w-25 mx-auto'>
        {!isVisible ? "showmsg":"Hidemsg"}
      </button>
      {isVisible && (
        <p className='text-center p-3'>You Toggled me</p>
      )}
    </div>
    </>
   
  )
}

export default Toggle
