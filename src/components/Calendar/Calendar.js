import React, { useState, useEffect } from "react";
import moment from "moment";
import { useTheme } from "../Hooks/themeProvider";
import { CalendarWrapper } from "./styledCalendar";
import CalendarHeader from "./CalendarHeader";
import CalendarDayOfWeek from "./CalendarDayOfWeek";
import CalendarItem from "./CalendarItem";

function Calendar() {
  const ThemeMode = useTheme();
  const [calendar, setCalendar] = useState([]);
  const [value, setValue] = useState(moment());

  const startDay = value.clone().startOf("month").startOf("week"); //전달 보여지는 마지막주
  const endDay = value.clone().endOf("month").endOf("week"); //다음달 보여지는 마지막주.

  useEffect(() => {
    const day = startDay.clone().subtract(1, "day"); //전달 보여지는 마지막주의 하루전.
    const calendarArr = [];
    // console.log('daydaydya',day.isBefore(endDay,'day')) //true 반환.->

    while (day.isBefore(endDay, "day")) {
      calendarArr.push(
        Array(7)
          .fill(0)
          .map(() => day.add(1, "day").clone())
      );
    }
    setCalendar(calendarArr);
    // console.log('calendar:::',calendar)
  }, [value]);

  const changeMonthHandler = (month) => {
    setValue(month);
  };

  return (
    <CalendarWrapper theme={ThemeMode[0]}>
      <CalendarHeader changeMonthHandler={changeMonthHandler} value={value} />
      <CalendarDayOfWeek />
      <CalendarItem
        calendar={calendar}
        value={value}
        changeMonthHandler={changeMonthHandler}
      />
    </CalendarWrapper>
  );
}

export default Calendar;
