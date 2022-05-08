import React from "react";
import { Flex, Box, useReflow } from "@react-three/flex";
import Text from "./Text";
import CardModel from "./CardModel";
import CardsComponent from "./CardsComponent";

export default function MainCommands({ vpWidth, viewport, cardTexture }) {

    const cards = [0,1,2,3,4,5]

    const cardProps ={viewport, cardTexture , cards}

  return (
    <>
      <group position-z={0.2}>
        <Box
          flexDirection="column"
          alignItems="flex-start"
          justifyContent="center"
          width="100%"
          marginTop={0.8}
          marginBottom={0.2}
        >
          <Box margin={0.1}>
            <Text
              fontSize={0.2}
              letterSpacing={0.1}
              maxWidth={vpWidth * 0.8}
              textAlign="center"
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
