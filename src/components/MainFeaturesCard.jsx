import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default function MainFeaturesCard({title, iconComp, text, text2, link}) {
  return (
    <Wrapper>
      <div className="titleDiv">
        <h3>{title}</h3>
        <div className="icon">
        {iconComp}
        </div>
      </div>

      <div className="textDiv">
        <p>{text}</p>
        { text2 && <p>{text2}</p>}
      </div>

      <button>
        <Link to={link.toLowerCase()} > 
          See commands
        </Link>
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center !important;
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

    .titleDiv{
      display: flex;
      align-items: center;
    }

    .textDiv{
      display: flex;
      width: 100%;
      justify-content: center;
      gap: 20%;
      margin-top: .7rem;
      margin-bottom: 1.3rem;
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
      padding: 1rem;
      border-radius: 1rem;
      margin: 20px;
      & a{
        text-decoration: none;
        color: #00F5D0;
      }
      :hover{
        a{
          color: black;
        }
      }
    }

    @media (max-width: 700px) {
      padding: 70px 30px;
    }

    @media (max-width: 600px) {
      padding: 70px 15px;
      gap: 10%;
    }

    @media (max-width: 550px) {
      .titleDiv{
        & h3{
          font-size: 1.7rem;
        }
      }

      .textDiv{
        flex-direction: column;
        align-items: center;
        text-align: center;
      }
    }

    @media (max-width: 400px) {
      .titleDiv{
        & h3{
          font-size: 1.2rem;
        }

        & p {
          font-size: .6rem;
        }
      }
    }
`