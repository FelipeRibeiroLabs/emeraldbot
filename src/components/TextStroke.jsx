import React from "react";
import { useReflow } from "@react-three/flex";
import { Text as TextStrokeImpl } from "@react-three/drei";

export default function TextStroke({
  secondary = false,
  color = "white",
  yRot = 0,
  bold = false,
  anchorX = "left",
  anchorY = "top",
  textAlign = "left",
  ...props
}) {
  const reflow = useReflow();
  let font = "";
  if (!secondary) {
    font = bold ? "/Poppins-ExtraBold.ttf" : "/Poppins-Medium.ttf";
    color = "white";
  } else {
    font = "/JetBrainsMono-Medium.ttf";
    color = "#11F6D4";
  }

  return (
    <TextStrokeImpl
      rotation={[0, yRot, 0]}
      color={color}
      anchorX={anchorX}
      anchorY={anchorY}
      textAlign={textAlign}
      font={font}
      fillOpacity={0}
      strokeWidth={'1%'}
      strokeColor="#ffffff"
      onSync={reflow}
      {...props}
    />
  );
}
