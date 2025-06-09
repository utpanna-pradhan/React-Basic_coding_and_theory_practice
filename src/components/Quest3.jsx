import React from 'react';
import Quest3Child from './Quest3Child';

function Quest3() {
  const msg="Hello and Welcome !!"
  return (
    <div>
      <h1>Q3). Create a parent and child component. Pass a string from parent to child via props.</h1>

      <Quest3Child message={msg} />
    </div>
  )
}

export default Quest3
