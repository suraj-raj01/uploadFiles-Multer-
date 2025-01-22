import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from './Components/Layout'
import Home from './pages/Home'
import Insert from './pages/Insert'
import Display from './pages/Display'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path='home' element={<Home/>}/>
            <Route path='insert' element={<Insert/>}/>
            <Route path='display' element={<Display/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App