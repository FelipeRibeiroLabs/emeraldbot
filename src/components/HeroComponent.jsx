import React from "react";
import { Flex, Box, useReflow } from "@react-three/flex";
import Text from "./Text";
import TextStroke from "./TextStroke";
import { RoundedBox, Html } from "@react-three/drei";

export default function HeroComponent({ vpWidth }) {
  const subtitleStyle = {
    width: "100px",
    borderRadius: "20px",
    borderColor: "#6FFFE9",
    backgroundColor: "#6FFFE9",
  };

  return (
    <group position-z={-0.3}>
      <Box
        flexDirection="column"
        alignItems="flex-start"
        justifyContent="flex-end"
        width={"100%"}
        height={vpWidth > 5 ? "90%" : "100%"}
        marginTop={0.1}
        marginBottom={0.5}
      >
        <Box height={1.4} marginLeft={vpWidth > 5 ? 0.3 : 0}>
          <TextStroke
            bold={true}
            fontSize={vpWidth > 5 ? 0.5 : 0.2}
            maxWidth={vpWidth}
            textAlign="left"
          >
            EMERALD
          </TextStroke>
          <Box marginTop={vpWidth > 5 ? 0.4 : 0.2}>
            <TextStroke
              bold={true}
              fontSize={vpWidth > 5 ? 0.5 : 0.2}
              maxWidth={vpWidth}
              textAlign="left"
              marginTop={1}
            >
              BOT{" "}
            </TextStroke>
          </Box>

          <Html>
            <button
              style={{
                textAlign: "center",
                width: vpWidth > 5 ? "24vw" : "40vw",
                background: "transparent",
                border: "3px solid #00F5D0",
                borderRadius: "12px",
                marginTop: vpWidth > 5 ? "16.5rem" : "10rem",
              }}
            >
              <h2 style={{ fontSize: vpWidth > 5 ? "2em" : "1em" }}>
                START BUILDING
              </h2>
            </button>
          </Html>
        </Box>
      </Box>
    </group>
  );
}
