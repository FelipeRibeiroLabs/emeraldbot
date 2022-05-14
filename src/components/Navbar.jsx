import React, { useEffect, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";

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
    <nav>
        <div>
      <Link
      to={"/"}
      >
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
            class="nav-link"
            href="https://discord.com/invite/emeraldcity"
            target="_blank"
          >
            EMERALD CITY
          </a>
        </li>
      </main>
    </nav>
  );
}
