import React, { Suspense, useRef, useCallback } from "react";
import FooterComponent from "../components/FooterComponent2d";
import { useNavigate } from "react-router-dom";

import styled from "styled-components";
import HeroComponent2 from "../components/HeroComponent2";
import MainFeatures from "../components/MainFeatures";

export default function Home2d({ onChangePages, state, url }) {
  let navigate = useNavigate();

  const handleNav = (route) => {
    navigate(`/${route}`);
  };

  return (
    <Wrapper>
      <HeroComponent2 url={url} />
      <MainFeatures handleNav={handleNav} />
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
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
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
    background: rgba(0, 0, 0, 0.4);

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
      // background-color: rgba(0, 0, 0, 0.9);
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
