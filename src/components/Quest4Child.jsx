import React from 'react'

function Quest4Child({strings}) {
  return (
    <div>
      <ul>
        {strings.map((str,index)=>(
            <li key={index}>{str}</li>
        ))}
      </ul>
    </div>
  )
}

export default Quest4Child
