import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Html,
  Loader,
  Image,
  useAspect
} from "@react-three/drei";
import EmeraldBot from "./components/EmeraldBot.jsx";
import Navbar from "./components/Navbar";
import styled from "styled-components"
import {Section2} from "./sections/Section2"
import { Section1 } from "./sections/Section1.js";
import { Section3 } from "./sections/Section3.js";
import { Section4 } from "./sections/Section4.js";
import { Section5 } from "./sections/Section5.js";


export default function App() {
  return (
    <>
      <Canvas id="canvas" gl={{ antialias: false }} dpr={[1, 2]}>
        
        <Suspense fallback={null}>
        
          <ScrollControls damping={2} pages={10} style={{ width: "110vw" }}>
            
            <EmeraldBot scale={0.01} position={[10, 10, 10]} />
            

            <Scroll html>
              <Navbar />
              <Section1 />
              <Section2 />
              <Section3 />
              <Section4 />
              <Section5 />
            </Scroll>
            
          </ScrollControls>
          <Preload />

        </Suspense>

      </Canvas>
      <Loader />
    </>
  );
}