import React from "react";
import { StyledDays, StyledEachDay } from "./styledCalendar";
import { dayStyles } from "../Hook/calendarFunc";

function CalendarItem({ calendar, setValue, value }) {
  return (
    <>
      {calendar.map((week, idx) => {
        return (
          <div key={idx}>
            {week.map((day, idx) => {
              return (
                <StyledDays
                  key={idx}
                  className="day"
                  onClick={() => setValue(day)}
                >
                  <StyledEachDay className={dayStyles(day, value)}>
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
