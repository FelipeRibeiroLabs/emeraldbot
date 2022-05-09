import React from "react";
import { Flex, Box, useReflow } from "@react-three/flex";
import Text from "./Text";

export default function FooterComponent({ vpWidth }) {
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
        <Box margin={0.1}>
          <Text
            secondary
            fontSize={vpWidth > 5 ? 2 : 0.04}
            letterSpacing={0.1}
            maxWidth={vpWidth * 0.8}
            textAlign="center"
          >
            CREATED BY EMERALD CITY DAO
          </Text>
        </Box>
      </Box>
    </group>
  );
}
