import React from "react";
import moment from "moment";
import { useTheme } from "../Hooks/themeProvider";
import { Btns } from "./styledButton";

function CalendarButton({ value, changeMonthHandler }) {
  const ThemeMode = useTheme();

  const prevMonth = () => {
    return value.clone().subtract(1, "month");
  };
  const nextMonth = () => {
    return value.clone().add(1, "month");
  };
  const thisMonth = () => {
    return moment();
  };

  return (
    <div>
      <Btns
        theme={ThemeMode[0]}
        className="prev"
        onClick={() => changeMonthHandler(prevMonth())}
      >
        <i className="fas fa-chevron-left"></i>
      </Btns>

      <Btns
        theme={ThemeMode[0]}
        className="next"
        onClick={() => changeMonthHandler(nextMonth())}
      >
        <i className="fas fa-chevron-right"></i>
      </Btns>
      <Btns
        theme={ThemeMode[0]}
        className="this"
        onClick={() => changeMonthHandler(thisMonth())}
      >
        이번달
      </Btns>
    </div>
  );
}

export default CalendarButton;
