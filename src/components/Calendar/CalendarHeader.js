import React from "react";
import CalendarButton from "../Button/CalendarButton";
import { useTheme } from "../Hooks/themeProvider";
import { FlexBox } from "./styledCalendar";

function CalendarHeader({ value, changeMonthHandler }) {
  const ThemeMode = useTheme();
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
        <CalendarButton
          theme={ThemeMode[0]}
          changeMonthHandler={changeMonthHandler}
          value={value}
        />
      </FlexBox>
    </>
  );
}

export default CalendarHeader;
