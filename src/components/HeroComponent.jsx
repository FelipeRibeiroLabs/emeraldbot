import React from "react";
import { Flex, Box, useReflow } from "@react-three/flex";
import Text from "./Text";
import { RoundedBox, Html } from "@react-three/drei";

export default function HeroComponent({ vpWidth }) {

  console.log("vpWidth2", vpWidth)
  const subtitleStyle = {
    width: "100px",
    borderRadius: "20px",
    borderColor: "#6FFFE9",
    backgroundColor: "#6FFFE9",
  };

  let marginTop;

  if (vpWidth > 6) {
    marginTop = "12rem";
  } else if (vpWidth <= 6 && vpWidth >= 5) {
    marginTop = "14.5rem";
  } else {
    marginTop = "8rem";
  }

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
          <Text
            bold={true}
            fontSize={vpWidth > 5 ? 0.5 : 0.2}
            maxWidth={vpWidth}
            textAlign="left"
          >
            EMERALD
          </Text>
          <Box marginTop={vpWidth > 5 ? 0.4 : 0.2}>
            <Text
              bold={true}
              fontSize={vpWidth > 5 ? 0.5 : 0.2}
              maxWidth={vpWidth}
              textAlign="left"
              marginTop={1}
            >
              BOT
            </Text>
          </Box>

          <Html>
            <button
              style={{
                textAlign: "center",
                width: vpWidth > 5 ? "24vw" : "36vw",
                // height: vpWidth > 5 ? "6vw" : "8vw",
                // background: "transparent",
                border: "3px solid #00F5D0",
                borderRadius: "12px",
                marginTop,
                cursor: "pointer",
                fontSize: vpWidth > 5 ? "2em" : "1em"
              }}
            >
              {/* <span style={{  }}> */}
                START BUILDING
              {/* </span> */}
            </button>
          </Html>
        </Box>
      </Box>
    </group>
  );
}
