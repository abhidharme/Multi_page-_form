import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes , Route} from "react-router-dom"
import {Users} from "./Pages/UserData"
import { Home } from './Pages/Home'
import { FormTow } from './Pages/Form2'
import {FormOne} from "./Pages/Form1"
function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path="/form1" element={<FormOne /> } />
      <Route path="/form2" element={<FormTow />} />
      <Route path='/user' element={<Users />} />
    </Routes>
  )
}


export default App
