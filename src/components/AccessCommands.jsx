import React from "react";
import { Flex, Box, useReflow } from "@react-three/flex";
import Text from "./Text";
import CardModel from "./CardModel";
import CardsComponent from "./CardsComponent";
import infos from "../data/CommandsInfos.json"

export default function AccessCommands({ vpWidth, viewport, cardTexture }) {
  const commands = infos[2].gatedAccess

    const cardProps ={viewport, cardTexture , commands}

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
             bold
             fontSize={viewport.width > 5 ? 0.2 : 0.12}
              letterSpacing={0.02}
              maxWidth={vpWidth * 0.8}
              textAlign="center"
            >
              General Commands
            </Text>
          </Box>
        </Box>
      </group>
    <CardsComponent {...cardProps} />
      
    </>
  );
}
