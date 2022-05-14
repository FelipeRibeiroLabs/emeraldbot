import React, { Suspense, useRef, useCallback } from "react";
import { FaDiscord, FaDoorOpen, FaToolbox } from "react-icons/fa";
import FooterComponent from "../components/FooterComponent2d";

import styled from "styled-components";

export default function AccessCommands({ onChangePages, state }) {
  return (
    <Wrapper>
      <div className="divBox">
        <div className="imageDiv">
          <img src="emerald-bot.png" alt="" />
        </div>

        <div className="textDiv">
          <h1>EMERALD BOT</h1>
          <p>
            A Discord bot created by your best friends at <a>Emerald City </a>
            that allows you to distribute roles, gate access to channels based
            on token holdings and more.
          </p>
        </div>
      </div>

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
          {/* <p>Like Floats for now but more to come</p> */}
          {/* <span> (NBATS, Flunks, GENIACE, and more soon)</span> */}
          {/* <img src="float.png" alt="" className="float" /> */}
          {/* <img src="flunks.webp" alt="" className="flunks"/> */}
          <div className="subDiv">
            <div>
              <p>Here we will the description of the features</p>
            </div>
          </div>
        </div>
        <button>SEE COMMANDS</button>
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
        <button>SEE COMMANDS</button>
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
        <button>SEE COMMANDS</button>
      </div>

      <FooterComponent />
    </Wrapper>
  );
}

const Wrapper = styled.section`
  overflow: inherit !important;

  .divBox {
    padding: 8rem 7rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    height:100vh
  }

  .textDiv {
    width: 50%;
  }

  .imageDiv {
    width: 50%;
    & img {
      width: 550px;
    }
  }

  .sectionTxt {
    width: 100%;
    padding: 2rem 50px;
    text-align: center;
    background: rgba(0, 0, 0, 0.5);

    & h2 {
      font-size: 3rem;
    }
  }

  .displayDiv {
    max-width: 900px;
    width: 90%;
    padding: 70px;
    margin: 180px auto;
    border-radius: 30px;
    border: 2px solid white;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    background-color: rgba(0, 0, 0, 0.4);

    & .float {
      width: 60px;
      position: absolute;
    }

    & .flunks {
      width: 60px;
      position: relative;
      right: 20px;
    }

    & h3 {
      margin: 0px;
      font-size: 2.2rem;
      font-weight: 400;
    }

    & p {
      margin: 5px;
      margin-top: 1rem;
      font-weight: 200;
    }

    & span {
      margin-left: 6px;
      font-size: 0.75rem;
      color: rgba(240, 248, 255, 0.9);
    }

    & button {
      align-self: center;
      margin-right: 5rem;
      padding: 1rem;
      border-radius: 1rem;
      background-color: rgba(0, 0, 0, 0.9);
    }
  }

  .displayDiv2 {
    max-width: 900px;
    width: 90%;
    padding: 32px 70px;
    margin: 180px auto;
    border-radius: 30px;
    border: 2px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.4);
    */ & .float {
      width: 60px;
      position: absolute;
    }

    & .flunks {
      width: 60px;
      position: relative;
      right: 20px;
    }

    & h3 {
      marginright: 0px;
      font-size: 2.2rem;
      font-weight: 500;
    }

    & p {
      margin: 5px;
      margin-top: 1rem;
      font-weight: 200;
    }

    & span {
      margin-left: 6px;
      font-size: 0.75rem;
      color: rgba(240, 248, 255, 0.9);
    }

    & button {
      margin: 2rem;
      align-self: center;
      padding: 1rem;
      border-radius: 1rem;
      background-color: rgba(0, 0, 0, 0.9);
    }
  }

  .subDiv {
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin: auto;
    text-align: center;
  }

  h1 {
    margin-top: 150px;
    text-align: center;
    letter-spacing: 0;
    font-size: 6.5rem;
    line-height: 6rem;
    color: white;
    width: 200px;
  }
`;
