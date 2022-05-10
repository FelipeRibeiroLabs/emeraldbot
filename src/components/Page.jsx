import React, {
  Suspense,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import {
  useAspect,
  Html,
  TorusKnot,
  Plane,
  Backdrop,
  Environment,
} from "@react-three/drei";
import { Flex, Box, useReflow } from "@react-three/flex";
import * as THREE from "three";

import EmeraldBot from "./EmeraldBot";
import HeroComponent from "./HeroComponent";
import Navbar from "./Navbar";
import DescriptionComponent from "./DescriptionComponent";
import MainCommands from "./MainCommands";
import FloatCommands from "./FloatCommands";
import AccessCommands from "./AccessCommands";
import FooterComponent from "./FooterComponent";

export default function Page({ onChangePages, state }) {
  const group = useRef();
  const { size, viewport } = useThree();
  const [vpWidth, vpHeight] = useAspect(size.width, size.height);
  const vec = new THREE.Vector3();

  useFrame(() =>
    group.current.position.lerp(vec.set(0, state.top / 100, 0), 0.1)
  );

  // handles the height of the whole page
  const handleReflow = useCallback(
    (w, h) => {
      console.log("vpWidth", viewport.width);
      const vw = viewport.width;

      if (vw < 5) {
        console.log("s");
        onChangePages(h / vpHeight / 2.35);
      } else if (vw > 5 && vw < 6) {
        console.log("m");
        onChangePages(h / vpHeight / 2.15);
      } else {
        console.log("l");
        onChangePages(h / vpHeight / 1.8);
      }
    },
    [onChangePages, vpHeight]
  );

  const cardTexture = useLoader(THREE.TextureLoader, "/card-1.png");
  const bgTexture = useLoader(THREE.TextureLoader, "/Home.png");

  const commandsProps = {
    vpWidth,
    viewport,
    cardTexture,
  };

  return (
    <group ref={group}>
      <Environment background near={1} far={1000} resolution={256}>
        <mesh scale={100}>
          <sphereGeometry args={[1, 64, 64]} />
          <meshBasicMaterial map={bgTexture} side={THREE.BackSide} />
        </mesh>
      </Environment>

      <EmeraldBot
        viewHeight={viewport.height}
        // scale={3}
        position={[viewport.width < 6 ? 0 : 0.3, 0, 0.5]}
        offset={group.current}
      />

      <Flex
        flexDirection="column"
        size={[vpWidth, vpHeight, 0]}
        onReflow={handleReflow}
        position={[-vpWidth / 2, vpHeight / 2, 0]}
      >
        <Box marginTop={0.1}>
          {vpWidth > 5 && (
            <Html>
              <Navbar vpWidth={vpWidth} />
            </Html>
          )}
        </Box>
        <HeroComponent vpWidth={vpWidth} />
        <DescriptionComponent vpWidth={vpWidth} />
        <MainCommands {...commandsProps} />
        <FloatCommands {...commandsProps} />
        <AccessCommands {...commandsProps} />
        <FooterComponent />
      </Flex>
    </group>
  );
}
