import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Home2d from './pages/Home2d'
import DisplayCommands from './pages/DisplayCommands';
import GeneralCommands from './pages/GeneralCommands';
import AccessCommands from './pages/AccessCommands';

export default function App() {
  return (
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home2d />} />
          <Route path="/display" element={<DisplayCommands />} />
          <Route path="/access" element={<AccessCommands />} />
          <Route path="/general" element={<GeneralCommands />} />
        </Routes>
  )
}