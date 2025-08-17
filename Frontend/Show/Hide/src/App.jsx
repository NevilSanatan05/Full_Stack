import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [show,setShow]= useState(false)

  return (
    <>
    <div>
      <button onClick={()=> setShow(!show)}>{show ? "Hide Message" : "Show Message"}
      </button>
      {show && <h2>Hello , Nevil!</h2>}
    </div>
    </>
  )
}

export default App
