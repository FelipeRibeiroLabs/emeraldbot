import React, {
    Suspense,
    forwardRef,
    useEffect,
    useRef,
    useState,
    useCallback,
    useLayoutEffect,
  } from "react";import { Flex, Box, useFlexSize } from "@react-three/flex";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";

import Text from "./Text"
import CardsComponent from "./CardsComponent"

function HeightReporter({ onReflow }) {
    const size = useFlexSize();
    useLayoutEffect(() => onReflow && onReflow(...size), [onReflow, size]);
    return null;
  }


export default function Page({ text, tag, images, textScaleFactor, onReflow, left = false }) {
    const cards = useLoader(THREE.TextureLoader, images);
    const { viewport } = useThree();
    const boxProps = {
      centerAnchor: true,
      grow: 1,
      marginTop: 1,
      marginLeft: left * 1,
      marginRight: !left * 1,
      width: "auto",
      height: "auto",
      minWidth: 4,
      minHeight: 6,
      maxWidth: 4,
      maxHeight: 6,
    };
  
    const cardProps = {
      cards,
      viewport,
      boxProps,
      firstRow: true
    }
  
    const cardProps2 = {
      cards,
      viewport,
      boxProps,
      firstRow: false
    }
  
    return (
      <Box
        dir="column"
        // align={left ? "flex-start" : "flex-end"}
        align={"center"}
        justify="flex-start"
        width="100%"
        height="auto"
        minHeight="100%"
      >
        <HeightReporter onReflow={onReflow} />
  
        <Box marginLeft={1.5} marginRight={1.5} marginTop={2}>
          <Text
            position={[left ? 1 : -1, 0.5, 1]}
            fontSize={textScaleFactor}
            lineHeight={1}
            letterSpacing={-0.05}
            maxWidth={(viewport.width / 4) * 3}
          >
            <meshBasicMaterial color="#cccccc" toneMapped={false} />
          </Text>
        </Box>
        <Box
        // TODO : fix this 
          marginLeft={left ? 1.5 : 1}
          marginRight={left ? 1 : 1.5}
          marginBottom={1}
        >
          <Text
            bold
            position-z={0.5}
            textAlign={left ? "left" : "right"}
            fontSize={1.5 * textScaleFactor}
            lineHeight={1}
            letterSpacing={-0.05}
            color="white"
            maxWidth={(viewport.width / 4) * 3}
          >
            {text}
          </Text>
        </Box>
        <CardsComponent {...cardProps}  />
        <CardsComponent {...cardProps2}  />
      </Box>
    );
  }
