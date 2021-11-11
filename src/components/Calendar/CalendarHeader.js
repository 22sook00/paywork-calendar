import React from "react";
import CalendarButton from "../Button/CalendarButton";
import { useTheme } from "../Hooks/themeProvider";
import { FlexBox } from "./styledCalendar";

function CalendarHeader({ value, setValue }) {
  const curYear = () => {
    return value.format("YYYY");
  };
  const curMonth = () => {
    return value.format("MM");
  };

  const ThemeMode = useTheme();

  return (
    <>
      <FlexBox>
        <p>
          {curYear()}.{curMonth()}
        </p>
        <CalendarButton 
        theme={ThemeMode[0]}
        value={value} setValue={setValue} />
      </FlexBox>
    </>
  );
}

export default CalendarHeader;
