import styled from "styled-components";
import {
  HoverGreyColor,
  PointColor,
  TextColor,
} from '../../GlobalStyle'

export const Btns = styled.button`
  width: fit-content;
  height: 40px;
  margin: 0 3px;
  padding: 0 10px;
  border-radius: 8px;
  background: ${HoverGreyColor};
  color: ${TextColor};
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