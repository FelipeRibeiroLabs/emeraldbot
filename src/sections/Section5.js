import { useRef } from 'react'
import { Card } from "../components/Card";
import { useScroll } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

import styled from "styled-components"

export function Section5(){

  const group = useRef()
  const scroll = useScroll()
  
  useFrame((state, delta) => {
    const offset = 1 - scroll.offset


  })

    return (
        <SectionWrapper>
            <h1>Gated Access</h1>
            <CardsWrapper ref={group}>
              <Card text="Here we will have the content of the card" />
              <Card text="Here we will have the content of the card" />
            </CardsWrapper>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.div`
    height: 80vh;
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
      background-color: #151515c4;
    }

    div:nth-child(1){
      transform-style: preserve-3d;
      -webkit-transform: perspective(500px) rotateY(12deg) scale(0.9);
    }

    div:nth-child(1):hover{
      -webkit-transform: scale(1.2);
      transition: .5s;
    }

    div:nth-child(2n){
      transform-style: preserve-3d;
      -webkit-transform: perspective(500px) rotateY(-12deg) scale(0.9);
    }

    div:nth-child(2):hover{
      -webkit-transform: scale(1.2);
      transition: .5s;
    }
`