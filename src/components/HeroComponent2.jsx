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
            <button>Start building</button>
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
    padding: 10rem 7rem;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    height: 100%;
  }

  .textDiv {
    width: 50%;
    z-index: 4;
  }

  .imageDiv {
    width: 50%;
    & img {
      width: 650px;
      position: relative;
      animation: mymove 5s ease-in-out infinite;
    }    
  }
  @keyframes mymove {
    0% {top: 0px;}
    50% {top: 30px;}
    100% {top: 0px;}
  }

  & button {
    margin: 1rem;
    align-self: center;
    padding: 1rem;
    border-radius: 1rem;
  }

  @media (max-width: 1000px) {
    .divBox{
      padding: 5rem 3rem;
    }

    .imageDiv{
      position: relative;
      width: 533px;
      top: 125px;
      /* right: 35px; */
    }
  }

  @media (max-width: 1200px) {
    .imageDiv{
      & img {
      width: 550px;
      }
    }
  }


  @media (min-width: 1400px) {
    .imageDiv{
      width: 55%;
      & img {
      width: 710px;
      }
    }
  }


  @media (max-width: 900px) {
    .divBox{
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
    }

    .imageDiv{
      top: 0px;
    }

    .textDiv{
      width: 100%;
      text-align: center;
      
      & h1{
        margin-top: 0px;
        width: 100%;
      }
    }
  }

  @media (max-width: 600px) {
    .textDiv{
      & h1{
        font-size: 5rem;
        line-height: 5rem;
      }
    }
  }

  @media (max-width: 450px) {
    .textDiv{
      & h1{
        font-size: 4rem;
        line-height: 4rem;
      }
    }

    .imageDiv{
      width: 450px;

      & img{
        width: 100%;
      }
    }
  }

  @media (max-width: 380px) {
    .textDiv{
      & h1{
        font-size: 3rem;
        line-height: 3rem;
      }
    }
    
    .imageDiv{
      width: 350px;

      & img{
        width: 100%;
      }
    }

  }
`