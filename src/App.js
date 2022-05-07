import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import {Home3d} from './pages/Home3d'
import {Home} from './pages/Home'
import {Choose} from './pages/Choose'

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Choose />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home3d" element={<Home3d />} />
        </Routes>
      </BrowserRouter>
  )
}