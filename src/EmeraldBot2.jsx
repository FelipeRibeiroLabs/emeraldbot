/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import { useRef } from 'react'
import {  useScroll, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from "three"
import { useBlock } from './Block'
import state from "./infos"

export default function Model() {
  
    const group = useRef()
    const {viewportHeight} = useBlock()

    const { nodes, materials } = useGLTF('/emerald.glb')

    useFrame(() => {
      const curTop = state.top.current
      const nextY = (curTop / ((state.pages - 1) * viewportHeight)) * Math.PI
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, nextY, 0.1)
    })

    return (
        // <group ref={group} position={[16, 8.18, -10]} rotation={[-Math.PI / 2, 0, 0]} scale={10}>
        <group ref={group} position={[16, -2.18, -10]} rotation={[0, 0, 0]} scale={8}>
          <mesh castShadow receiveShadow geometry={nodes.emeraldbot_1.geometry} material={materials['flowbot:phong1']} />
          <mesh castShadow receiveShadow geometry={nodes.emeraldbot_2.geometry} material={materials['flowbot:phong2']} />
          <mesh castShadow receiveShadow geometry={nodes.emeraldbot_3.geometry} material={materials['flowbot:phong3']} />
          <mesh castShadow receiveShadow geometry={nodes.emeraldbot_4.geometry} material={materials['flowbot:typeBlinn1']} />
        </group>
    )
}

useGLTF.preload('/emerald.glb')
