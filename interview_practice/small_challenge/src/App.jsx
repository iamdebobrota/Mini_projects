import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Gameday from './components/Gameday'
import JsChallenge from './components/JsChallenge'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <Gameday/>
     <JsChallenge/>
    </div>
  )
}

export default App
