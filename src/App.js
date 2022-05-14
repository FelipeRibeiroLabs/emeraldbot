import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home'
import Home2d from './pages/Home2d'
import FloatCommands from './pages/FloatsCommands';
import EmeraldBotCommands from './pages/EmeraldBotCommands';
import AccessCommands from './pages/AccessComands';

export default function App() {
  return (
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/" element={<Home2d />} />
          <Route path="/commands" element={<EmeraldBotCommands />} />
          <Route path="/floatcommands" element={<FloatCommands />} />
          <Route path="/gatedaccess" element={<AccessCommands />} />
        </Routes>
  )
}