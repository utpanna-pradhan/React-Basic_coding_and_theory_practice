import React from 'react';


function FruitList() {
    const fruits = ["apple","banana","orange"];

  return (
    <div className='d-flex justify-content-center mx-auto bg-light p-4'>
     <ul>
        {fruits.map((fruit,index)=> (
            <li key={index}>{fruit}</li>
        ))}
     </ul>
    </div>
  )
}

export default FruitList
