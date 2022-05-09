import React from "react";
import { useReflow } from "@react-three/flex";
import { Text as TextImpl } from "@react-three/drei";

export default function Text({
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
    <TextImpl
      rotation={[0, yRot, 0]}
      color={color}
      anchorX={anchorX}
      anchorY={anchorY}
      textAlign={textAlign}
      font={font}
      onSync={reflow}
      {...props}
    />
  );
}
