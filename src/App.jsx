import React from 'react';

import "./App.css"
// import Quest8 from './components/Quest8';
// import Quest9 from './components/Day1/Quest9';
// import Quest1 from './components/Quest1';
// import Quest2 from './components/Quest2';
// import Quest3 from './components/Quest3';
//import Quest4 from './components/Quest4';
// import Quest5 from './components/Quest5';
// import Quest6 from './components/Quest6';
// import Quest7 from './components/Quest7';
//--------------------DAY2-----------------------
import Counter from './components/Day2/Counter';
import Toggle from './components/Day2/Toggle';
import Like from './components/Day2/Like';
import ColorChanger from './components/Day2/ColorChanger';
import TextInput from './components/Day2/TextInput';
//--------------------DAY3-----------------------
import FruitList from './components/Day3/FruitList';
import Todolist from './components/Day3/Todolist';
import Form from './components/Day3/Form';
import Dropdown from './components/Day3/Dropdown';
import CheckBoxList from './components/Day3/CheckBoxList';


function App() {
  return (
    <div className='mb-5'>
      {/* <Quest1 />
       <Quest2 name="Jina"/>
       <Quest3 /> */}
       {/* <Quest4 /> */}
       {/* <Quest5 />
       <Quest6 /> */}
       {/* <Quest7 /> */}
       {/* <Quest8 name={"Utpanna"}  age ={25}  email={"Utpanna828@gamil.com"} /> */}
       {/* <Quest9 status = {"login"}/> */}
       <div className="day2">
        <h2>Day2 :</h2>
        <Counter />
        <Toggle />
        <Like />
        <ColorChanger />
        <TextInput />
       

        <h2>Day3:16th july</h2>
        <FruitList />
        <Todolist />
        <Form />
        <Dropdown />
        <CheckBoxList />
       </div>
       
    </div>
  )
}

export default App
