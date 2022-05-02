import { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image } from '@react-three/drei'
import EmeraldBot from './EmeraldBot'
import state from './infos'
import { Block } from './Block'

function Images() {
  const { width, height } = useThree((state) => state.viewport)
  const data = useScroll()
  const group = useRef()
  

  useFrame(() => {
    // group.current.children[0].material.zoom = 1 + data.range(0, 1 / 3) / 3
    // group.current.children[1].material.zoom = 1 + data.range(0, 1 / 3) / 3
    // group.current.children[2].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 3
    // group.current.children[3].material.zoom = 1 + data.range(1.15 / 3, 1 / 3) / 2
    // group.current.children[4].material.zoom = 1 + data.range(1.25 / 3, 1 / 3) / 1
    // group.current.children[5].material.zoom = 1 + data.range(1.8 / 3, 1 / 3) / 3
    // group.current.children[5].material.grayscale = 1 - data.range(1.6 / 3, 1 / 3)
    // group.current.children[6].material.zoom = 1 + (1 - data.range(2 / 3, 1 / 3)) / 3
  })
  return (
    <group ref={group}>
      {/* <Image position={[-2, 0, 0]} scale={[4, height, 1]} url="/img1.jpeg" /> */}
      {/* <Image position={[2, 0, 1]} scale={3} url="/img6.jpg" />
      <Image position={[-2.3, -height, 2]} scale={[1, 3, 1]} url="/trip2.jpg" />
      <Image position={[-0.6, -height, 3]} scale={[1, 2, 1]} url="/img8.jpg" />
      <Image position={[0.75, -height, 3.5]} scale={1.5} url="/trip4.jpg" />
      <Image position={[0, -height * 1.5, 2.5]} scale={[1.5, 3, 1]} url="/img3.jpg" />
      <Image position={[0, -height * 2 - height / 4, 0]} scale={[width, height / 2, 1]} url="/img7.jpg" /> */}
    </group>
  )
}

export default function App() {

  const scrollArea = useRef();
  
  //state.top = createRef()
  const onScroll = e => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])

  return (
    <>
    <Canvas gl={{ antialias: false }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        
        {/* <ScrollControls pages={6}>
          <EmeraldBot scale={0.05} position={[2, -2, 4]} />
        </ScrollControls>{' '} */}

        <ScrollControls damping={2} pages={10}>
          <EmeraldBot scale={0.01} position={[10, 10, 10]} />
          {/* <EmeraldBot  position={[20, 0, 4]} /> */}
          <Scroll>
            <Images />
          </Scroll>
          <Scroll html>
            <h1 style={{ position: 'absolute', top: '60vh', left: '0.5em' }}>
              EMERALD <br /> BOT
            </h1>
          </Scroll>
        </ScrollControls>
        <Preload />
      </Suspense>
    </Canvas>
    <div ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh`}} />
    </div>
    </>
  )
}
