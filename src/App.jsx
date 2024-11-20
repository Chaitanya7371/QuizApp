import React from 'react'
import Welcomepage from './modules/Welcomepage'
import Homepage from './modules/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Quizpage from './modules/Quizpage'

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Welcomepage/>}/>
    <Route path='/home' element={<Homepage/>}/>
    <Route path='/Quiz' element={<Quizpage/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App