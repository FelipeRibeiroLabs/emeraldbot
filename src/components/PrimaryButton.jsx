import React from "react";

export default function PrimaryButton() {
  return (
    <button
      className="secondary"
      style={{
        width: "16em",
        borderRadius: "12px",
        color: "var(--primary)",
        background: "transparent",
        borderColor: "var(--primary)",
      }}
    >
      START BUILDING
    </button>
  );
}
