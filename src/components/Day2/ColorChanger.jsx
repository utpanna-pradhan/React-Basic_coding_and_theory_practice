
import React, { useState } from 'react'
 
function ColorChanger() {
    const [bgchange,setBgchange] =useState("gray");
    function handleBgchange(){
        setBgchange("blue")
    }
  return (
    <>
    <h3 className='text-center'>background color changer</h3>
      <div className='w-75 mx-auto d-flex justify-content-center flex-column align-items-center m-3' style={{backgroundColor:bgchange,color:"white"}}>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit accusamus neque vel fugiat quisquam iure enim quidem. Mollitia, commodi facere delectus laborum cupiditate, error odio enim velit modi esse dolorem.</p>
      <button className='btn btn-secondary mb-3' onClick={handleBgchange}>Changebg</button>
    </div>
    </>
  
  )
}

export default ColorChanger
