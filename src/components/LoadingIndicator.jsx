import React from "react";
import styled from "styled-components";

export default function LoadingIndicator() {
  return (
    <Wrapper>
      <div id="container">
        <svg viewBox="0 0 100 100">
          <defs>
            <filter id="shadow">
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="1.5"
                flood-color="var(--primary)"
              />
            </filter>
          </defs>
          <circle id="spinner" className="circle" cx="50" cy="50" r="45" />
        </svg>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  & .circle {
    fill: transparent;
    stroke: var(--primary);
    stroke-width: 7px;
    stroke-linecap: round;
    filter: url(#shadow);
  }

  div {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  #container {
    width: 200px;
    height: 200px;
  }

  @keyframes animation {
    0% {
      stroke-dasharray: 1 98;
      stroke-dashoffset: -105;
    }
    50% {
      stroke-dasharray: 80 10;
      stroke-dashoffset: -160;
    }
    100% {
      stroke-dasharray: 1 98;
      stroke-dashoffset: -300;
    }
  }

  #spinner {
    transform-origin: center;
    animation-name: animation;
    animation-duration: 1.2s;
    animation-timing-function: cubic-bezier;
    animation-iteration-count: infinite;
  }
`;
