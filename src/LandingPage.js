import React, {
  Suspense,
  forwardRef,
  useEffect,
  useRef,
  useState,
  useCallback,
  useLayoutEffect,
} from "react";

import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { Flex, Box, useFlexSize } from "@react-three/flex";
import * as THREE from "three";
import state from "./state";
import Text from "./components/Text";
import CardsComponent from "./components/CardsComponent";
import ContentComponent from "./components/ContentComponent";
import Page from "./components/Page";

import {
  Preload,
  ScrollControls,
  Scroll,
  Loader,
  Line,
  useAspect,
  Html,
  Image,
} from "@react-three/drei";

// import { EffectComposer, DepthOfField } from "@react-three/postprocessing";

import Navbar from "./components/Navbar";
// import { Composition } from "./components/Composition.jsx";
// import { Section2 } from "./sections/Section2";
// import { Section1 } from "./sections/Section1.js";
// import { Section3 } from "./sections/Section3.js";
// import { Section4 } from "./sections/Section4.js";
// import { Section5 } from "./sections/Section5.js";
import Footer from "./components/FooterComponent.jsx";
import EmeraldBotCommands from "./pages/EmeraldBotCommands";

// const sizes = {
//   mobileS: "320px",
//   mobileM: "375px",
//   mobileL: "425px",
//   tablet: "768px",
//   laptop: "1024px",
//   laptopL: "1440px",
//   desktop: "2560px",
// };

// export const devices = {
//   mobileS: `(min-width: ${sizes.mobileS})`,
//   mobileM: `(min-width: ${sizes.mobileM})`,
//   mobileL: `(min-width: ${sizes.mobileL})`,
//   tablet: `(min-width: ${sizes.tablet})`,
//   laptop: `(min-width: ${sizes.laptop})`,
//   laptopL: `(min-width: ${sizes.laptopL})`,
//   desktop: `(min-width: ${sizes.desktop})`,
// };

// const divProps = {
//   marginLeft: "2rem",
// };

// const Effects = forwardRef((props, ref) => {
//   return (
//     <EffectComposer>
//       <DepthOfField
//         focusDistance={0.06}
//         focalLength={0.2}
//         bokehScale={2}
//         height={280}
//       />
//     </EffectComposer>
//   );
// });


export default function LandingPage() {
  const scrollArea = useRef();
  const onScroll = (e) => (state.top = e.target.scrollTop);
  // useEffect(() => void onScroll({ target: scrollArea.current }), []);
  const [pages, setPages] = useState(0);
  return (
    <>
      <Canvas
        camera={{ position: [0, 0, 2], zoom: 1 }}
        gl={{
          powerPreference: "high-performance",
          alpha: false,
          antialias: false,
          stencil: false,
          depth: false,
        }}
        onCreated={({ gl }) => gl.setClearColor("black")}
      >
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <ambientLight intensity={0.4} />
        {/* <spotLight
          castShadow
          angle={1.3}
          penumbra={4}
          position={[0, 10, 20]}
          intensity={10}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        /> */}
        <Suspense fallback={null}>
          {/* <ContentComponent onReflow={setPages} state={state} /> */}

          <Page onChangePages={setPages} state={state} />

          <Image
            url="/Home.png"
            position={[0, 0, -2]}
            scale={11}
            transparent
            opacity={0.5}
          />

        </Suspense>
        {/* <Effects /> */}
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${pages * 100}vh` }} />
      </div>
      <Loader />
    </>
  );
}