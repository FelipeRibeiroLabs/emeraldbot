import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import FloatCommands from './pages/FloatsCommands';
import EmeraldBotCommands from './pages/EmeraldBotCommands';
import AccessCommands from './pages/AccessComands';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/commands" element={<EmeraldBotCommands />} />
          <Route path="/floatcommands" element={<FloatCommands />} />
          <Route path="/gatedaccess" element={<AccessCommands />} />
        </Routes>
      </BrowserRouter>
  )
}