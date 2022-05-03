/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { Suspense, useEffect, useLayoutEffect, useRef } from 'react'
import { ScrollControls, Sky, useScroll, useGLTF, useAnimations, useAspect, Image } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { useBlock } from './Block'

export default function Model(props) {
  const group = useRef()
  const {viewportHeight} = useBlock()
  const size = useAspect(1800, 1000)

  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll()
  const { scene, nodes, animations, materials } = useGLTF('/emerald.glb')
  const { actions } = useAnimations(animations, scene)
  // useLayoutEffect(() => Object.values(nodes).forEach((node) => (node.receiveShadow = node.castShadow = true)))
  // useEffect(() => void (actions['Take 001'].play().paused = true), [actions])
  useFrame((state, delta) => {
    // The offset is between 0 and 1, you can apply it to your models any way you like
    
    
    // const offset = scroll.offset

    const offset = 1 - scroll.offset



    // state.camera.position.set(Math.sin(offset) * -10, Math.atan(offset * Math.PI * 2) * 5, Math.cos((offset * Math.PI) / 3) * -10)
    // state.camera.lookAt(0, 0, 0)
    console.log('offset', offset)
    console.log('scrolloffset', scroll.offset)
    console.log('props position', props.position[0])
    console.log('group position', group.current.position.x)
    
    const model = group.current;
    // model.position = 20
    model.rotation.y = offset * 30.7
    // model.position.y = -37 + (offset * 20);
    
    // model.position.y -= offset / 10
    model.position.y = (-37 + (offset * 45)) / 5
    
  })

  return (
        // <group ref={group} position={[16, 8.18, -10]} rotation={[-Math.PI / 2, 0, 0]} scale={10}>
        <>
        <Image url="/Home.png" 
        // position={[0,0,-3]}
        scale={size}
          transparent
          opacity={0.5} 
        />
         <group ref={group} position={[2, -4, -8]} rotation={[0, 2, 0]} scale={8}>
          <mesh castShadow receiveShadow geometry={nodes.emeraldbot_1.geometry} material={materials['flowbot:phong1']} />
          <mesh castShadow receiveShadow geometry={nodes.emeraldbot_2.geometry} material={materials['flowbot:phong2']} />
          <mesh castShadow receiveShadow geometry={nodes.emeraldbot_3.geometry} material={materials['flowbot:phong3']} />
          <mesh castShadow receiveShadow geometry={nodes.emeraldbot_4.geometry} material={materials['flowbot:typeBlinn1']} />
        </group>
        </>
       
  )
}

useGLTF.preload('/emerald.glb')