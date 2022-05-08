import styled from "styled-components";
import HeaderTitle from "../components/HeaderTitle";
import PrimaryButton from "../components/PrimaryButton";

export function Section1({devices}) {

  const SectionWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  font-weight: 900;
  letter-spacing: -0.3rem;
  margin: 0;
  padding: 40px;
  color: rgba(240, 248, 255, 0.8);
  -webkit-text-stroke:1.4px white;
  -webkit-text-fill-color:transparent;

  @media ${devices.tablet} {
    font-size:2rem;
    line-height: 4rem;
  }
  
  @media ${devices.laptop} {
    font-size:4rem;
    line-height: 6rem;
  }
`

  return (
    <SectionWrapper>
      <HeaderTitle devices={devices} section={"hero"} />
      <div style={{marginTop:"1.6em"}}>
        <PrimaryButton />
      </div>
    </SectionWrapper>
  );
}


