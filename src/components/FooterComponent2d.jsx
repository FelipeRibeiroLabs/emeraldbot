import React from "react";

import styled from "styled-components";

export default function FooterComponent({ vpWidth }) {
  return (
    <FooterWrapper>
      <div>
        <h2>EMERALD CITY</h2>
      </div>
      <div>
        <p>
          We are the first DAO on the Flow Blockchain <br />
          Educate, build and govern
        </p>
      </div>
      <div>
        <button>Add Server</button>
      </div>
      <div className="footer-bar">
        <div className="footer-item">
          {" "}
          <span>2022. all rights reserved</span>
        </div>
        <div className="footer-item"></div>
        <div>
          <span>
            Created by <a style={{color:"var(--primary)"}}>Emerald City DAO</a>
          </span>
        </div>
      </div>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.5);
  align-items: center;
  h4 {
    color: #fff;
  }
  span {
    color: #fff;
  }

  & p {
    text-align: center;
  }

  & .footer-bar {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 3rem;
  }

  & .footer-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  & button {
    margin: 2rem;
    align-self: center;
    padding: 1rem;
    border-radius: 1rem;
  }

  @media (max-width: 700px) {
    & h2{
      margin-bottom: 1rem;
    }
  }

  @media (max-width: 600px) {
    & span{
      font-size: .9rem;
    }
  }

  @media (max-width: 500px) {
    .footer-bar{
      padding: 1rem 2rem;
      flex-direction: column-reverse;
      gap: 3px;
    }
    
    & h2{
      font-size: 3.5rem;
    }

    & span{
      font-size: .9rem;
    }
  }

  @media (max-width: 400px) {

    .footer-bar{
      padding: 1rem 1rem;
    }

    & h2{
      font-size: 2.5rem;
    }

    /* & p {
      font-size: .8rem;
  } */
  }
`;

