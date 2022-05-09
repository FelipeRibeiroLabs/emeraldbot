import React from "react";
import { Flex, Box, useReflow } from "@react-three/flex";
import Text from "./Text";
import { Composition } from "./Composition";

export default function DescriptionComponent({ vpWidth }) {
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
            Keep going down
          </Text>
        </Box>
        <Box margin={0.1}>
          <Text
            fontSize={0.2}
            letterSpacing={0.1}
            maxWidth={vpWidth * 0.8}
            textAlign="center"
          >
            and discover all the features!
          </Text>
        </Box>
      </Box>
    </group>
  );
}
