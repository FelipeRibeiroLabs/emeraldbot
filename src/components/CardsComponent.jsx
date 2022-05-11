import React from "react";
import { Box } from "@react-three/flex";
import CardModel from "./CardModel";
import Text from "./Text";
import * as THREE from "three"

export default function CardsComponent({ viewport, cardTexture, commands }) {
  console.log("commands", commands);

  const bottleMaterial = new THREE.MeshPhysicalMaterial({
    color: "#574E4E",
    transmission: 1,
    roughness: 0.35,
    thickness: 500,
    envMapIntensity: 4,
  })

  function handleCardsRotation(size, i) {
    let yRotation;
    let isLateral = false;

    switch (i) {
      case 0:
        // if size === L || M
        yRotation = size === "L" || size === "M" ? 0.2 : 0;
        isLateral = true;
        break;
      case 1:
        yRotation = size === "M" ? -0.2 : 0;
        isLateral = size === "L" && true;
        break;
      case 2:
        if(size === "L") yRotation = -0.2
        if(size === "M") yRotation = 0.2
        if(size === "S") yRotation = 0
        isLateral = true;
        break;
      case 3:
        if(size === "L") yRotation = 0.2
        if(size === "M") yRotation = -0.2
        if(size === "S") yRotation = 0  
        isLateral = true;
        break;
      case 4:
        if(size === "L") yRotation = 0
        if(size === "M") yRotation = 0.2
        if(size === "S") yRotation = 0  
        isLateral = size === "L" && true;
        break;
      case 5:
        yRotation = size === "L" || size === "M" ? -0.2 : 0;
        isLateral = true;
        break;

      default:
        break;
    }

    return { yRotation, isLateral };
  }

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
        // let yRotation = 0;
        // let isLateral = false;

        // console.log("vw", viewport.width);
        const vpWidth = viewport.width;
        let res;

        if (vpWidth > 6) {
          // the viewport size it´s Large
          res = handleCardsRotation("L", i);
        } else if (vpWidth <= 6 && vpWidth >= 5) {
          // the viewport size it´s Medium
          res = handleCardsRotation("M", i);
        } else {
          // the viewport size it´s Small
          res = handleCardsRotation("S", i);
        }

        console.log("res", res)
        const isLateral = res.isLateral;
        const yRotation = res.yRotation;

        return (
          <Box
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            paddingLeft={isLateral && viewport.width >= 6 ? 0.04 : 0.08}
            margin={0.5}
            key={i}
          >
            {/* <group> */}
              <mesh rotation={[0, yRotation, 0]} position={[0.5, -0.5, 0]} material={bottleMaterial}  >
                <planeBufferGeometry args={[1, 1.4]} />
                <meshBasicMaterial
                  map={cardTexture}
                  opacity={0.46}
                  transparent
                />
              </mesh>
              <Box height={0.1} flexDirection="column" padding={0}>
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
              <Box marginTop={0.1} height={0.5}>
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
              <Box height={0.2} flexDirection="column" padding={0.1}>
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
            {/* </group> */}
          </Box>
        );
      })}
    </Box>
  );
}
