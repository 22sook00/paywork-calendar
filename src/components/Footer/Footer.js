import React from "react";
import { useTheme } from "../Hooks/themeProvider";
import { FooterContainer, FooterContext } from "./styledFooter";

function Footer() {
  const ThemeMode = useTheme();

  return (
    <FooterContainer theme={ThemeMode[0]}>
      <FooterContext>© 2021 Lee Sookyoung.</FooterContext>
    </FooterContainer>
  );
}

export default Footer;
