import { useState } from 'react'
import './App.css'
import { Routes, Route, } from "react-router-dom"
import { Link } from 'react-router-dom'
import Allplayers from './components/AllPlayers'
import Navbar from './components/NavBar';
import SinglePlayer from './components/SinglePlayer';


function App() {

  return (
    <>
      <div>
        <Routes>
           <Route path='/' element={<Allplayers/>} />
           <Route path='/players/:id' element={<SinglePlayer />} />
           <Route path='/allplayers' element={<Allplayers />} />
           
        </Routes>
      </div>
      <div>
        <Link to="/"></Link>
        <Navbar />
      </div>
    </>
  )
}

export default App
