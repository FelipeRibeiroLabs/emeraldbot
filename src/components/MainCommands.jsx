import React from "react";
import { Flex, Box, useReflow } from "@react-three/flex";
import Text from "./Text";
import CardModel from "./CardModel";
import CardsComponent from "./CardsComponent";
import infos from "../data/CommandsInfos.json"

export default function MainCommands({ vpWidth, viewport, cardTexture }) {

    const emeraldBotCommands = infos[0].emeraldBotCommands

    const cardProps ={viewport, cardTexture , commands: emeraldBotCommands}

  return (
    <>
      <group position-z={0.2}>
        <Box
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="100%"
          marginTop={0.8}
          marginBottom={0.2}
        >
          <Box margin={0.1}>
            <Text
              fontSize={viewport.width > 5 ? 0.2 : 0.12}
              letterSpacing={0.02}
              maxWidth={vpWidth * 0.8}
              textAlign="center"
              bold
            >
              Main Commands
            </Text>
          </Box>
        </Box>
      </group>
    <CardsComponent {...cardProps} />
      
    </>
  );
}
