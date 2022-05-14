import React, {Suspense, useRef, useCallback} from "react";
  
import FooterComponent from "../components/FooterComponent2d";

import styled from "styled-components"
  
  export default function AccessCommands({ onChangePages, state }) {

    return (
          <Wrapper>
            <div className="divBox">

              <div className="imageDiv">
                <img src="emerald-bot.png" alt="" />
              </div>

              <div className="textDiv">
                <h1>EMERALD BOT</h1>
                <p>A Discord bot that allows you to distribute roles and gate access to channels based on token/NFT holdings.</p>
              </div>

            </div>
            
            <div className="sectionTxt">
              <h2>Gate Access to channels based on token or NFT holding</h2>
            </div>

            <div className="displayDiv">
              <div>
                <h3>Display NFTs in Discord</h3>
                <p>Like Floats for now but more to come</p>
                <span> (NBATS, Flunks, GENIACE, and more soon)</span>
                <img src="float.png" alt="" className="float"/>
                {/* <img src="flunks.webp" alt="" className="flunks"/> */}
              </div>
              <button>See commands</button>
            </div>

            <div className="displayDiv2">
              <h3>Gated Access</h3>
              <div className="subDiv">
                <div>
                  <p>Role based Channels</p>
                </div>
                <div>
                <p>Toking-gating Channels</p>
                </div>
              </div>
              <button>See commands</button>
            </div>

            <div className="displayDiv2">
              <h3>General utilities</h3>
              <p>Like Floats for now but more to come</p>
              <span></span>
              <button>See commands</button>
            </div>



            <FooterComponent />
          </Wrapper>
    );
  }

const Wrapper = styled.section`
  overflow: inherit !important;
  
  .divBox{
    padding: 8rem 7rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
  }

  .textDiv{
    width: 50%;
  }

  .imageDiv{
    width: 50%;
    & img{
      width: 550px;
    }
  }

  .sectionTxt{
    width: 100%;
    padding: 100px 50px;
    text-align: center;
    background: #000000a6;

    & h2{
      font-size: 1.4rem;
    }
  }

  .displayDiv{
    max-width: 900px;
    width: 90%;
    padding: 70px;
    margin: 180px auto;
    border-radius: 30px;
    border: 1px solid white;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    /* background-color: rgba(0, 0, 0, .4); */

    & .float{
      width: 60px;
      position: absolute;
    }

    & .flunks{
      width: 60px;
      position: relative;
      right: 20px;
    }

    & h3{
      margin: 0px;
      font-size: 2.2rem;
      font-weight: 400;
    }

    & p{
      margin: 5px;
      margin-top: 1rem;
      font-weight: 200;
    }

    & span{
      margin-left: 6px;
      font-size: .75rem;
      color: rgba(240, 248, 255, 0.9);
    }

    & button{
      align-self: center;
      margin-right: 5rem;
      padding: 1rem;
      border-radius: 1rem;
      /* background-color: rgba(240, 248, 255, 0.9); */
    }
  }

  .displayDiv2{
    max-width: 900px;
    width: 90%;
    padding: 32px 70px;
    margin: 180px auto;
    border-radius: 30px;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* background-color: rgba(0, 0, 0, .4); */

    & .float{
      width: 60px;
      position: absolute;
    }

    & .flunks{
      width: 60px;
      position: relative;
      right: 20px;
    }

    & h3{
      margin: 0px;
      font-size: 2.2rem;
      font-weight: 400;
    }

    & p{
      margin: 5px;
      margin-top: 1rem;
      font-weight: 200;
    }

    & span{
      margin-left: 6px;
      font-size: .75rem;
      color: rgba(240, 248, 255, 0.9);
    }

    & button{
      margin: 2rem;
      align-self: center;
      padding: 1rem;
      border-radius: 1rem;
      /* background-color: rgba(240, 248, 255, 0.9); */
    }
  }

  .subDiv{
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin: auto;
  }
  
  h1{
    margin-top: 150px;
    text-align: center;
    letter-spacing: 0;
    font-size: 6.5rem;
    line-height: 6rem;
    color: white;
    width: 200px;
  }
`