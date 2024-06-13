// import { useState } from 'react'
import './App.css'
import Card  from './components/Card'
function App() {
  // const [count, setCount] = useState(0)
  // let myobj={
  //   username:"Aditya",
  //   email:'ad@gamil.com'
    
  // }
  return (
    <>
      <h1 className='bg-green-500 text-black p-4 rounded-xl mb-5' >TailWind CSS</h1>
      <Card
        username="chaiaurcode" btnText="visit me"
      />
      <Card
        username="Aditya" 
      />

    </>
  )
}

export default App
