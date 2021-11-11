import React from "react";
import { StyledDays, StyledEachDay } from "./styledCalendar";
import { useTheme } from "../Hooks/themeProvider";
import { dayStyles } from "../Hooks/calendarFunc";

function CalendarItem({ calendar, setValue, value }) {
  const ThemeMode = useTheme();

  return (
    <>
      {calendar.map((week, idx) => {
        return (
          <div key={idx}>
            {week.map((day, idx) => {
              return (
                <StyledDays
                  theme={ThemeMode[0]}
                  key={idx}
                  className="day"
                  onClick={() => setValue(day)}
                >
                  <StyledEachDay
                    theme={ThemeMode[0]}
                    className={dayStyles(day, value)}
                  >
                    {day.format("D").toString()}
                  </StyledEachDay>
                </StyledDays>
              );
            })}
          </div>
        );
      })}
    </>
  );
}

export default CalendarItem;
