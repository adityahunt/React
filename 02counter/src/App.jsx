import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setcounter]=useState(5)

  const addvalue=()=>{
    if(counter<20){
      counter=counter+1;
      setcounter(counter);
    }
  }
  const minusvalue=()=>{
    if(counter>0){
      counter=counter-1;
      setcounter(counter)
    }
  }
  return (
    <>
      <h1>Hello world!</h1>
      <h2>Counter Value:{counter}</h2>
      <button
       onClick={addvalue}
      > Increase Value</button>
      <br />
      <button
        onClick={minusvalue}
      > Decrese Value</button>
    </>
  )
}

export default App
