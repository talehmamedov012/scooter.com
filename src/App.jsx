import { useState } from 'react'
import {Routes,Route} from "react-router-dom"
import './App.css'
import Homepage from './Pages/Homepage'
import About from './Pages/About'
import Header from './Components/Header'
import Contact from './Pages/Contact'
function App() {
  

  return (
<>
<Header/>
<Routes>
  <Route path='/' element={<Homepage/>}/>
  <Route  path="/about" element={<About/>}/>
  <Route path='/contact' element={<Contact/>}/>
</Routes>
</>
  )
}

export default App
