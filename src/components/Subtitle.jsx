import React from 'react'
import { Flex, Box, useReflow } from "@react-three/flex";
import Text from "./Text";

export default function Subtitle({desktop, vpWidth, }) {
    if (desktop) {
        return (
          <Box margin={0.1}>
            <Text
              fontSize={desktop ? 0.1 : 0.05}
              letterSpacing={0.1}
              maxWidth={vpWidth * 0.8}
              textAlign="center"
            >
              We are the first DAO on the Flow Blockchain
            </Text>
          </Box>
        );
      } else {
        return (
          <>
            <Box marginTop={0.1}>
              <Text
                fontSize={desktop ? 0.1 : 0.05}
                letterSpacing={0.1}
                maxWidth={vpWidth * 0.8}
                textAlign="center"
              >
                We are the first DAO
              </Text>
            </Box>
            <Box margin={0.1}>
              <Text
                fontSize={desktop ? 0.1 : 0.05}
                letterSpacing={0.1}
                maxWidth={vpWidth * 0.8}
                textAlign="center"
              >
                on the Flow Blockchain
              </Text>
            </Box>
          </>
        );
      }
}
