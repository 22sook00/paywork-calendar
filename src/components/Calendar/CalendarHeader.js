import React from "react";
import { FlexBox, Btns, StyledDayOfWeek, StyledDays } from "./styledCalendar";

function CalendarHeader({
  curYear,
  curMonth,
  thisMonth,
  setValue,
  prevMonth,
  nextMonth,
}) {
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];

  return (
    <>
      <FlexBox>
        <p>
          {curYear()}.{curMonth()}
        </p>

        <div>
          <Btns className="prev" onClick={() => setValue(prevMonth())}>
            <i className="fas fa-chevron-left"></i>
          </Btns>

          <Btns className="next" onClick={() => setValue(nextMonth())}>
            <i className="fas fa-chevron-right"></i>
          </Btns>

          <Btns className="this" onClick={() => setValue(thisMonth())}>
            이번달
          </Btns>
        </div>
      </FlexBox>

      <StyledDayOfWeek>
        {dayOfWeek.map((el, idx) => {
          return <StyledDays key={idx}>{el}</StyledDays>;
        })}
      </StyledDayOfWeek>
    </>
  );
}

export default CalendarHeader;
