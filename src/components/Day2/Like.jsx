import React from 'react';
import { useState } from 'react';

function Like() {
    const [isLike,setIsLike] = useState(true);
   
    function handleClick(){
        setIsLike(!isLike);
        
    }
    
  return (
    <div className='bg-light m-4 w-50 mx-auto d-flex justify-content-center flex-column p-4'>
        <h3 className='text-center'>Toggle between like and unlike </h3>
      <button onClick={handleClick} className='btn btn-danger w-25 mx-auto' >
        {isLike ? "Like 👍" : "Unlike 👎"}
      </button>
    </div>
  )
}

export default Like
