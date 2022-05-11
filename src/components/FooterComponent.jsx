import React from "react";
import { Flex, Box, useReflow } from "@react-three/flex";
import { Html } from "@react-three/drei";
import Text from "./Text";
import * as THREE from "three";

export default function FooterComponent({ vpWidth }) {
  const bottleMaterial = new THREE.MeshPhysicalMaterial({
    color: "#574E4E",
    transmission: 1,
    roughness: 0.35,
    thickness: 500,
    envMapIntensity: 4,
  });
  const desktop = vpWidth > 5;

  return (
    <group position-z={0.4}>
    
      <Box
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        width="100%"
        marginTop={0.8}
        marginBottom={1}
      >
          <mesh
          rotation={[0, 0, 0]}
          position={[0.7, desktop ? -0.6 : - 1.2, 0]}
          material={bottleMaterial}
        >
          <planeBufferGeometry args={[9, desktop ? 2 : 3]} />
          <meshBasicMaterial opacity={0.46} transparent />
        </mesh>
        <Box margin={0.1}>
          <Text
            fontSize={0.2}
            letterSpacing={0.1}
            maxWidth={vpWidth * 0.8}
            textAlign="center"
          >
            Join Us!
          </Text>
        </Box>
        <Box
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="8%"
        >
          <Html>
            <main style={{ width: "12rem" }}>
              <a href="https://discord.com/invite/emeraldcity" style={{ color: "#11F6D4" }}>
                EMERALD CITY DAO
              </a>
            </main>
          </Html>
        </Box>
      </Box>
    </group>
  );
}
