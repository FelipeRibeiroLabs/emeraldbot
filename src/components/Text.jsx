import React from 'react'
import { useReflow } from '@react-three/flex'
import { Text as TextImpl } from '@react-three/drei'

export default function Text({yRot = 0,  bold = false, anchorX = 'left', anchorY = 'top', textAlign = 'left', ...props }) {
  const reflow = useReflow()
  const font = bold ? '/Inter-Bold.woff' : '/Inter-Regular.woff'
  return <TextImpl rotation={[0,yRot,0]} color="white" anchorX={anchorX} anchorY={anchorY} textAlign={textAlign} font={font} onSync={reflow} {...props} />
}
