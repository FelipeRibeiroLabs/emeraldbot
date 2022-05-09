import React from 'react'

export default function Navbar() {
  return (
<nav>
    <li>
        {/* <img src="" alt='logo' /> */}
    </li>
    <main style={{display:"flex"}}>
         <li>
        <a className="nav-link">
            COMMANDS
        </a>
      </li>
      <li>
        <a className="nav-link">
            DOCS
        </a>
      </li>
      
    </main>
     
   
  {/* <li>
    <a class="nav-link" href="https://discord.com/invite/emeraldcity" target="_blank">Emerald City</a>
  </li> */}
</nav>  )
}
