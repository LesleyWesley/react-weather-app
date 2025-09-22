import { useState } from 'react'
import Header from "./components/Header"
import MainSection from "./components/MainSection"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <MainSection />
    </>
  )
}

export default App
