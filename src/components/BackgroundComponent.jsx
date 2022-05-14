import React from "react";

export default function BackgroundComponent() {
  return (
    <>
      <div className="background-gradient" />
      <div id="circle-container">
        <div className="circle one" />
        <div className="circle two rotating">
          <div className="circle-little" />
        </div>
        <div className="circle three" />
        <div className="circle four rotating reverse">
          <div className="circle-little" />
        </div>
        <div className="circle five" />
        <div className="circle six rotating">
          <div className="circle-little" />
        </div>
        <div className="circle seven rotating reverse">
          <div className="circle-little" />
        </div>
        <div className="circle eight" />
        <div className="circle nine" />
      </div>
    </>
  );
}
