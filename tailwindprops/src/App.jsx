import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <h1>Tailwind CSS</h1>
        <Card info="good"  btn="learn" />
        <Card info="make good"  btn="learning" />
        
                       
        
    </>
  )
}

export default App
