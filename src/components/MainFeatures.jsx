import React from "react";
import { FaDiscord, FaDoorOpen, FaToolbox } from "react-icons/fa";

export default function MainFeatures({handleNav}) {
  return (
    <>
      <div className="sectionTxt">
        <h2>MAIN FEATURES</h2>
      </div>

      <div className="displayDiv2">
        <div>

          <div className="card-title">
            <h3>Display NFTs in Discord</h3>
            <div className="icon">
              <FaDiscord size={26} color={"#11F6D4"} />
            </div>
          </div>

          <div className="subDiv">
            <div>
              <p>Here we will the description of the features</p>
            </div>
          </div>
        </div>
        <button onClick={() => handleNav("display")}>SEE COMMANDS</button>
      </div>

      <div className="displayDiv2">
        <div className="card-title">
          <h3>Gated Access</h3>
          <div className="icon">
            <FaDoorOpen size={26} color={"#11F6D4"} />
          </div>
        </div>
        
        <div className="subDiv">
          <div>
            <p>Role based Channels</p>
          </div>
          <div>
            <p>Token-gated Channels</p>
          </div>
        </div>
        <button onClick={() => handleNav("access")}>SEE COMMANDS</button>
      </div>

      <div className="displayDiv2">
        <div className="card-title">
          <h3>General Utilities</h3>
          <div className="icon">
            <FaToolbox size={26} color={"#11F6D4"} />
          </div>
        </div>
        <p>Here we will the description of the features</p>
        <span></span>
        <button onClick={() => handleNav("general")}>SEE COMMANDS</button>
      </div>
    </>
  );
}
