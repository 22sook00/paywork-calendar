import React from "react";
import { StyledDayOfWeek, StyledDays } from "./styledCalendar";

function CalendarDayOfWeek() {
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <StyledDayOfWeek>
      {dayOfWeek.map((el, idx) => {
        return <StyledDays key={idx}>{el}</StyledDays>;
      })}
    </StyledDayOfWeek>
  );
}

export default CalendarDayOfWeek;
