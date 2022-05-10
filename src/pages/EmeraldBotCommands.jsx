import React, {Suspense, useRef, useCallback} from "react";
  
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { useAspect, Html } from "@react-three/drei";
import { Flex, Box, useReflow } from "@react-three/flex";
import * as THREE from "three";


import state from "../state";

import { Loader, Image,} from "@react-three/drei";

import Navbar from "../components/Navbar";
import EmeraldBot from '../components/EmeraldBot'
import FooterComponent from "../components/FooterComponent";
  
  export default function EmeraldBotCommands({ onChangePages, state }) {
    
    const group = useRef();
    
    const scrollArea = useRef();
    const onScroll = (e) => (state.top = e.target.scrollTop);

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

    
//   const cardTexture = useLoader(THREE.TextureLoader, "/card-1.png");

//   const commandsProps = {
//     vpWidth,
//     viewport,
//     cardTexture,
//   };

    return (
      <>

        <group ref={group}>
  
            <EmeraldBot
            viewHeight={viewport.height}
            scale={3}
            position={[viewport.width < 6 ? 0 : 2, 0, -3]}
            offset={group.current}
            />

            <Flex
            flexDirection="column"
            size={[vpWidth, vpHeight, 0]}
            onReflow={handleReflow}
            position={[-vpWidth / 2, vpHeight / 2, 0]}
            >

            <Box marginTop={0.1}>
            </Box>
            <Html>
                <Navbar />
                <div style={{height: '200vh'}}>
                <h1>Teste</h1>
                </div>
            </Html>
            <FooterComponent />
            </Flex>
        </group>
      </>
    );
  }
  