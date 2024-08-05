import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import View from './components/View';
import {
  Routes,
  Route
} from "react-router-dom";


function App() {
  const [category, setCategory] = useState("")
  const [id, setID] = useState(0)

  const setURL = (cat, idx) => {
    setCategory(cat);
    setID(idx);
  }
  return (
    <>
      {/* The search bar will be displayed in the DOM in every route */}
      <Search settingURL= {setURL}></Search>
      <Routes>
        {/* The view component will be displayed after the search form has been submitted */}
        <Route path="/:category/:id" element={<View  dataCat={category} dataID={id}/>} />
      </Routes>
    </>
  )
}

export default App
