import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import View from './components/View';
import {
  Routes,
  Route
} from "react-router-dom";


function App() {

  return (
    <>
    {/* The search bar will be displayed in the DOM in every route */}
      <Search></Search>
      <Routes>
        {/* The view component will be displayed after the search form has been submitted */}
        <Route path="/:category/:id" element={<View />} />
      </Routes>
    </>
  )
}

export default App
