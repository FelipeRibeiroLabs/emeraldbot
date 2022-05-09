import React from 'react'
import { Flex, Box, useReflow } from "@react-three/flex";
import Text from "./Text";

export default function HeroComponent({vpWidth}) {
  return (

    <group position-z={-0.3}>
    {/* <Box
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
      width="100%"
      marginTop={0.3}
      marginBottom={0.1}
    >
      {/* <Box marginLeft={0.3}>
        <Text fontSize={0.4} maxWidth={1} textAlign="center">
          Flexing some Layout
        </Text>
      </Box> */}
    
    <Box
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="flex-end"
      width="100%"
      height="80%"
      marginTop={0.1}
      marginBottom={0.5}
    >
      <Box marginLeft={vpWidth > 5 ? 0.3: 0}>
        <Text bold={true} fontSize={vpWidth > 5 ? 0.5: 0.2} maxWidth={vpWidth} textAlign="left">
          Emerald Bot
        </Text>
      </Box>
    </Box>
  </group>
)
}
