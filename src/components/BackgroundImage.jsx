import React from 'react'
import {useLoader } from "@react-three/fiber"
import * as THREE from "three"

export default function BackgroundImage() {
    const cardTexture = useLoader(THREE.TextureLoader, "/card-1.png");

  return (
    <mesh rotation={[0, 0, 0]} position={[0.5, -0.5, -100]}>
                <planeBufferGeometry args={[10, 10]} />
                <meshBasicMaterial
                  map={cardTexture}
                  opacity={0.46}
                  transparent
                />
              </mesh>
  )
}
