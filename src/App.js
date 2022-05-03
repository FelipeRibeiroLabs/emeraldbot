import { Suspense, useEffect, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Preload,
  ScrollControls,
  Scroll,
  useScroll,
  Html,
} from "@react-three/drei";
import EmeraldBot from "./EmeraldBot";
import state from "./infos";
import { Block } from "./Block";

function Content() {
  const { width, height } = useThree((state) => state.viewport);
  const data = useScroll();
  const group = useRef();

  const page1Props = {
    position: [-5, -height + 1, 1],
  };

  const page2Props = {
    position: [-width / 2, -height * 1.7, 0],
  };
  const div2Props = {
    position: "relative",
    width: "100vw",
  };

  const cardLeft = {
    position: "absolute",
    left: "-3rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "24rem",
    borderRadius: "1rem",
    width: "46vw",
    transformStyle: "preserve-3d",
    webkitTransform: "perspective(500px) rotateY(12deg) scale(0.5)",
    mozTransform: "perspective(500px) rotateY(12deg) scale(0.5)",
    transform: "perspective(500px) rotateY(12deg) scale(0.5)",
    padding: "4%",
    // background: "rgba(255, 255, 255, 0.05)",
    background:
      // "radial-gradient(172.02% 300.23% at 94.69% 2.56%, rgba(77, 89, 199, 0.3) 0%, rgba(122, 114, 114, 0.05) 6%)",
      "radial-gradient(100% 204.51% at 100% 0%, rgba(17, 246, 212, 0.145) 0%, rgba(255, 255, 255, 0.005) 50%) ",
    boxShadow: "inset -2px 0px 2px -2px #11F6D4, inset 2px 4px 4px rgba(0, 0, 0, 0.3), inset 0px 0px 6px 1px rgba(17, 246, 212, 0.5)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    color: "white",
  };
  const cardCenter = {
    position: "absolute",
    left: "0",
    right: "0",
    marginLeft: "auto",
    marginRight: "auto",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "24rem",
    borderRadius: "1rem",
    width: "46vw",
    backgroundColor: "black",
    webkitTransform: "  scale(0.5) ",
    mozTransform: "  scale(0.5)",
    transform: "  scale(0.5)",
    padding: "4%",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    color: "white",
  };
  const cardRight = {
    position: "absolute",
    right: "-20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "24rem",
    borderRadius: "1rem",
    width: "46vw",
    backgroundColor: "black",
    transformStyle: "preserve-3d",
    webkitTransform: "perspective(500px) rotateY(-12deg) scale(0.5)",
    mozTransform: "perspective(500px) rotateY(-12deg) scale(0.5)",
    transform: "perspective(500px) rotateY(-12deg) scale(0.5)",
    padding: "4%",
    background: "rgba(255, 255, 255, 0.05)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    color: "white",
  };

  useFrame(() => {});
  return (
    <group ref={group}>
      <Scroll>
        <Html
          as="div" // Wrapping element (default: 'div')
          // wrapperClass // The className of the wrapping element (default: undefined)
          // prepend // Project content behind the canvas (default: false)
          // center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
          // fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
          // distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
          zIndexRange={[0, 0]} // Z-order range (default=[16777271, 0])
          // portal={domnodeRef} // Reference to target container (default=undefined)
          // transform // If true, applies matrix3d transformations (default=false)
          // sprite // Renders as sprite, but only in transform mode (default=false)
          // occlude={[ref]} // Can be true or a Ref<Object3D>[], true occludes the entire scene (default: undefined)
          // onOcclude={(visible) => null} // Callback when the visibility changes (default: undefined)
          {...page1Props} // All THREE.Group props are valid
          // {...divProps} // All HTMLDivElement props are valid
        >
          <h2>
            Short Description of our beloved <br /> bot
          </h2>
        </Html>
        <Html
          as="div" // Wrapping element (default: 'div')
          // wrapperClass="cards-container" // The className of the wrapping element (default: undefined)
          prepend // Project content behind the canvas (default: false)
          // center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
          // fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
          // distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
          zIndexRange={[0, 0]} // Z-order range (default=[16777271, 0])
          // portal={domnodeRef} // Reference to target container (default=undefined)
          // transform // If true, applies matrix3d transformations (default=false)
          // sprite // Renders as sprite, but only in transform mode (default=false)
          // occlude={[ref]} // Can be true or a Ref<Object3D>[], true occludes the entire scene (default: undefined)
          // onOcclude={(visible) => null} // Callback when the visibility changes (default: undefined)
          {...page2Props} // All THREE.Group props are valid
          // {...div2Props} // All HTMLDivElement props are valid
        >
          <main style={div2Props}>
            <div style={cardLeft}>
              <p style={{ textAlign: "center", fontSize: "2rem" }}>
                Here we will have the content of the card
              </p>
            </div>
            <div style={cardCenter}>
              <p style={{ textAlign: "center", fontSize: "2rem" }}>
                Here we will have the content of the card
              </p>
            </div>
            <div style={cardRight}>
              <p style={{ textAlign: "center", fontSize: "2rem" }}>
                Here we will have the content of the card
              </p>{" "}
            </div>
          </main>
        </Html>
      </Scroll>
    </group>
  );
}

export default function App() {
  const scrollArea = useRef();

  //state.top = createRef()
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
    <>
      <Canvas id="canvas" gl={{ antialias: false }} dpr={[1, 2]}>
        <Suspense fallback={null}>
          {/* <ScrollControls pages={6}>
          <EmeraldBot scale={0.05} position={[2, -2, 4]} />
        </ScrollControls>{' '} */}

          <ScrollControls damping={2} pages={10} style={{ width: "110vw" }}>
            <EmeraldBot scale={0.01} position={[10, 10, 10]} />
            {/* <EmeraldBot  position={[20, 0, 4]} /> */}
            {/* <Scroll  > */}
            {/* <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="/img1.jpeg" /> */}
            <Content />
            {/* </Scroll> */}
            <Scroll html>
              <h1 style={{ position: "absolute", top: "60vh", left: "0.5em" }}>
                EMERALD <br /> BOT
              </h1>
            </Scroll>
          </ScrollControls>
          <Preload />
        </Suspense>
      </Canvas>
      <div ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh` }} />
      </div>
    </>
  );
}

{
  /* <Image position={[2, 0, 1]} scale={3} url="/img6.jpg" />
      <Image position={[-2.3, -height, 2]} scale={[1, 3, 1]} url="/trip2.jpg" />
      <Image position={[-0.6, -height, 3]} scale={[1, 2, 1]} url="/img8.jpg" />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url="/trip4.jpg" />
      <Image position={[0, -height * 1.5, 2.5]} scale={[1.5, 3, 1]} url="/img3.jpg" />
      <Image position={[0, -height * 2 - height / 4, 0]} scale={[width, height / 2, 1]} url="/img7.jpg" /> */
}
