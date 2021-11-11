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

export const ToggleWrapper = styled.button`
  position: fixed;
  z-index: 999999;
  bottom: 4%;
  right: 3%;

  background: ${({ theme }) => theme.bgColor};
  color: ${({ theme }) => theme.textColor};

  font-size: 20px;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 96px;
  height: 48px;
  border-radius: 30px;

  box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;
`;
