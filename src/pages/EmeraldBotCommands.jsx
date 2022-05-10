import React, {Suspense, useRef, useCallback} from "react";
  
import { Canvas, useThree, useFrame, useLoader } from "@react-three/fiber";
import { useAspect, Html } from "@react-three/drei";
import * as THREE from "three";

import state from "../state";

import Navbar from "../components/Navbar";
import EmeraldBot from '../components/EmeraldBot'
import FooterComponent from "../components/FooterComponent";
import DescriptionComponent from '../components/DescriptionComponent'
  
  export default function EmeraldBotCommands({ onChangePages, state }) {
    const group = useRef();
    const { size, viewport } = useThree();

    return (
          <div>
            <Navbar />
          </div>
    );
  }
  