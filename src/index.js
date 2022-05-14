import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Navbar from "./components/Navbar";
import "./styles.css";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { FiMenu } from "react-icons/fi";

function Overlay() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const width = window.innerWidth;

  console.log("width", width);
  return (
    <>
      
      {
      width < 500 ? (
        <>
          <header
            style={{
              position: "absolute",
              width: "100vw",
              textAlign: "right",
              paddingRight: "1rem",
              paddingTop: "1rem",
            }}
          >
            <FiMenu onClick={toggleDrawer} color="#11F6D4" size={33} />
          </header>
          
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="right"
            className="bla bla bla"
            style={{
              backgroundColor: "black",
              display: "flex",
              flexDirection: "column",
              justifyContent: "start",
              alignItems: "center",
              width: "65%",
              paddingTop: "2rem",
            }}
          >
            <div>
              <a
                style={{ color: "#11F6D4", width: "100%", textAlign: "left" }}
                href="http://localhost:3000/commands"
              >
                MAIN COMMANDS
              </a>
            </div>
            <div>
              <a
                style={{ color: "#11F6D4", width: "100%", textAlign: "left" }}
                href="http://localhost:3000/floatcommands"
              >
                FLOAT COMMANDS
              </a>
            </div>
            <div>
              <a
                style={{ color: "#11F6D4", width: "100%", textAlign: "left" }}
                href="http://localhost:3000/gatedaccess"
              >
                ACCESS COMMANDS
              </a>
            </div>
            <div>
              <a
                style={{ color: "#11F6D4", width: "100%", textAlign: "left" }}
                href="http://localhost:3000/"
              >
                DOCS
              </a>
            </div>
          </Drawer>
        </>
      ) :
      <Navbar />
    }
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
      <Overlay />
    </BrowserRouter>
  </React.StrictMode>
);
