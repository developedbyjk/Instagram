import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Home from './Home'
import Search from './Search'
import Add from './Add'
import Reel from './Reel'
import Profile from './Profile'



function App() {


  return (
    <>
    <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="*" element={<h1>Not Found</h1>}/>
          <Route path="/add" element={<Add/>} />
          <Route path="/reel" element={<Reel/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>    
    </Router>

    </>
  )
}

export default App
