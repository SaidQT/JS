import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Index from './views/Index'
import Detail from './views/Detail'
import Update from './views/Update'

import { Routes, Route, Link } from "react-router-dom";


function App() {
  
  return (
    <>
      <Routes>
          <Route path='/' element= {<Index/>}/>
          <Route element={<Detail/>} path="/product/:id"/>
          <Route element={<Update/>} path="/product/:id/edit"/>
      </Routes>
    </>
  )
}

export default App
