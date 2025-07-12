import React from 'react'

function Quest8(props) {
  return (
    <div>
      <p className='text-danger fs-4 text-center'>Create a component that takes props: name, age, email and shows it like a card:</p>
      <div className="usercard border bg-light w-50 d-flex  flex-column justify-content-center align-items-center mx-auto">
        <h3>Name : {props.name}</h3>
        <p>Age : {props.age}</p>
        <p>Email : {props.email}</p>
      </div>
    </div>
  )
}

export default Quest8
