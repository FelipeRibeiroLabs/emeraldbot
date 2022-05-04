import styled from "styled-components"
import { TextAnimation } from "../components/TextAnimation"

export function Section2(){
    return (
        <SectionWrapper>
            <TextAnimation text="A Discord bot that allows you to distribute roles and gate access to channels based on token/NFT holdings. " />
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
    overflow: hidden;

`