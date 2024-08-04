import { useState } from 'react'
import Welcome from './components/Welcome.jsx'
import Number from './components/Number.jsx'
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
     
        <Route path="/home" element={<Welcome />} />
        <Route path="/:number" element={<Number />}/>
        <Route path="/:number/:color/:background" element={<Number />}/>
      </Routes>
    </>
  )
}

export default App
