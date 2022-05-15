import React from "react";
import styled from "styled-components";

export default function HeaderTitle({ devices, section }) {

    const HeaderWrapper = styled.div`
        font-weight: 900;
    letter-spacing: -0.3rem;
    margin: 0;
    padding: 0;
    color: rgba(240, 248, 255, 0.8);
    -webkit-text-stroke:1.4px white;
    -webkit-text-fill-color:transparent;
  
    @media ${devices.tablet} {
      font-size:2rem;
      line-height: 4rem;
  
  
    }
    @media ${devices.laptop} {
      font-size:4rem;
      line-height: 6rem;
  
    }
  `
  return (
    <HeaderWrapper>
      {section === "hero" ? (
        <h1>
          EMERALD
          <br />
          BOT
        </h1>
      ) : (
        <h1>
            Join Us
        </h1>
      )}
    </HeaderWrapper>
  );
}
