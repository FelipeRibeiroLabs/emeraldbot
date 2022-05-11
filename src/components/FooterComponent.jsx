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
          position={[0.7, desktop ? -0.6 : -1.2, 0]}
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
            Emerald City
          </Text>
        </Box>
        <Box margin={0.1}>
          <Text
            fontSize={0.1}
            letterSpacing={0.1}
            maxWidth={vpWidth * 0.8}
            textAlign="center"
          >
            We are the first DAO on the Flow Blockchain
          </Text>
        </Box>
        <Box margin={0}>
          <Text
            fontSize={0.1}
            letterSpacing={0.1}
            maxWidth={vpWidth * 0.8}
            textAlign="center"
          >
            Educate, Build and Govern{" "}
          </Text>
        </Box>
        <Box
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          width="8%"
          marginTop={0.1}
        >
          <Html>
            <main style={{ width: "12rem" }}>
              <button
                style={{
                  textAlign: "center",
                  // width: vpWidth > 5 ? "24vw" : "36vw",
                  // height: vpWidth > 5 ? "6vw" : "8vw",
                  // background: "transparent",
                  border: "3px solid #00F5D0",
                  borderRadius: "12px",
                  // marginTop,
                  cursor: "pointer",
                  fontSize: vpWidth > 5 ? "2em" : "1em",
                }}
              >
                {/* <span style={{  }}> */}
                {/* </span> */}
                JOIN DAO
              </button>
            </main>
          </Html>
        </Box>
      </Box>
    </group>
  );
}
