import React from 'react'

export default function Navbar() {
  return (
<nav>
    <li>
        {/* <img src="" alt='logo' /> */}
    </li>
    <main style={{display:"flex"}}>
         <li>
        <a class="nav-link">
            Link
        </a>
      </li>
      <li>
        <a class="nav-link">
            Link 2
        </a>
      </li>
    </main>
     
   
  {/* <li>
    <a class="nav-link" href="https://discord.com/invite/emeraldcity" target="_blank">Emerald City</a>
  </li> */}
  {/* <slot/> */}
</nav>  )
}
