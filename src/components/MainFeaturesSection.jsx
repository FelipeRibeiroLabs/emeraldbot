import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

export default function MainFeaturesSection({
  handleNav,
  left,
  title,
  spanTitle,
  iconLink,
  text,
  link,
}) {
  return (
        <Wrapper>
            <div className="imgDiv">
              <img src={iconLink} alt="" />
            </div>
            <div className="infoDiv">
              <div className="titleDiv">
                <h3>
                  {title} <span>{spanTitle}</span>
                </h3>
              </div>

              <div className="textDiv">
                <p>{text}</p>
              </div>

              <button onClick={()  => handleNav(link.toLowerCase())} >
                {/* <Link to={link.toLowerCase()}>See commands</Link> */}
                See commands
              </button>
            </div>
          </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding: 120px 0;
  margin: 0px auto;
  /* background-color: rgba(0, 0, 0, 0.4); */

  section {
    width: 70%;
    margin: auto;
    display: flex;
  }

  img {
    width: 333px;
  }

  .infoDiv {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 100px;
  }

  .titleDiv {
    text-align: center;
    /* margin-bottom: 40px; */
  }

  .textDiv {
    padding: 40px;
  }

  & h3 {
    margin: 0px;
    font-size: 2.8rem;
    font-weight: 600;
    color: rgba(240, 248, 255, 1);
  }

  span {
    background-image: url("/skew-right.png");
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: inherit;
    background-position-y: bottom;
  }

  & p {
    text-align: center;
    margin: 5px;
    margin-top: 1rem;
    font-weight: 200;
  }

  & button {
    align-self: center;
    padding: 1rem;
    border-radius: 1rem;
    margin: 20px;
    & a {
      text-decoration: none;
      color: #00f5d0;
    }
    :hover {
      a {
        color: black;
      }
    }
  }

  .imgDiv {
    margin: auto;
  }

  @media (max-width: 1500px) {
    .infoDiv {
      padding: 40px;
    }
  }

  @media (max-width: 1300px) {
    section {
      width: 80%;
    }
  }

  @media (max-width: 1100px) {
    img {
      width: 253px;
    }
  }

  @media (max-width: 800px) {
    section {
      width: 90%;
      flex-direction: column;
    }

    img {
      width: 233px;
    }

    .textDiv {
      padding: 40px 10px;
    }
  }

  @media (max-width: 700px) {
    img {
      width: 200px;
    }
  }

  @media (max-width: 600px) {
    h3 {
      font-size: 2em;
    }
    p {
      font-size: 0.8em;
    }
    img {
      width: 130px;
    }

    .infoDiv {
      padding: 20px;
    }
  }

  @media (max-width: 550px) {
    img {
      width: 100px;
    }

    .titleDiv {
      & h3 {
        font-size: 1.7rem;
      }
    }

    .textDiv {
      padding: 20px 10px;
    }
  }

  @media (max-width: 400px) {
    .titleDiv {
      & h3 {
        font-size: 1.2rem;
      }

      & p {
        font-size: 0.6rem;
      }
    }
  }
`;
