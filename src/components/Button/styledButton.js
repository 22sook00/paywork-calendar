import styled from "styled-components";
import { HoverGreyColor, PointColor, TextColor } from "../../Theme/GlobalStyle";

export const Btns = styled.button`
  width: fit-content;
  height: 40px;
  margin: 0 3px;
  padding: 0 10px;
  border-radius: 8px;
  background: ${HoverGreyColor};
  color: ${({ theme }) => (theme === "light" ? TextColor : "#cbced6")};

  font-size: 18px;
  font-family: "Nanum Gothic Coding";
  letter-spacing: -1px;
  &:hover {
    color: ${PointColor};
    background: rgba(0, 0, 0, 0.01);
  }
  &.this {
    font-size: 16px;
    margin-right: 10px;
  }
`;

export const ToggleButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 48px;
  position: fixed;
  top: 50px;
  right: 50px;
  padding: 30px 50px;

  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};
  font-size: 20px;
  border-radius: 30px;

  box-shadow: ${({ mode }) =>
    mode === "light"
      ? "rgb(0,0,0,0.2) 0px 2px 16px 1px"
      : "#fff 0px 0px 10px 1px"};
  &:hover {
    transition: all 0.5s;
    opacity: 0.7;
  }
`;
