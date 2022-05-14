import React from 'react'

export default function HeroComponent2({url}) {
  return (
<div className="divBox" >
        <div className="imageDiv">
          <img src={url} alt="bot" />
        </div>

        <div className="textDiv">
          <h1>EMERALD BOT</h1>
          <p>
            A Discord bot created by your best friends at <a>Emerald City </a>
            that allows you to distribute roles, gate access to channels based
            on token holdings and more.
          </p>
        </div>
      </div>  )
}
