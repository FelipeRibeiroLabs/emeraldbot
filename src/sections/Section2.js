import styled from "styled-components"

export function Section2(){
    return (
        <SectionWrapper>
              <h2>
                Short Description of our beloved <br /> bot
              </h2>
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
`