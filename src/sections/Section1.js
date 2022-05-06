import styled from "styled-components";
import PrimaryButton from "../components/PrimaryButton";

export function Section1() {
  return (
    <SectionWrapper>
      <h1>
        EMERALD <br /> BOT
      </h1>
      <div style={{marginTop:"1.6em"}}>
        <PrimaryButton />
      </div>
    </SectionWrapper>
  );
}

const SectionWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  padding: 40px;

  p {
    width: 700px;
    line-height: 30px;
  }
`;
