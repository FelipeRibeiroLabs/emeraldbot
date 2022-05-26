import React, {Suspense, useRef, useCallback} from "react";
  
import Navbar from "../components/Navbar";
import Card2d from "../components/Card2d";
import FooterComponent from "../components/FooterComponent2d";

import styled from "styled-components"

import infos from "../data/CommandsInfos.json"
  
  export default function GeneralCommands({ onChangePages, state }) {

    const commands = infos[2].utils

    return (
          <Wrapper>
            <h1>General</h1>
            <CardsWrapper>

              {commands.map((c) => {
                return (
                  <Card2d 
                  key={c.imgLinkResult}
                  title={c.command}
                  description={c.commandDescription}
                  imgLink={c.imgLinkUsage}
                  gifLink={c.gifLink}
                  />
                )
              })}
            </CardsWrapper>
            <FooterComponent />
          </Wrapper>
    );
  }

const Wrapper = styled.section`
  overflow: inherit !important;
  h1{
    margin-top: 150px;
    text-align: center;
    letter-spacing: 0;
    font-size: 2.5rem;
    color: white;
  }
`

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
`