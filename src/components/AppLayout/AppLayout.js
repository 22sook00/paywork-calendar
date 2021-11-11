import React from "react";
import { useTheme } from "../../Components/Hooks/themeProvider";
import { Container, ThemeContainer } from "./styledAppLayout";

import ToggleButton from "../../Components/Button/ToggleButton";

const AppLayout = ({ children }) => {
  const [ThemeMode, toggleTheme] = useTheme();

  return (
    <Container>
      <ToggleButton toggle={toggleTheme} mode={ThemeMode} />
      <ThemeContainer>{children}</ThemeContainer>
    </Container>
  );
};

export default AppLayout;
