import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>AutoStock</h1>
      <p>Un site web sur lequel vous trouverez les véhicules mis en vente par l'entreprise AutoStock.</p>
    </>
  )
}

export default App
