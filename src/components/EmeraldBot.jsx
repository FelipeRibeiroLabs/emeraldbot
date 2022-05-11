

import { useRef } from "react";
import {
  useScroll,
  useGLTF,
  useAnimations,
  useAspect,
  Ring,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { TextAnimation } from "./TextAnimation";

export default function Model(props) {
  const group = useRef();
  const bgRef = useRef();
  const imgRef = useRef();
  const size = useAspect(1800, 1000);

  // This hook gives you offets, ranges and other useful things
  const scroll = useScroll();
  const { scene, nodes, animations, materials } = useGLTF("/emerald.glb");
  const { actions } = useAnimations(animations, scene);

  useFrame((state, delta) => {
    // The offset is between 0 and 1, you can apply it to your models any way you like
    // const offset = 1 - props.offset.position.y
    const offset = 0.1 - props.offset.position.y;

    const model = group.current;
    const bg = bgRef.current;

    model.rotation.y = offset / 3;
    model.position.y = (offset / props.viewHeight) * 3.2;
    bg.position.y = (offset / props.viewHeight) * 3.2 + 1;
  });

  return (
    <>
      <group position-y={3} position-z={-1} ref={bgRef}>
        <Ring
         
          args={[20, 19.9, 50]}
          scale={0.1}
          rotation={[0, Math.PI / 1, 0]}
        >
          <meshBasicMaterial opacity={0.1} transparent />
        </Ring>
        <Ring
    
          args={[20, 19.8, 50]}
          scale={0.13}
          rotation={[0, Math.PI / 1, 0]}
        >
          <meshBasicMaterial opacity={0.1} transparent />
        </Ring>
        <Ring
      
          args={[20, 19.7, 50]}
          scale={0.16}
          rotation={[0, Math.PI / 1, 0]}
        >
          <meshBasicMaterial opacity={0.1} transparent />
        </Ring>
      </group>

      <group
        ref={group}
        position={props.position}
        rotation={[0, 2, 0]}
        scale={props.scale}
        
      >
        <mesh
          receiveShadow
          geometry={nodes.emeraldbot_1.geometry}
          material-color={"#00FFD9"}
        />
        <mesh
          receiveShadow
          geometry={nodes.emeraldbot_2.geometry}
          material={materials["flowbot:phong2"]}
        />
        <mesh
          receiveShadow
          geometry={nodes.emeraldbot_3.geometry}
          material={materials["flowbot:phong3"]}
        />
        <mesh
          receiveShadow
          geometry={nodes.emeraldbot_4.geometry}
          material-color={"#2FD1B9"}
        />
      </group>
    </>
  );
}

