import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0)
  const addValue = () =>{
   // console.log(counter)
   if(counter<20)
    setCounter(counter+1)  
  }
    const removeValue = () =>{
      if (counter>0) {
     setCounter(counter-1)}
    }
  return (
  <>
  <h1>Chai aur code</h1>
  <h2>Counter Value: {counter} </h2>
  <button onClick={addValue}>Add value </button>
  <br /> <br />
  <button onClick={removeValue}>Remove value </button>
  {/* <p>Footer : {counter}</p> */}
  </>
  )
}

export default App
