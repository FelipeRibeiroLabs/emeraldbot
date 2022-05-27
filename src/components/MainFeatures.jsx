import React from "react";
import MainFeaturesSection from "./MainFeaturesSection";

import styled from "styled-components";

export default function MainFeatures({ handleNav }) {
  return (
    <>
      <div className="sectionTxt">
        <h2>MAIN FEATURES</h2>
      </div>
      <Wrapper>
        <MainFeaturesSection
          handleNav={handleNav}
          left={true}
          title="Display NFTs in"
          spanTitle="Discord"
          iconLink="/3d_discord_1.png"
          text="Here we will the description of the features, here we will the description of the features. Here we will the description of the features."
          link="Display"
        />

        <MainFeaturesSection
          handleNav={handleNav}
          left={false}
          title="Gated"
          spanTitle="Access"
          iconLink="/access.png"
          text="Here we will the description of the features, here we will the description of the features. Here we will the description of the features."
          link="access"
        />

        <MainFeaturesSection
          handleNav={handleNav}
          left={true}
          title="General"
          spanTitle="Utilities"
          iconLink="/utilities.png"
          text="Here we will the description of the features, here we will the description of the features. Here we will the description of the features."
          link="general"
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
background-color: rgba(0, 0, 0, 0.4);

section {
    width: 70%;
    padding: 120px 0;
    margin: auto;
    display: flex;
  }

  section:nth-child(2n){
    flex-direction: row-reverse;
  }

  @media (max-width: 800px) {
    section {
      width: 90%;
      padding: 70px 0;
      flex-direction: column;
    }

    section:nth-child(2n){
    flex-direction: column;
  }
  }

`;
