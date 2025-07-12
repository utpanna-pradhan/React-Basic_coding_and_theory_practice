import React from 'react';
import Quest4Child from './Quest4Child';

function Quest4() {
    const StringArr=["Jina","nini","Sarabjeet","Roma"]

  return (
    <div>
      <h1>Q4). Display a list of strings using map() in a component.</h1>
        <Quest4Child strings={StringArr} />
    </div>
  )
}

export default Quest4
