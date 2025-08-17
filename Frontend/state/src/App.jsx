import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [isLoggedIn,setIsLoggedIn] = useState(false);


  function handleClick(){
    setCount(count+1)
  }

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Increase</button>
      <h1>{isLoggedIn ? "Welcome , Nevil!" : "Please log in"}</h1>
      <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>{isLoggedIn ? "Logout" : "Login"}</button>
    </>
  )
}

export default App
