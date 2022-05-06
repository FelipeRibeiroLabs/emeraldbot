import styled from "styled-components"

export function Section1(){
    return (
        <SectionWrapper>
            <h1 >
                EMERALD <br /> BOT
            </h1>
            <p>
            A Discord bot that allows you to distribute roles and gate access to channels based on token/NFT holdings. 
            Also includes a lot of useful utilities for the Flow ecosystem.
            </p>
        </SectionWrapper>
    )
}

const SectionWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    padding: 40px;

    h1{
        -webkit-text-stroke:1.4px white;
    }

    p{
      width: 700px; 
      line-height: 30px;
      color: white;
    }
`