import React, {Suspense, useRef, useCallback} from "react";

import styled from "styled-components"
  
  export default function EmeraldBotCommands({ title, description, imgLink, gifLink }) {

    return (
            <Style>
            {
            gifLink ? <Gif image={gifLink} /> : 
            
            (
                <Image> 
                    <img src={imgLink} alt="" />
                </Image>
            )
            }
              <Content>
              <Title>{title}</Title>
              <Description>{description}</Description>
              <BottomBar />
                </Content>
            </Style>
    );
  }


const cardWidth = 650;
const borderRadius = 15;
const transition = 'all 0.45s ease';

  const Image = styled.div`
    z-index: 200;
    position: relative;
    margin: 0;
    padding: 0;
    width: ${cardWidth}px;
    height: 133px;
    /* background: url(${(props) => props.image}) 0 0 no-repeat; */
    background-size: cover;
    overflow: hidden;
    backface-visibility: hidden;
   
    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    transition: ${transition};
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        height: 128px;
    }
    @media screen and (max-width: 600px) {
        height: 100px;
    }
    @media screen and (max-width: 500px) {
        height: 90px;
    }
    @media screen and (max-width: 400px) {
        height: 80px;
    }
    img{
        width: 100%;
    }
  `

  const Gif = styled.figure`
    z-index: 200;
    position: relative;
    margin: 0;
    padding: 0;
    width: ${cardWidth}px;
    height: 350px;
    background: url(${(props) => props.image}) 0 0 no-repeat;
    background-size: cover;
    border-radius: ${borderRadius}px ${borderRadius}px 0 0;
    overflow: hidden;
    backface-visibility: hidden;
   
    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0);
    transition: ${transition};
    }
    @media screen and (max-width: 800px) {
        width: 100%;
        background-position-x: center;
        background-position-y: bottom;
    }
    @media screen and (max-width: 600px) {
        width: 100%;
        height: 220px;
    }
  `
  
  const Content = styled.div`
  z-index: 200;
  position: relative;
  padding: 20px 20px 30px;
`;

const Title = styled.span`
  display: block;
  margin-bottom: 4px;
  font-size: 1.25em;
  font-weight: 500;
  transition: ${transition};
`;

  const BottomBar = styled.span`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 10px;
  background: ${(props) => props.background && props.background};
  border-radius: 0 0 ${borderRadius}px ${borderRadius}px;
  transition: ${transition};
`;

const Description = styled.span`
  display: block;
  font-size: 0.875em;
  color: #999999;
  transition: ${transition};
  transition-delay: 0.04s;
`;

 const Style = styled.div`
    margin: 50px 0;
    position: relative;
    text-align: center;
    flex-shrink: 0;
    width: ${cardWidth}px;
    background: #ffffff;
    border-radius: ${borderRadius}px;
    cursor: pointer;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.12), 0 20px 20px -10px rgba(0, 0, 0, 0.125);
    transition: ${transition};
    &:hover {
    transform: scale(1.04);
    ${Title},
    ${Description},
    ${BottomBar} {
      transform: scale(0.92);
    }
    ${Title} {
      transform: translateY(-10px);
    }
    ${Description} {
      transform: translateY(-12px);
    }
    ${BottomBar} {
      border-radius: ${borderRadius - 2}px;
      transform: translateY(-14px) scale(0.9);
    }
    ${Gif} {
      transform: scale(1.01);
      border-radius: ${borderRadius - 2}px;
      &::before {
        background: rgba(0, 0, 0, 0.1);
      }
    }
    }
    @media screen and (max-width: 800px) {
        width: 80%;
    }
    @media screen and (max-width: 600px) {
        width: 90%;
    }
  `