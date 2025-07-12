
import { useState } from 'react';

function TextInput() {
    const [inputValue,setInputValue] = useState('')
    function handleInputChange(e){
        setInputValue(e.target.value)
    }
    function resetinput(){
        setInputValue("")
    }
  return (
    <>
     <div>
      <h3 className='text-center'>Text input tracker</h3>
      <form action="" className='bg-light border text-center mx-auto w-50  p-4'>
        <label htmlFor="">Type Text</label>
        <input type="text" onChange={handleInputChange} value={inputValue}/>
        <button type="button" onClick={resetinput}>reset</button>
         <p id="demo">Typed : {inputValue}</p>
      </form>
     
    </div>
    </>
   
  )
}

export default TextInput
