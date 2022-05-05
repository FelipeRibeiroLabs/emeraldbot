import { useRef } from 'react'
import { Card } from "../components/Card";
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import styled from "styled-components"

export function Section4(){

  const group = useRef()
  const scroll = useScroll()
  
  useFrame((state, delta) => {
    const offset = 1 - scroll.offset


  })

    return (
        <SectionWrapper>
            <h3>Float Commands</h3>
            <CardsWrapper ref={group}>
            <Card 
              command="/float" 
              commandDescription="Allows a user to nicely display their FLOAT in Discord." 
              param1="1- The account the FLOAT is currently held by (can be an address, .find, or .fn name)" 
              param2="The floatId" 
              note="NOTE: You can copy and paste the command directly from the website as well, as shown in the below screenshot. This was taken from this FLOAT: https://floats.city/jacob.find/float/185454592"
              imgLinkUsage="" 
              imgLinkResult=""/>
              <Card 
              command="/floatverifier" 
              commandDescription="Setup a button users can click to get a certain role in Discord if they have a specific FLOAT." 
              param1="1- The EventId the FLOAT is from" 
              param2="2- The role to give" 
              //TODO -> ADD A IMG HERE -> https://emeralddao.notion.site/FLOAT-Commands-8517b547c87e43a6a5fd4fdc93edbb9f
              note="NOTE: In order for a user to verify themselves, they must have an EmeraldID. If they don’t it will automatically prompt them to get one. So you don’t have to worry about anything. ;) God I am so amazing. The EventId is found on the Event’s page. As shown in the below screenshot, this one’s EventId is 185454262"
              imgLinkUsage="" 
              imgLinkResult=""/>
              <Card 
              command="/groupverifier" 
              commandDescription="Setup a button users can click to get a certain role in Discord if they have any FLOAT from a specific FLOAT Group." 
              param1="1- The creator of the FLOAT Group (can be an address, .find, or .fn name)" 
              param2="2- The name of the Group" 
              param3="3- The role to give" 
              note="NOTE: In order for a user to verify themselves, they must have an EmeraldID. If they don’t it will automatically prompt them to get one. So you don’t have to worry about anything. ;) God I am so amazing."
              imgLinkUsage="" 
              imgLinkResult=""/>
            </CardsWrapper>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.div`
    height: 120vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding: 40px;

    h1{
      font-size: 4rem;
    }
`

const CardsWrapper = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    left: 20px;

    //We can make the Card on the Float section with a different style with this tag (just a idea)
    div{
      background-color: green;
    }

    div:nth-child(1){
      transform-style: preserve-3d;
      -webkit-transform: perspective(500px) rotateY(12deg) scale(0.9);
    }

    div:nth-child(1):hover{
      -webkit-transform: scale(1.2);
      transition: .5s;
      transition-timing-function: ease-in-out;
    }

    div:nth-child(2n){
      -webkit-transform: scale(0.9);
    }

    div:nth-child(2n):hover{
      -webkit-transform: scale(1.2);
      transition: .5s;
      transition-timing-function: ease-in-out;
    }

    div:nth-child(3n){
      transform-style: preserve-3d;
      -webkit-transform: perspective(500px) rotateY(-12deg) scale(0.9);
    }

    div:nth-child(3):hover{
      -webkit-transform: scale(1.2);
      transition: .5s;
      transition-timing-function: ease-in-out;
    }
`