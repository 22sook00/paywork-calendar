import React from "react";
import moment from "moment";
import { Btns } from "./styledButton";

function CalendarButton({ value, setValue }) {
  const prevMonth = () => {
    return value.clone().subtract(1, "month");
  };
  const nextMonth = () => {
    return value.clone().add(1, "month");
  };
  const thisMonth = () => {
    // console.log('valueuu',value.format('DD'))
    return moment();
  };

  return (
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
  );
}

export default CalendarButton;
