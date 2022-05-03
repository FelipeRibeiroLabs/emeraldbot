import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Navbar from './components/Navbar';
import Home from './Home';
import './styles.css'

function Overlay() {
  return <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
        <Navbar/>

  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <>
    {/* <Home /> */}
    <App />
    {/* <Overlay /> */}
    </>
  </React.StrictMode>
);