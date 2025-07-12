import React from 'react';
import { useState } from 'react';

function Todo() {
  return (
    <div>
      <div>
        <h3 className='text-center'>Todo List</h3>
        <label htmlFor=""> Write your todos</label>
        <input type="text" name="" id="" />
        <button>
            Add todos
        </button>
        <button>Remove todos</button>
      </div>
    </div>
  )
}

export default Todo
