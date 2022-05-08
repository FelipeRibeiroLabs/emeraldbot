import React from "react";
import { Box } from "@react-three/flex";
import CardModel from "./CardModel";
import Text from "./Text";

export default function CardsComponent({ viewport, cardTexture , cards}) {
  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      width="100%"
      // width="70%"
    >
      {cards.map((k, i) => {
        let yRotation = 0;
        let isLateral = false;

        console.log("vw", viewport.width);
        switch (i) {
          case 0:
            viewport.width >= 6 ? (yRotation = 0.2) : (yRotation = 0);
            isLateral = true;
            break;
          case 2:
            viewport.width >= 6 ? (yRotation = -0.2) : (yRotation = 0);
            isLateral = true;
            break;

          case 3:
            viewport.width >= 6 ? (yRotation = 0.2) : (yRotation = 0);
            isLateral = true;
            break;

          case 5:
            viewport.width >= 6 ? (yRotation = -0.2) : (yRotation = 0);
            isLateral = true;

            break;

          default:
            break;
        }
        return (
          <Box
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingLeft={isLateral && viewport.width >= 6 ? 0.04 : 0.08}
            margin={0.5}
            key={i}
          >
            <mesh rotation={[0, yRotation, 0]} position={[0.5, -0.5, 0]}>
              <planeBufferGeometry args={[1, 1.4]} />
              <meshBasicMaterial map={cardTexture} opacity={0.46} transparent />
            </mesh>
            <Box flexDirection="column" padding={0}>
              <Text
                yRot={yRotation}
                fontSize={0.1}
                letterSpacing={0.1}
                textAlign="center"
              >
                /Label
              </Text>
            </Box>
            <Box flexDirection="column" padding={0.1}>
              <Box>
                <Text
                  maxWidth={0.6}
                  yRot={yRotation}
                  fontSize={0.08}
                  letterSpacing={0.1}
                  textAlign="center"
                >
                  Description of the functionality and flow of func
                </Text>
              </Box>
            </Box>
            <Box flexDirection="column" padding={0.1}>
              <Box>
                <Text
                  yRot={yRotation}
                  fontSize={0.1}
                  letterSpacing={0.1}
                  textAlign="center"
                >
                  ACTION
                </Text>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
