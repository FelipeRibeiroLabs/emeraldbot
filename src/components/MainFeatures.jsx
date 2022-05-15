import React from "react";
import { FaDiscord, FaDoorOpen, FaToolbox } from "react-icons/fa";
import MainFeaturesCard from "./MainFeaturesCard";

export default function MainFeatures({handleNav}) {


  return (
    <>
      <div className="sectionTxt">
        <h2>MAIN FEATURES</h2>
      </div>

      <MainFeaturesCard
      title="Display NFTs in Discord"
      iconComp={<FaDiscord size={26} color={"#11F6D4"} />}
      text="Here we will the description of the features"
      text2=""
      link="Display"
      />

      <MainFeaturesCard
      title="Gated Access"
      iconComp={<FaDoorOpen size={26} color={"#11F6D4"} />}
      text="Role based Channels"
      text2="Token-gated Channels"
      link="Access"
      />

      <MainFeaturesCard
      title="General Utilities"
      iconComp={<FaToolbox size={26} color={"#11F6D4"} />}
      text="Here we will the description of the features"
      text2=""
      link="General"
      />
    </>
  );
}
