import React from 'react'
import Navbar from "./Navbar";
import Drawer from "react-modern-drawer";
import { FiMenu } from "react-icons/fi";
import { Link } from 'react-router-dom';

import styled from 'styled-components';

export default function Overlay() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState);
    };
    const width = window.innerWidth;
  
    console.log("width", width);
    return (
      <>
        
        {
        width < 800 ? (
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
                zIndex: "500"
              }}
            >

              <LinkWrapper>

              <Link 
              to={"/"}
              className="imgBtn"
              >
                <img
                  alt="logo"
                  style={{ height: "65px" }}
                  src="https://res.cloudinary.com/do4mactw0/image/upload/v1652506930/emerald-bot-logo_szzd8y.png"
                />
              </Link>

          
                <a 
                href=""
                target="_blank"
                className='docsBtn'
                >
                Docs
                </a>

                <Link 
                to="/display"
                >
                  Display
                </Link>

                <Link to="/access">
                  Access
                </Link>

                <Link to="/general">
                  General
                </Link>

                <a
                href="https://discord.com/invite/emeraldcity"
                target="_blank"
                className='emeraldCityBtn'
                >
                  Emerald City DAO
                </a>

              </LinkWrapper>
            </Drawer>
          </>
        ) :
        <Navbar />
      }
      </>
    );
  }

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
  

  a{
    color: #11F6D4;
    padding: 10px 20px;
    width: 65%;
    margin: auto;
    border-radius: 20px;
    text-decoration: none;
    text-align: center;
  }

  a:hover{
    color: black;
    background-color: rgba(240, 248, 255, 0.9);
    cursor: pointer;
    transition: ease-in-out .3s;
  }

  .imgBtn:hover{
    background-color: transparent;
    transform: scale(1.1);
  }

  .emeraldCityBtn{
    margin-top: 30px;
    background-color: #38e8c6;
    color: black;
    font-weight: 400;
  }

  .docsBtn{
    margin: 20px auto;
    border: 1px solid #38e8c6;
  }
`