import { useState } from 'react';
import './App.css'

function App() {

  let [counter,setcounter]=useState(15)

  const addvalue=()=>{
    counter=counter+1;
    setcounter(counter);
  }
  const minusvalue=()=>{
    counter=counter-1;
    setcounter(counter)
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
