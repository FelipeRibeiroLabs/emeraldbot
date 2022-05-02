import { Suspense, useEffect, useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Preload, ScrollControls, Scroll, useScroll, Image, useGLTF } from '@react-three/drei'
import EmeraldBot2 from './EmeraldBot2'
import state from './infos'
import { Block, useBlock } from './Block'
import * as THREE from "three"
import "./styles2.css"

function Plane({ color = "white", ...props }) {
  return (
    <mesh {...props}>
      <planeGeometry />
      <meshBasicMaterial color={color} />
    </mesh>
  )
}

function Content({ left, children }) {
  const { contentMaxWidth, canvasWidth, margin } = useBlock()
  const aspect = 1.75
  const alignRight = (canvasWidth - contentMaxWidth - margin) / 2
  return (
    <group position={[alignRight * (left ? -1 : 1), 0, 0]}>
      <Plane scale={[contentMaxWidth, contentMaxWidth / aspect, 1]} color="#ffe2ca" />
      {children}
    </group>
  )
}

function Emerald({ left, children }){
    const group = useRef()
    const {viewportHeight} = useBlock()

    const { nodes, materials } = useGLTF('/emerald.glb')

    const { contentMaxWidth, canvasWidth, margin } = useBlock()
    const alignRight = (canvasWidth - contentMaxWidth - margin) / 2

    useFrame(() => {
      const curTop = state.top.current
      const nextY = (curTop / ((state.pages - 1) * viewportHeight)) * Math.PI
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, nextY, 0.1)
    })

    return (
        // <group ref={group} position={[16, 8.18, -10]} rotation={[-Math.PI / 2, 0, 0]} scale={10}>
        <group ref={group} position={[alignRight * (left ? -1 : 1), 0, 0]} rotation={[0, 0, 0]} scale={8}>
          <mesh castShadow receiveShadow geometry={nodes.emeraldbot_1.geometry} material={materials['flowbot:phong1']} />
          <mesh castShadow receiveShadow geometry={nodes.emeraldbot_2.geometry} material={materials['flowbot:phong2']} />
          <mesh castShadow receiveShadow geometry={nodes.emeraldbot_3.geometry} material={materials['flowbot:phong3']} />
          <mesh castShadow receiveShadow geometry={nodes.emeraldbot_4.geometry} material={materials['flowbot:typeBlinn1']} />
          {children}
        </group>
    )
}

useGLTF.preload('/emerald.glb')

export default function Home() {

  const scrollArea = useRef();
  
  const onScroll = e => (state.top.current = e.target.scrollTop)
  useEffect(() => void onScroll({ target: scrollArea.current }), [])


  return (
    <>
    <Canvas linear orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
        
        <Emerald scale={0.01} position={[10, 10, 10]}/>
        <Block factor={1.5} offset={0}>
            {/* <EmeraldBot2 scale={0.01} position={[10, 10, 10]}/> */}
            {/* <Content /> */}
        </Block>

        <Block factor={2} offset={1}>
            {/* <EmeraldBot2 scale={0.01} position={[10, 10, 10]}/> */}
            <Content />
        </Block>

        <Block factor={2.5} offset={2}>
            {/* <EmeraldBot2 scale={0.01} position={[10, 10, 10]}/> */}
            <Content />
        </Block>

        <Block factor={1.5} offset={3}>
            {/* <EmeraldBot2 scale={0.01} position={[10, 10, 10]}/> */}
            <Content />
        </Block>
    </Canvas>

    <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ height: `${state.pages * 100}vh`}} />
    </div>
    </>
  )
}
