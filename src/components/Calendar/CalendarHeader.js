import React from "react";
import CalendarButton from "../Button/CalendarButton";
import { FlexBox } from "./styledCalendar";

function CalendarHeader({ value, setValue }) {
  const curYear = () => {
    return value.format("YYYY");
  };
  const curMonth = () => {
    return value.format("MM");
  };

  return (
    <>
      <FlexBox>
        <p>
          {curYear()}.{curMonth()}
        </p>
        <CalendarButton value={value} setValue={setValue} />
      </FlexBox>
    </>
  );
}

export default CalendarHeader;
