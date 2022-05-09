import { useRef } from "react";
import {
  useScroll,
  useGLTF,
  useAnimations,
  useAspect,
  Html,
  Image,
  ScrollControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { forwardRef } from "react";

import styled from "styled-components";

export function Composition() {
  const scroll = useScroll();
  const group = useRef();
  const html = useRef();

  useFrame((state, delta) => {
    const offset = 1 - scroll.offset;

    //BOT ANIMATIONS
    const model = group.current;
    model.rotation.y = offset * 30.7;
    model.position.y = (-37 + offset * 45) / 5;

    //HTML ANIMATIONS
    const value = -11000 + offset * 11600;
    const text = html.current;
    text.style.left = `${value}px`;
  });

  return (
    <>
      {/* <Bot ref={group} scale={0.01} position={[10, 10, 10]}/> */}
      <ScrollControls>
        <Text position={[4, -1, 0]} ref={html} />
      </ScrollControls>
    </>
  );
}

const Bot = forwardRef((props, ref) => {
  const size = useAspect(1800, 1000);
  const { scene, nodes, animations, materials } = useGLTF("/emerald.glb");
  const { actions } = useAnimations(animations, scene);

  return (
    <>
      <Image url="/Home.png" scale={size} transparent opacity={0.3} />
      <group ref={ref} position={[2, -4, -8]} rotation={[0, 2, 0]} scale={8}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.emeraldbot_1.geometry}
          material-color={"#00FFD9"}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.emeraldbot_2.geometry}
          material={materials["flowbot:phong2"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.emeraldbot_3.geometry}
          material={materials["flowbot:phong3"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.emeraldbot_4.geometry}
          material-color={"#2FD1B9"}
        />
      </group>
    </>
  );
});

useGLTF.preload("/emerald.glb");

const Text = forwardRef((props, ref) => {
  return (
    <Html
      ref={ref}
      style={{ width: "6000px", position: "relative", left: "20px" }}
      {...props}
    >
      <H2Wrapper style={{ width: "100%" }}>
        Keep going down and discover all the features!
      </H2Wrapper>
    </Html>
  );
});

const H2Wrapper = styled.h2`
  -webkit-text-stroke: 1.4px white;
  -webkit-text-fill-color: transparent;
  font-weight: 100;
  font-size: 6rem;
`;
