import React, {
    Suspense,
    useRef,
    useState,
  } from "react";
  
  import {Canvas} from "@react-three/fiber";
  import state from "../state";
  import Page from "../components/Page";
  
  import {Loader} from "@react-three/drei";
import Navbar from "../components/Navbar";
  
  
  export default function App() {
    const scrollArea = useRef();
    const onScroll = (e) => (state.top = e.target.scrollTop);
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
          <Suspense fallback={null}>
            <Page onChangePages={setPages} state={state} />
          </Suspense>
        </Canvas>
        <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
          <div style={{ height: `${pages * 100}vh` }} />
        </div>
        <Loader />
      </>
    );
  }
  