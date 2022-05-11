import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import FloatCommands from './pages/FloatCommands';
import LandingPage from './LandingPage';
import EmeraldBotCommands from './pages/EmeraldBotCommands';
import AccessCommands from './pages/AccessCommands';

export default function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/commands" element={<EmeraldBotCommands />} />
          <Route path="/floatcommands" element={<FloatCommands />} />
          <Route path="/gatedaccess" element={<AccessCommands />} />
        </Routes>
      </BrowserRouter>
  )
}