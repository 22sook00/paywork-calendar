import styled from "styled-components";
import {
  HoverGreyColor,
  PointColor,
  TextColor,
} from "../../GlobalStyle";

export const CalendarWrapper = styled.div`
  width: 430px;
  height: 460px;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 16px 1px;
  border-radius: 8px;
  padding: 30px;
  box-sizing: border-box;
`;
export const StyledDays = styled.div`
  width: calc(100% / 7);
  height: 50px;
  line-height: 50px;
  display: inline-block;
  box-sizing: border-box;
  text-align: center;
  cursor: pointer;
  &:nth-child(1) {
    color: #f5738b;
  }
  &:nth-child(7) {
    color: ${PointColor};
  }
`;
export const StyledEachDay = styled.div`
  border-radius: 50%;
  margin: 0 1px;
  &:hover {
    transition: all 0.5s;
    background: ${HoverGreyColor};
  }
  &.today {
    background: #e4e7ed;
    color: black;
    font-weight: 800;
  }
  &.focus {
    background: ${PointColor};
    color: #fff;
  }
  &.not-cur-month {
    color: #cbced6;
  }
`;
export const FlexBox = styled.div`
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > p {
    font-size: 20px;
    margin-left: 18px;
  }
`;

export const StyledDayOfWeek = styled.div`
  font-family: "Nanum Gothic Coding";
  > div {
    color: ${TextColor};
    font-weight: 900;
  }
`;
