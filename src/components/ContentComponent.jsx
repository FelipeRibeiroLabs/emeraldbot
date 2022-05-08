import React, {
    Suspense,
    forwardRef,
    useEffect,
    useRef,
    useState,
    useCallback,
    useLayoutEffect,
  } from "react";
  import * as THREE from "three";
import { Flex, Box, useFlexSize } from "@react-three/flex";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";

import EmeraldBot from "./EmeraldBot"
import PageComponent from "./PageComponent"
import Page from "./Page"
import Text from "./Text"

import {
    Line,
  } from "@react-three/drei";


export default function Content({ onReflow, state }) {

    const group = useRef();
    const { viewport, size } = useThree();
    const vec = new THREE.Vector3();
    const pageLerp = useRef(state.top / size.height);
  
    useFrame(() => {
      const page = (pageLerp.current = THREE.MathUtils.lerp(
        pageLerp.current,
        state.top / size.height,
        0.15
      ));
      const y = page * viewport.height;
      const sticky = state.threshold * viewport.height;
      group.current.position.lerp(
        vec.set(
          0,
          page < state.threshold ? y : sticky,
          0
          // page < state.threshold ? 0 : page * 1.25
        ),
        0.15
      );
    });
  
    const handleReflow = useCallback(
      (w, h) => onReflow((state.pages = h / viewport.height + 5.5)),
      [onReflow, viewport.height]
    );
    const sizesRef = useRef([]);
    // const scale = Math.min(1, viewport.width / 16);
    const scale = Math.min(1, viewport.width / 8);
  
    return (
      <group ref={group}>
        <EmeraldBot
          viewHeight={viewport.height}
          scale={0.01}
          position={[10, 10, 10]}
          offset={group.current}
        />
  
        <Flex
          dir="column"
          position={[-viewport.width / 2, viewport.height / 2, 0]}
          size={[viewport.width, viewport.height, 0]}
          onReflow={handleReflow}
        >
          {/* // Hero component */}
          <Box
            dir="row"
            width="100%"
            paddingLeft={1.4}
            paddingBottom={3}
            height="100%"
            align="end"
            justify="flex-start"
          >
            <Box dir="column" centerAnchor>
              <Text
                font="/Poppins-ExtraBold.ttf"
                position-z={0.5}
                anchorX="center"
                anchorY="middle"
                fontSize={2.2 * scale}
                lineHeight={1}
                letterSpacing={-0.05}
                color="white"
                maxWidth={(viewport.width / 6) * 3}
              >
                EMERALD BOT
              </Text>
  
              {/* <Html
                as="div" // Wrapping element (default: 'div')
                wrapperClass // The className of the wrapping element (default: undefined)
                // distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
                {...divProps} // All HTMLDivElement props are valid
              >
                <button>Start building</button>
              </Html> */}
            </Box>
          </Box>
  
          {/* // sections content */}
          {state.content.map((props, index) => (
            <PageComponent
              key={index}
              left={!(index % 2)}
              textScaleFactor={scale}
              onReflow={(w, h) => {
                sizesRef.current[index] = h;
                // handle  max scroll
                state.threshold = Math.max(
                  3.8,
                  (3.8 / (15.8 * 3)) *
                    sizesRef.current.reduce((acc, e) => acc + e, 0)
                );
              }}
              {...props}
            />
                    //   <Page onChangePages={setPages} />

          ))}
  
          {/* // footer */}
          <Box
            dir="row"
            width="100%"
            height="100%"
            align="center"
            justify="center"
          >
            <Box centerAnchor>
              {state.lines.map((props, index) => (
                <Line key={index} {...props} />
              ))}
              <Text
                bold
                position-z={0.5}
                anchorX="center"
                anchorY="middle"
                fontSize={1.5 * scale}
                lineHeight={1}
                letterSpacing={-0.05}
                color="white"
                maxWidth={(viewport.width / 4) * 3}
              >
                {state.depthbox[0].text}
              </Text>
            </Box>
          </Box>
        </Flex>
      </group>
    );
  }