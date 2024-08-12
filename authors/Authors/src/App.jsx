
import './App.css'
import Index from './views/Index'
import Update from './views/Update'
import Create from './views/Create'

import { Routes, Route, Link } from "react-router-dom";


function App() {
  
  return (
    <>
      <Routes>
          <Route path='/authors' element= {<Index/>}/>
          <Route element={<Update/>} path="/author/:id/edit"/>
          <Route element = {<Create/>} path = "/authors/new"/>
      </Routes>
    </>
  )
}

export default App
