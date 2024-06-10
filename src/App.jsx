import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DeckOfCards from './DeckOfCards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Deck of Cards!</h1>
      <DeckOfCards/>
    </>
  )
}

export default App
