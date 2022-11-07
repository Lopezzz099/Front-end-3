import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Ejemplo from './components/Ejemplo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Ejemplo/>
  )
}

export default App
