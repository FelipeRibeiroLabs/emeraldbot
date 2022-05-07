import { Card } from "../components/Card";
import infos from "../data/CommandsInfos.json"

import styled from "styled-components"

export function Section5(){
  const emeraldBotCommands = infos[3].gatedAccess

    return (
        <SectionWrapper>
            <h3>Gated Access</h3>
            <CardsWrapper>
              { emeraldBotCommands.map(
                (
                  {command, commandDescription, param1, param2, param3, param4, imgLinkUsage, imgLinkResult, note}
                  ) => {
                return (
                  <>
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
                  </>
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

const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    flex-wrap: wrap;
    left: 20px;

    div:nth-child(1){
      transform-style: preserve-3d;
      -webkit-transform: perspective(500px) rotateY(12deg) scale(0.9);
    }

    div:nth-child(2n){
      transform-style: preserve-3d;
      -webkit-transform: perspective(500px) rotateY(-12deg) scale(0.9);
    }
`