import React from "react";
import { StyledDayOfWeek, StyledDays } from "./styledCalendar";
import { useTheme } from "../Hooks/themeProvider";

function CalendarDayOfWeek() {
  const ThemeMode = useTheme();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <StyledDayOfWeek theme={ThemeMode[0]}>
      {dayOfWeek.map((el, idx) => {
        return <StyledDays key={idx}>{el}</StyledDays>;
      })}
    </StyledDayOfWeek>
  );
}

export default CalendarDayOfWeek;
