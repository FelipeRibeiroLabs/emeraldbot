import React from 'react'
import styled from 'styled-components'

export default function HeroComponent2({url}) {
  return (
    <HeroWrapper>
      <div className="divBox" >
          <div className="imageDiv">
            <img src={url} alt="bot" />
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
      </HeroWrapper>
      )
}

const HeroWrapper = styled.section`
  background-color: rgba(0, 0, 0, 0.5);

  .divBox {
    max-width: 1200px;
    margin: auto;
    overflow: hidden;
    padding: 8rem 7rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    height: 100vh;
  }

  .textDiv {
    width: 50%;
    z-index: 4;
  }

  .imageDiv {
    width: 50%;
    & img {
      width: 550px;
    }
  }

  @media (max-width: 1000px) {
    .divBox{
      padding: 8rem 3rem;
    }

    .imageDiv{
      position: relative;
      width: 533px;
      top: 125px;
      /* right: 35px; */
    }
  }

  @media (max-width: 800px) {
    .divBox{
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
    }

    .imageDiv{
      top: 180px;
    }

    .textDiv{
      width: 100%;
      text-align: center;

      & h1{
        width: 100%;
      }
    }
  }

  @media (max-width: 600px) {
    .textDiv{
      & h1{
        font-size: 5rem;
      }
    }
  }

  @media (max-width: 450px) {
    .textDiv{
      & h1{
        font-size: 4rem;
      }
    }

    .imageDiv{
      width: 450px;

      & img{
        width: 100%;
      }
    }
  }
`