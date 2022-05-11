import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const data = [
  { id: 0, label: "MAIN", url:"http://localhost:3000/commands" },
  { id: 1, label: "FLOATS", url:"http://localhost:3000/floatcommands" },
  { id: 2, label: "ACCESS", url:"http://localhost:3000/gatedaccess" },
];

export default function Navbar({ vpWidth }) {
  const [isOpen, setOpen] = useState(false);
  const [items, setItem] = useState(data);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleDropdown = () => setOpen(!isOpen);

  const handleItemClick = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
  };

  return (
    <>
      {vpWidth > 5 ? (
        <nav>
          <div></div>
          <main style={{ display: "flex" }}>
            <li>
              {/* <a className="nav-link">COMMANDS</a> */}
              <div className="dropdown">
                <div className="dropdown-header" onClick={toggleDropdown}>
                   COMMANDS
                  <FiChevronDown onClick={toggleDropdown} />
                  {/* <i
                    className={`fa fa-chevron-right icon ${isOpen && "open"}`}
                  ></i> */}
                </div>
                <div className={`dropdown-body ${isOpen && "open"}`}>
                  {items.map((item) => (
                    <a
                      href={item.url}
                      className="dropdown-item"
                      onClick={(e) => handleItemClick(e.target.id)}
                      id={item.id}
                    >
                      <span
                        className={`dropdown-item-dot ${item.id ==
                          selectedItem && "selected"}`}
                      >
                        •
                      </span>
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </li>
            <li>
              <a className="nav-link">DOCS</a>
            </li>
            <li>
              <a
                class="nav-link"
                href="https://discord.com/invite/emeraldcity"
                target="_blank"
              >
                EMERALD CITY
              </a>
            </li>
          </main>
        </nav>
      ) : (
        <div></div>
      )}

      {/* <li>
    <a class="nav-link" href="https://discord.com/invite/emeraldcity" target="_blank">Emerald City</a>
  </li> */}
    </>
  );
}
