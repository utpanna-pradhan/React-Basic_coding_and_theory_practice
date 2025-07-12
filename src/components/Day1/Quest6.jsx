import React from 'react';
import { useState } from 'react';

function Quest6() {
    const [isVisible,setIsVisible] =useState(true);
    const handletoggle=()=>{
       setIsVisible(!isVisible)
    }
  return (
    <div>
      <h1>Q). Write a component that toggles a paragraph's visibility with a button.</h1>
      <button onClick={handletoggle}>
        {isVisible? 'show paragraph' : 'hide paragraph'}
      </button>
      {!isVisible && <p>This paragraph is toggled</p>}
    </div>
  )
}

export default Quest6
