import React from "react";
import { Box } from "@react-three/flex";
import CardModel from "./CardModel";
import Text from "./Text";

export default function CardsComponent({ viewport, cardTexture, commands }) {
  console.log("commands", commands)

  return (
    <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      width="100%"
      // flexBasis= "33.333333%"

      // width="70%"
    >
      {commands.map((command, i) => {
        let yRotation = 0;
        let isLateral = false;

        console.log("vw", viewport.width);
        switch (i) {
          case 0:
            viewport.width >= 5 ? (yRotation = 0.2) : (yRotation = 0);
            isLateral = true;
            break;
          case 1:
            viewport.width >= 5 ? (yRotation = -0.2) : (yRotation = 0);
            isLateral = true;
            break;

          case 2:
            viewport.width >= 5 ? (yRotation = 0.2) : (yRotation = 0);
            isLateral = true;
            break;

          case 3:
            viewport.width >= 5 ? (yRotation = -0.2) : (yRotation = 0);
            isLateral = true;

            break;
          case 4:
            viewport.width >= 5 ? (yRotation = 0.2) : (yRotation = 0);
            isLateral = true;
            break;
          case 5:
            viewport.width >= 5 ? (yRotation = -0.2) : (yRotation = 0);
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
            <Box height={0.1}   flexDirection="column" padding={0}>
              <Text
                bold={true}
                yRot={yRotation}
                fontSize={0.08}
                letterSpacing={0.05}
                textAlign="center"
              >
                {command.command}
              </Text>
            </Box>
            {/* <Box flexDirection="column" padding={0.1}> */}
              <Box marginTop={0.1} height={0.5} >
                <Text
                  maxWidth={0.6}
                  yRot={yRotation}
                  fontSize={0.05}
                  letterSpacing={0.1}
                  textAlign="center"
                >
                  {command.commandDescription}
                </Text>
              {/* </Box> */}
            </Box>
            <Box height={0.2}  flexDirection="column" padding={0.1}>
              <Box>
                <Text
                  yRot={yRotation}
                  fontSize={0.08}
                  letterSpacing={0.1}
                  textAlign="center"
                  secondary
                >
                  SEE EXAMPLE
                </Text>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
}
