import { Card } from "../components/Card";

import styled from "styled-components"
import infos from "../data/CommandsInfos.json"


export function Section3({devices}){
  const emeraldBotCommands = infos[0].emeraldBotCommands
  const emeraldBotCommands2 = infos[1].emeraldBotCommands2

  const CardsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction:row;
    flex-wrap: wrap;


    div:nth-child(1){
      transform-style: preserve-3d;
      -webkit-transform: perspective(500px) rotateY(12deg) scale(0.9);
    }

    div:nth-child(2n){
      -webkit-transform: scale(0.9);
    }

    div:nth-child(3n){
      transform-style: preserve-3d;
      -webkit-transform: perspective(500px) rotateY(-12deg) scale(0.9);
    }

    @media ${devices.mobile} {
      flex-direction:column;
      div:nth-child(1){
        transform-style: preserve-3d;
        -webkit-transform: perspective(0px) rotateY(0deg) scale(0.9);
      }
      div:nth-child(3){
        transform-style: preserve-3d;
        -webkit-transform: perspective(0px) rotateY(0deg) scale(0.9);
      }
    }
    
   
    @media ${devices.tablet} {
      div:nth-child(1){
        transform-style: preserve-3d;
        -webkit-transform: perspective(0px) rotateY(0deg) scale(0.9);
      }
      div:nth-child(3){
        transform-style: preserve-3d;
        -webkit-transform: perspective(0px) rotateY(0deg) scale(0.9);
      }
    }
    
    @media ${devices.laptop} {
    }
`
  
    return (
        <SectionWrapper>
            <h3>Emerald Bot Commands</h3>
            <CardsWrapper>
              { emeraldBotCommands.map(
                (
                  {command, commandDescription, param1, param2, param3, param4, imgLinkUsage, imgLinkResult, note}
                  ) => {
                return (
                  <Card 
                  key={command}
                  command={command}
                  commandDescription={commandDescription}
                  param1={param1}
                  param2={param2} 
                  param3={param3} 
                  param4={param4} 
                  note={note}
                  imgLinkUsage={imgLinkUsage} 
                  imgLinkResult={imgLinkResult}
                  />
                )
              })}
            </CardsWrapper>

            <CardsWrapper>
              { emeraldBotCommands2.map(
                (
                  {command, commandDescription, param1, param2, param3, param4, imgLinkUsage, imgLinkResult, note}
                  ) => {
                return (
                  <Card 
                  key={command}
                  command={command}
                  commandDescription={commandDescription}
                  param1={param1}
                  param2={param2} 
                  param3={param3} 
                  param4={param4} 
                  note={note}
                  imgLinkUsage={imgLinkUsage} 
                  imgLinkResult={imgLinkResult}
                  />
                )
              })}
            </CardsWrapper>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.div`    
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px;
    margin: 150px 0;
    

    h1{
      font-size: 4rem;
    }
`

