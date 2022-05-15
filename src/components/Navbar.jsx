import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

import styled from 'styled-components'

const data = [
  { id: 0, label: "DISPLAY", url: "/display" },
  { id: 1, label: "ACCESS", url: "/access" },
  { id: 2, label: "GENERAL", url: "/general" },
];

export default function Navbar({ vpWidth }) {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    setOpen(false)
  };

  return (
    <NavWrapper>
      <nav>
        <div>
          <Link to={"/"}>
              <img
                alt="logo"
                style={{ height: "20%" }}
                src="https://res.cloudinary.com/do4mactw0/image/upload/v1652506930/emerald-bot-logo_szzd8y.png"
              />
          </Link>
        </div>

        <main style={{ display: "flex" }}>
          <li>
            <div className="dropdown">
              <div className="dropdown-header" onClick={toggleDropdown}>
                COMMANDS
                <FiChevronDown onClick={toggleDropdown} />
              </div>

              <div className={`dropdown-body ${isOpen && "open"}`}>
                {items.map((item) => (
                  <Link
                    key={item.id}
                    to={item.url}
                    className="dropdown-item"
                    onClick={(e) => handleItemClick(e.target.id)}
                    id={item.id}
                  >
                    <span
                      className={`dropdown-item-dot ${item.id == selectedItem &&
                        "selected"}`}
                    >
                      •
                    </span>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </li>
          <li>
            <a className="nav-link">DOCS</a>
          </li>
          <li>
            <a
              className="nav-link"
              href="https://discord.com/invite/emeraldcity"
              target="_blank"
            >
              EMERALD CITY
            </a>
          </li>
        </main>
      </nav>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`

  nav{
    position: absolute;
    top: 20px;
    right: 20px;
    display: flex;
    width: 100vw;
    flex-direction: inherit;
    justify-content: space-between;
    padding: 0.8rem 8.2rem;
    list-style-type: none;
    gap: 20px;
    background: transparent;
  }

  .dropdown{
    font-size: 18px;
    font-family: var(--font-accent) ;
    width: 7rem;
    background-color: transparent;
    color: #00F5D0;
  }
  .dropdown-header{
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .dropdown-body{
    position: absolute;
    padding: 5px;
    border-top: 1px solid #00F5D0;
    display: none;
    background-color: #171717;
    border-bottom-left-radius: 9px;
    border-bottom-right-radius: 9px;
  }

  .dropdown-body.open {
  display: flex;
  flex-direction: column;
}

a {
  color: #00F5D0;
  text-decoration: none;
}

.dropdown-item {
  padding: 10px 3px;
}

.dropdown-item:hover {
  cursor: pointer;
}

.dropdown-item-dot {
  opacity: 0;
  color: #91A5BE;
  transition: all .2s ease-in-out;
}

.dropdown-item-dot.selected {
  opacity: 1;
}

.nav-link{
  font-family: 'JetBrains Mono', monospace;
font-size: 18px;
color: #11F6D4;
margin-left: 2rem;
}

@media (max-width: 1000px) {
  nav{
    padding: 0.8rem 4.2rem;
  }
}
`