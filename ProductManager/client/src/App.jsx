import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './views/Index'
import Detail from './views/Detail'

import { Routes, Route, Link } from "react-router-dom";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
          <Route path='/' element= {<Index/>}/>
          <Route element={<Detail/>} path="/product/:id"/>
      </Routes>
    </>
  )
}

export default App
