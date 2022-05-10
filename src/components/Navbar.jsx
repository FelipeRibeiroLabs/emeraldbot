import React from "react";

export default function Navbar({ vpWidth, toggleDrawer }) {
  console.log("toggleDrawer", toggleDrawer);

  return (
    <>
      {vpWidth > 5 ? (
        <nav>
          <div></div>
          <main style={{ display: "flex" }}>
            <li>
              <a className="nav-link">COMMANDS</a>
            </li>
            <li>
              <a className="nav-link">DOCS</a>
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
