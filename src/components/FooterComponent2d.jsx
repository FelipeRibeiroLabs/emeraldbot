import React from "react";

import styled from "styled-components"

export default function FooterComponent({ vpWidth }) {
  return (
        <FooterWrapper>
          <div> 
            <h2>Join Us!</h2>
          </div>
          <div>
            <h4>CREATED BY EMERALD CITY DAO</h4>
          </div>
        </FooterWrapper>
  );
}

const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h4{
    color: #fff;
  }
`