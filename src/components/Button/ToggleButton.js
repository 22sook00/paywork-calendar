import React from "react";
import { ToggleButtonWrapper } from "./styledButton";

function ToggleButton({ toggle, mode }) {
  return (
    <>
      <ToggleButtonWrapper onClick={toggle} mode={mode}>
        {mode === "dark" ? "Dark Mode" : "Light Mode"}
      </ToggleButtonWrapper>
    </>
  );
}

export default ToggleButton;
