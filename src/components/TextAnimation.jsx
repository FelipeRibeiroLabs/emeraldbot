import styled from "styled-components"

export function TextAnimation({text}){

    return(
        <TextWrapper>
            <h2>{text}</h2>
        </TextWrapper>
    )
}

const TextWrapper = styled.div`
    position: relative;
    left: 300px;
`

