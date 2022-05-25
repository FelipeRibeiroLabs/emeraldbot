import React from "react";
import MainFeaturesSection from "./MainFeaturesSection";

import styled from 'styled-components'

export default function MainFeatures({handleNav}) {


  return (
    <>
      <div className="sectionTxt">
        <h2>MAIN FEATURES</h2>
      </div>
      <Wrapper>
        <MainFeaturesSection 
        title="Display NFTs in"
        spanTitle="Discord"
        iconLink="/3d_discord_1.png"
        text="Here we will the description of the features, here we will the description of the features. Here we will the description of the features."
        link="Display"
        />

        <MainFeaturesSection 
        title="Gated "
        spanTitle="Access"
        iconLink="/access.png"
        text="Here we will the description of the features, here we will the description of the features. Here we will the description of the features."
        link="Access"
        />

        <MainFeaturesSection 
        title="General "
        spanTitle="Utilities"
        iconLink="/utilities.png"
        text="Here we will the description of the features, here we will the description of the features. Here we will the description of the features."
        link="General"
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  &:nth-child(1){
    
  }
`